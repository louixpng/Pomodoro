import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { CounterContainer, Divider, FormContainer, HomeContainer, MinutesInput, StartCountdownButton, StopCountdownButton, TaskInput } from "./Home.style";
import * as zod from "zod";
import { useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns';

const formValidationSchemas = zod.object({
    task: zod.string().min(1, 'Informe a tarefa!'),
    minutesAmount: zod.number()
        .min(1, 'O ciclo precisa ter pelo menos 5 minutos')
        .max(60, 'O ciclo precisa ter no máximo 60 minutos')
})

type CycleFormData = zod.infer<typeof formValidationSchemas>

interface Cycle {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date
}

export default function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const { register, handleSubmit, watch, reset } = useForm<CycleFormData>({
        resolver: zodResolver(formValidationSchemas),
        defaultValues: {
            task: '',
        }
    });

    const activeCycle = cycles.find((cycles) => cycles.id === activeCycleId)

    function handleCreateNewCycle(data: CycleFormData) {
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(id);
        setAmountSecondsPassed(0);
        reset();
    }

    function handleInterruptCycle() {
        setCycles((state) => state.map(cycle => {
            if (cycle.id === activeCycleId) {
                return { ...cycle, interruptedDate: new Date() }
            } else {
                return cycle;
            }
        }))
        setActiveCycleId(null);
    }

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        let interval: number;
        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(
                    new Date(), 
                    activeCycle.startDate
                )
                
                if (secondsDifference >= totalSeconds) {
                    setCycles((state) => 
                        state.map(cycle => {
                        if (cycle.id === activeCycleId) {
                            return { ...cycle, finishedDate: new Date() }
                        } else {
                            return cycle;
                        }
                    }))

                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(interval)
                } else {
                    setAmountSecondsPassed(secondsDifference)
                }

            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [activeCycle, activeCycleId, totalSeconds]);

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds} - Cronômetro Online`
        }
    }, [minutes, seconds, activeCycle])

    const task = watch('task');
    const minutesAmountWatcher = watch('minutesAmount');
    const isSubmitDisabled = !task || !minutesAmountWatcher;


    console.log(cycles)

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        type="text"
                        id="task"
                        list="task-suggestions"
                        placeholder="Nome do projeto/atividade"
                        {...register('task')}
                        disabled={!!activeCycle}
                    />

                    <datalist id="task-suggestions">
                        <option value="Mike" />
                        <option value="Portal Liferay" />
                        <option value="Projetos pessoais" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={1}
                        {...register('minutesAmount', { valueAsNumber: true })}
                        disabled={!!activeCycle}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CounterContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Divider>:</Divider>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CounterContainer>

                {activeCycle ? (
                    <StopCountdownButton onClick={handleInterruptCycle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={28}>
                            <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clip-rule="evenodd" />
                        </svg>
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={28}>
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                        Começar
                    </StartCountdownButton>
                )
                }

            </form>
        </HomeContainer>
    )
}