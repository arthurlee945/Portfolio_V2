import { createGlobalStyle, css } from "styled-components";
import { colors } from "./style-variables";
interface GSTypes {
  navState?: boolean;
  lockState?: boolean;
}
export const GlobalStyle = createGlobalStyle<GSTypes>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color:transparent;
  }

  html,
  body {
    font-family: "Hubot Sans", sans-serif;
    background-color: ${colors.richBlack};
    color: ${colors.white};
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
    border:1px solid ${colors.white};
    position: relative;
    min-height: calc(100vh - 50px);
  }

  @media only screen and (min-width: 601px) and (max-width: 1100px) {
    body{
      padding:15px;
      ${({ lockState }) =>
        lockState &&
        css`
          overflow: hidden;
        `}
    }
    #__next{
      min-height: calc(100vh - 40px);
    }
  }
  @media only screen and (max-width: 600px) {
    body{
      padding:10px;
      ${({ navState, lockState }) =>
        (navState || lockState) &&
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
    width: 7px;
  }
  body::-webkit-scrollbar-track {
    background-color: #9c9c9c;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #1a1c1f;
    transition: background-color 250ms;
  }
  body::-webkit-scrollbar-thumb:hover {
    background-color: #2a2d31;
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
  *::selection {
        background-color: ${colors.white};
        color: #0b0d10;
      }
`;
