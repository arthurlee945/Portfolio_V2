import Link from "next/link";
import styled from "@emotion/styled";

interface Props {
  children: string;
  href: string;
  target?: string;
}

const LinkStyled = styled(Link)`
  position: relative;
  justify-content: center;
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 0px;
    transform: translateY(100%);
    background-color: var(--amber);
    transition: width 250ms;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
  p {
    transition: font-weight 150ms;
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

const StyledLink: React.FC<Props> = ({ children, href, target }) => {
  return (
    <LinkStyled href={href} target={target ? target : "_self"}>
      {children.split("").map((letter, i) => {
        return <p key={`${letter}-${i}`}>{letter}</p>;
      })}
    </LinkStyled>
  );
};

export default StyledLink;
