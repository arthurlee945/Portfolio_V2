import { FC, ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  element?: "div" | "section" | "ul" | "header" | "footer";
  direction?: "up" | "down" | "right" | "left";
  children?: ReactNode;
}

const FadeIn: FC<Props> = ({ element = "div", direction = "up", children, transition = {}, viewport }) => {
  const directionAni = {
    up: { y: "50%" },
    down: { y: "-50%" },
    left: { x: "50%" },
    right: { x: "-50%" },
  };
  const motionProps = {
    initial: { opacity: 0, ...directionAni[direction] },
    whileInView: { opacity: 1, y: 0 },
    transition: transition,
    viewport: viewport,
  };

  switch (element) {
    case "header":
      return <motion.header {...motionProps}>{children}</motion.header>;
    case "section":
      return <motion.section {...motionProps}>{children}</motion.section>;
    case "ul":
      return <motion.ul {...motionProps}>{children}</motion.ul>;
    case "footer":
      return <motion.footer {...motionProps}>{children}</motion.footer>;
    default:
      return <motion.div {...motionProps}>{children}</motion.div>;
  }
};

export default FadeIn;
