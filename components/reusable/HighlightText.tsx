import { FC } from "react";
import styled from "styled-components";
import { highlightEffect } from "../../styles/style-variables";
interface HLProps {
  children: string;
  className?: string;
  fragment?: boolean;
}
const HighLightTextContainer = styled.div`
  display: flex;
  align-items: center;
  ${highlightEffect}
`;
const HighlightText: FC<HLProps> = ({ children, className, fragment = false }) => {
  return (
    <>
      {!fragment ? (
        <HighLightTextContainer id="highlight-text" className={className} aria-label={children}>
          {children.split(" ").map((letter, i) => {
            return (
              <span key={`${letter}-${i}`}>
                {letter.split("").map((letter, i) => (
                  <p key={`${letter}-${i}`}>{letter}</p>
                ))}
              </span>
            );
          })}
        </HighLightTextContainer>
      ) : (
        children.split(" ").map((letter, i) => {
          return (
            <span key={`${letter}-${i}`}>
              {letter.split("").map((letter, i) => (
                <p key={`${letter}-${i}`}>{letter}</p>
              ))}
            </span>
          );
        })
      )}
    </>
  );
};

export default HighlightText;
