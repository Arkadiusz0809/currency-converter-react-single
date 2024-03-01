import { createGlobalStyle } from "styled-components";
import background from "./images/currencies-image.jpg"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;  
    background-attachment: fixed;
    font-family: 'Lato', sans-serif;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  }  
`;
