import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body, button, input {
    background-color: ${props => props.theme["cream-500"]};
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }
  `