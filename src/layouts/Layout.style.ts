import styled from 'styled-components'

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 74rem;
    height: calc(110vh - 10rem);

    background-color: ${props => props.theme['cream-900']};
    border: 2px solid ${props => props.theme['purple-500']};
    border-radius: 8px;

    margin: 3rem auto;
    padding: 3rem;
`