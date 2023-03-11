import { FC, useRef } from "react";
import { m, useScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";
import { medias } from "@/styles/style-variables";
import HighlightText from "./HighlightText";

interface SBProps {
  children: string;
  className?: string;
  offset?: number[];
}
const ScrollBoardContainer = styled(m.div)`
  padding: 20px 15px;
  width: fit-content;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 15px 10px;
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 10px;
  }
  .repeating-text {
    position: relative;
    font-size: 4.5rem;
    cursor: default;
    column-gap: 2rem;
    text-transform: uppercase;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      font-size: 3.5rem;
      column-gap: 1.5rem;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      font-size: 2.5rem;
      column-gap: 1rem;
    }
  }
`;
const ScrollBoard: FC<SBProps> = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.5", "0 -0.5"],
  });
  const springScroll = useSpring(scrollYProgress, { stiffness: 5, damping: 3 });
  const scrollProgress = useTransform(springScroll, [0, 1], ["0%", "-50%"]);
  return (
    <ScrollBoardContainer className={className} ref={ref} style={{ x: scrollProgress, y: 0 }}>
      <HighlightText className="repeating-text">{children + " " + children}</HighlightText>
    </ScrollBoardContainer>
  );
};

export default ScrollBoard;
