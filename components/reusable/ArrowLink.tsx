import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { m } from "framer-motion";
import { colors } from "@/styles/style-variables";

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
  --pseudo-width: 25px;
  &:after,
  &:before {
    width: var(--pseudo-width);
    transition: width 250ms, padding 250ms;
    transition-timing-function: ease-in-out;
  }
  &:after {
    content: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 15 50 20'%3E%3Cpath fill='%23FAF9F6' className='arrow-path' d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z' /%3E%3C/svg%3E");
    padding: 12px;
    margin-left: 25px;
    border-left: 1px solid ${colors.white};
  }
  &:before {
    content: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 15 50 20'%3E%3Cpath fill='%230b0d10' className='arrow-path' d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z' /%3E%3C/svg%3E");
    margin-right: 25px;
    background-color: ${colors.white};
    padding: 12px;
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
