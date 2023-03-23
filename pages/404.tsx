import { FC } from "react";
import styled from "styled-components";
import HighlightText from "components/reusable/HighlightText";
import { highlightEffect, medias } from "@/styles/style-variables";
import ArrowLink from "components/reusable/ArrowLink";
const Custom404Contaienr = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  padding: 200px 50px;
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 150px 25px;
    row-gap: 35px;
  }
  .c404-header {
    display: flex;
    ${highlightEffect}
    cursor:default;
    justify-content: center;
    font-weight: 500;
    font-size: 2.75rem;
    column-gap: 0.7rem;
    flex-wrap: wrap;
    @media only screen and (max-width: ${medias.phone + "px"}) {
      font-size: 2rem;
      column-gap: 0.5rem;
    }
  }
`;

interface custom404Props {}

const custom404: FC<custom404Props> = ({}) => {
  return (
    <Custom404Contaienr>
      <h1 className="c404-header">
        <HighlightText fragment={true}>How Did You End Up Here??</HighlightText>
      </h1>
      <ArrowLink href="/">Go Back</ArrowLink>
    </Custom404Contaienr>
  );
};

export default custom404;
