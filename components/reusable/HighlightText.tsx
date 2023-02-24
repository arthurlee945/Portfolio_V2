import { FC } from "react";
import styled from "styled-components";
import { highlightEffect } from "../../styles/style-variables";
interface HLProps {
  children: string;
  className?: string;
}
const HighLightTextContainer = styled.div`
  display: flex;
  align-items: center;
  ${highlightEffect}
`;
const HighlightText: FC<HLProps> = ({ children, className }) => {
  return (
    <HighLightTextContainer id="highlight-text" className={className}>
      {children.split("").map((letter, i, text) => {
        return <p key={`${text}/${letter}-${Math.abs(Math.random() * 1000)}-${i}`}>{letter === " " ? <>&nbsp;</> : letter}</p>;
      })}
    </HighLightTextContainer>
  );
};

export default HighlightText;
