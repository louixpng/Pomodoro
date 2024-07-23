import { styled } from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;

    padding: 3rem;
    display: flex;
    flex-direction: column;
    overflow: auto;

    h1 {
        font-size: 1.9rem;
        color: ${props => props.theme["purple-500"]};
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.8rem;

        th {
            background-color: ${props => props.theme["purple-500"]};
            color: ${props => props.theme["cream-900"]};
            padding: 1rem;
            text-align: left;
            line-height: 1.6;

            &:first-child {
                padding-left: 1.5rem;
                border-top-left-radius: 8px;
            }

            &:last-child {
                padding-right: 1.5rem;
                border-top-right-radius: 8px;
            }
        }

        td {
            background-color: ${props => props.theme["cream-500"]};
            padding: 1rem;
            line-height: 1.6;
            border-top: 1px solid ${props => props.theme["purple-500"]};

            &:first-child {
                padding-left: 1.5rem;
                width: 40%;

            }

            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`

const STATUS_COLORS = {
    green: 'green-500',
    red: 'red-500',
    yellow: 'yellow-500'
} as const

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
}

export const TaskStatus = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: "";
        background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
    }
`