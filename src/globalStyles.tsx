import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;    
    font-size: 16px;
    font-family: Spartan;
  }

  body{
    margin: 0;
    padding: 0;  
  }
  p{
    text-align: center;
  }

  *{
    box-sizing: border-box;
  }

`
