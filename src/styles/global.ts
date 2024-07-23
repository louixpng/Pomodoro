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
  
  ::-webkit-scrollbar{
    width: 4px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme["purple-300"]};
    border-radius: 10px;
  }

  body, button, input {
    background-color: ${props => props.theme["cream-500"]};
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }
  `