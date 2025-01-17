import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${props => props.theme["purple-500"]};
`

const BaseInput = styled.input`
    background: none;
    border: 0;
    height: 2rem;
    padding: 0 0.5rem;
    font-size: 0.9rem;
    color: ${props => props.theme["purple-300"]};
    border-top: 1px solid transparent;
    border-bottom: 1px solid ${props => props.theme["purple-500"]};

    &::placeholder {
        color: ${props => props.theme["purple-300"]};
    }

    &:focus {
        border-bottom: 2px solid ${props => props.theme["purple-500"]};
        color: ${props => props.theme["purple-300"]};
        font-weight: bold;
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const MinutesInput = styled(BaseInput)`
    width: 3rem;
`

export const CounterContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    user-select: none;
    color: ${props => props.theme["cream-900"]};
    
    display: flex;
    gap: 1rem;


    span {
        background-color: ${props => props.theme["purple-500"]};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`

export const Divider = styled.p`
    padding: 2rem 0;
    color: ${props => props.theme["purple-500"]};

    overflow: hidden;
    display: flex;
    width: 4rem;
    justify-content: center;
    user-select: none;
`

export const CountdownButton = styled.button`
    width: 100%;
    padding: 1rem;
    border: 0;
    border-radius: 8px;
    font-weight: bold;

    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
    }
`

export const StartCountdownButton = styled(CountdownButton)`
    color: ${props => props.theme["cream-900"]};
    background-color: ${props => props.theme["purple-500"]};

    &:not(:disabled):hover {
        background-color: ${props => props.theme["purple-300"]};
    }
`

export const StopCountdownButton = styled(CountdownButton)`
    color: ${props => props.theme["cream-900"]};
    background-color: crimson;

    &:not(:disabled):hover {
        background-color: indianred;
    }
`