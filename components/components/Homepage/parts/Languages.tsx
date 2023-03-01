import { FC } from "react";
import styled from "styled-components";
import HTML from "@/styles/icons/html-5.svg";
import Typescript from "@/styles/icons/typescript.svg";
import Pythom from "@/styles/icons/python.svg";
import Php from "@/styles/icons/php.svg";
import Sass from "@/styles/icons/sass.svg";
import NodeJs from "@/styles/icons/nodejs.svg";
import { colors, medias } from "@/styles/style-variables";
interface LanguagesProps {}

const LanguagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: max(5%, 5px);
  @media only screen and (max-width: ${medias.phone + "px"}) {
    flex-wrap: wrap;
    row-gap: 25px;
  }
  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    row-gap: 10px;
    width: 10%;
    font-size: 0.95rem;
    @media only screen and (max-width: ${medias.phone + "px"}) {
      width: 25%;
    }
    svg {
      fill: ${colors.white};
      width: max(75%, 60px);
      height: fit-content;
      @media only screen and (max-width: ${medias.phone + "px"}) {
        width: max(65%, 60px);
      }
    }
  }
`;

const Languages: FC<LanguagesProps> = ({}) => {
  return (
    <LanguagesContainer>
      <div className="icon-container">
        <Typescript />
        Typescript
      </div>
      <div className="icon-container">
        <HTML />
        HTML
      </div>
      <div className="icon-container">
        <Sass />
        Sass
      </div>
      <div className="icon-container">
        <Pythom />
        Pythom
      </div>
      <div className="icon-container">
        <Php />
        Php
      </div>
      <div className="icon-container">
        <NodeJs />
        NodeJs
      </div>
    </LanguagesContainer>
  );
};

export default Languages;
