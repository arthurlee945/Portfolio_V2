import Link from "next/link";
import styled from "styled-components";
import { underline, highlightEffect } from "../../styles/style-variables";
interface Props {
  children: string;
  href: string;
  target?: string;
  underline?: boolean;
  className?: string;
}

const LinkStyled = styled(Link)<{ addunderline: "true" | "false" }>`
  position: relative;
  justify-content: center;
  display: flex;
  font-size: 1.4rem;
  font-weight: 500;
  ${({ addunderline }) => addunderline === "true" && underline};
  ${highlightEffect}
`;

const HighlightLink: React.FC<Props> = ({ children, href, className, target = "_self", underline = true }) => {
  return (
    <LinkStyled href={href} target={target} addunderline={`${underline}`} className={className} aria-label={children}>
      {children.split(" ").map((letter, i) => {
        return (
          <span key={`${letter}-${i}`}>
            {letter.split("").map((letter, i) => (
              <p key={`${letter}-${i}`}>{letter}</p>
            ))}
          </span>
        );
      })}
    </LinkStyled>
  );
};

export default HighlightLink;
