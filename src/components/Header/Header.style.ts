import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["purple-500"]};
    flex-wrap: wrap;

    nav {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        a {
          color: ${props => props.theme["purple-500"]};
          border-top: 3px solid transparent;
          border-bottom: 3px solid transparent;

          &:hover {
            border-bottom: 3px solid ${props => props.theme["purple-500"]};
          }

          &.active {
            border-bottom: 3px solid ${props => props.theme["purple-500"]};  
            stroke-width: 4px;
          }

          svg {
            &.active {

            }
          }
        }
    }
`