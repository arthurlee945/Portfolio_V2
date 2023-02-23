import { createGlobalStyle } from "styled-components";
import { colors, medias } from "./style-variables";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Hubot Sans';
  src:
    url('./fonts/Hubot-Sans.ttf') format('truetype'),
    url('./fonts/Hubot-Sans.woff2') format('woff2');
  font-weight: 200 900;
  font-stretch: 75% 125%;
}


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
  >#__next{
    border:1px solid ${colors.white};
    position: relative;
    padding:10px;
    min-height: calc(100vh - 50px);
    overflow:hidden;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      min-height: calc(100vh - 40px);
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      min-height: calc(100vh - 20px);
    }
    &.nav-open {
      overflow:hidden;
    }
  }
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding:15px;
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding:10px;
  }
}

/*override default scroll bar*/

body{
  &::-webkit-scrollbar {
    appearance: none;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    transition: background-color 250ms;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
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

export default GlobalStyle;
