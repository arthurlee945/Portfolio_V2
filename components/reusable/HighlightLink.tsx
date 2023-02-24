import Link from "next/link";
import styled from "styled-components";
import { colors, underline } from "../../styles/style-variables";
interface Props {
  children: string;
  href: string;
  target?: string;
  underline?: boolean;
  className?: string;
}

const LinkStyled = styled(Link)<{ addUnderline: boolean }>`
  position: relative;
  justify-content: center;
  display: flex;
  font-size: 1.4rem;
  font-weight: 500;
  ${({ addUnderline }) => addUnderline && underline}
  p {
    transition: font-weight 150ms;
    color: ${colors.white};
    &:has(+ p + ${"p:hover"}) {
      font-weight: 600;
    }
    &:has(+ ${"p:hover"}) {
      font-weight: 700;
    }
    &:hover {
      font-weight: 800;
      & + p {
        font-weight: 700;
        & + p {
          font-weight: 600;
        }
      }
    }
  }
`;

const HighlightLink: React.FC<Props> = ({ children, href, className, target = "_self", underline = false }) => {
  return (
    <LinkStyled href={href} target={target} addUnderline={!!underline} className={className}>
      {children.split("").map((letter, i) => {
        return <p key={`${letter}-${i}`}>{letter === " " ? <>&nbsp;</> : letter}</p>;
      })}
    </LinkStyled>
  );
};

export default HighlightLink;
