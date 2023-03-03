import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { m } from "framer-motion";
import { colors, medias } from "@/styles/style-variables";

interface LAProps {
  children: string;
  href: string;
  target?: string;
  className?: string;
}
const LinkArrowContainer = styled(Link)`
  width: fit-content;
  color: ${colors.white};
  display: flex;
  align-items: center;
  border: 1px solid ${colors.white};
  font-size: 1.1rem;
  @media only screen and (max-width: ${medias.phone + "px"}) {
    font-size: 1rem;
  }
  --pseudo-width: 25px;
  &:after,
  &:before {
    overflow: hidden;
    width: var(--pseudo-width);
    transition: width 250ms, padding 250ms;
    transition-timing-function: ease-in-out;
  }
  &::after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 15 50 20' width='25px' fill='%23FAF9F6'%3E%3Cpath d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'/%3E%3C/svg%3E");
    padding: 12.5px;
    margin-left: 25px;
    border-left: 1px solid ${colors.white};
    @media only screen and (max-width: ${medias.phone + "px"}) {
      padding: 10px;
      margin-left: 20px;
    }
  }
  &::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 15 50 20' width='25px' fill='%230b0d10'%3E%3Cpath d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'/%3E%3C/svg%3E");
    margin-right: 25px;
    background-color: ${colors.white};
    padding: 12.5px 0px;
    width: 0;
    @media only screen and (max-width: ${medias.phone + "px"}) {
      padding: 10px 0px;
      margin-right: 20px;
    }
  }
  &:hover {
    &::after {
      padding: 12.5px 0px;
      width: 0;
      @media only screen and (max-width: ${medias.phone + "px"}) {
        padding: 10px 0px;
      }
    }
    &::before {
      padding: 12.5px;
      width: 25px;
      @media only screen and (max-width: ${medias.phone + "px"}) {
        padding: 10px;
      }
    }
  }
`;
const LinkArrow: FC<LAProps> = ({ children, className, href, target = "_self" }) => {
  return (
    <LinkArrowContainer className={className} href={href} target={target}>
      {children}
    </LinkArrowContainer>
  );
};

export default LinkArrow;
