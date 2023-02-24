import { FC, ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  element?: "div" | "section" | "ul" | "header" | "footer";
  direction?: "up" | "down" | "right" | "left";
  children?: ReactNode;
}

const AosElement: FC<Props> = ({ element = "div", direction = "up", children, transition = {}, viewport = {} }) => {
  const directionAni = {
    up: { y: "50%" },
    down: { y: "-50%" },
    left: { x: "50%" },
    right: { x: "-50%" },
  };
  const motionProps = {
    style: { opacity: 0, ...directionAni[direction] },
    whileInView: { opacity: 1, y: 0 },
    transition: transition,
    viewport: { amount: 0.7, ...viewport },
  };

  switch (element) {
    case "section":
      return <motion.section {...motionProps}>{children}</motion.section>;
    case "ul":
      return <motion.ul {...motionProps}>{children}</motion.ul>;
    default:
      return <motion.div {...motionProps}>{children}</motion.div>;
  }
};

export default AosElement;
