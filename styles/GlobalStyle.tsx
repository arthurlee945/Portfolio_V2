import { createGlobalStyle, css } from "styled-components";

interface GSTypes {
  navState?: boolean;
}
export const GlobalStyle = createGlobalStyle<GSTypes>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }


  html,
  body {
    font-family: "Hubot Sans", sans-serif;
    background-color: #0b0d10;
    color: #FAF9F6;
    scroll-behavior: smooth;
    scrollbar-width: thin;
  }
  body{
    max-width:1920px;
    margin:0px auto;
    padding:20px 15px;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  #__next{
    border:1px solid #FAF9F6;
    position: relative;
    min-height: calc(100vh - 50px);
  }

  @media only screen and (min-width: 501px) and (max-width: 1100px) {
    body{
      padding:15px;
    }
    #__next{
      min-height: calc(100vh - 40px);
    }
  }
  @media only screen and (max-width: 500px) {
    body{
      padding:10px;
      ${({ navState }) =>
        navState &&
        css`
          overflow: hidden;
        `}
    }
    #__next{
      min-height: calc(100vh - 20px);
    }


  }

  /*override default scroll bar*/

  body::-webkit-scrollbar {
    appearance: none;
    width: 8px;
  }
  body::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #888;
    transition: background-color 250ms;
  }
  body::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button{
    background-color:transparent;
    border:none;
    cursor:pointer;
  }
  li,
  ul{
    list-style: none;
  }
`;
