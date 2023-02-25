import Link from "next/link";
import styled from "styled-components";
import { colors, underline, highlightEffect } from "../../styles/style-variables";
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
    <LinkStyled href={href} target={target} addunderline={`${underline}`} className={className}>
      {children.split("").map((letter, i) => {
        return <p key={`${letter}-${i}`}>{letter === " " ? <>&nbsp;</> : letter}</p>;
      })}
    </LinkStyled>
  );
};

export default HighlightLink;
