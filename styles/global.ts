import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Nunito', sans-serif;
  }
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
