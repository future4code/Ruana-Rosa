import { createGlobalStyle } from "styled-components";


 

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'monogram-extended';
    src: url('../fonts/monogram-extended.ttf') format('truetype');
  }

*{
    margin: 0;
    padding: 0;
    max-width: 100vw;
    font-family: 'monogram-extended';
}

`

export default GlobalStyle
