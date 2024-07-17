import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { CountdownButton, CounterContainer, Divider, FormContainer, HomeContainer, MinutesInput, TaskInput } from "./Home.style";
import * as zod from "zod"

const formValidationSchemas = zod.object({
    task: zod.string().min(1, 'Informe a tarefa!'),
    minutesAmount: zod.number().min(5).max(60)
})

export default function Home() {

    const { register, handleSubmit, watch, reset, formState } = useForm({
        resolver: zodResolver(formValidationSchemas),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    });

    function handleCreateNewCycle(data: FieldValues){
        console.log(data);
        reset();
    }

    console.log(formState.errors);

    const task = watch('task');
    const minutes = watch('minutesAmount');
    const isSubmitDisabled = !task || !minutes;

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
                        min={5} 
                        {...register('minutesAmount', {valueAsNumber: true})} 
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CounterContainer>
                    <span>0</span>
                    <span>0</span>
                    <Divider>:</Divider>
                    <span>0</span>
                    <span>0</span>
                </CounterContainer>

                <CountdownButton type="submit" disabled={isSubmitDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={28}>
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                    Começar
                </CountdownButton>
            </form>
        </HomeContainer>
    )
}