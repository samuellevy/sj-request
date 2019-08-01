import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{margin: 0; padding: 0; outline: none; box-sizing: border-box; list-style: none;}
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300&display=swap');

  html{
    height: 100%;
    background-color: #282a36;
    color: #fff;
    font-family: 'Fira Sans';
    font-weight: 300;
    body{
      height: 100%;
      #root{
        height: 100%;
      }
    }
  }
  a,
  ::before,
  ::after{
    text-decoration:none;
  }
`;
