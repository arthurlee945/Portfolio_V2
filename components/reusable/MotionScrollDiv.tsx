import { FC, ReactNode, useRef } from "react";
import { m, useScroll, useMotionValue, useTransform, HTMLMotionProps } from "framer-motion";
interface MSDProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  scrollDir?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

const MotionScrollDiv: FC<MSDProps> = ({ children, scrollDir = "down", delay = 0, className }) => {
  const mdRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scrollPercentage = useTransform(
    scrollYProgress,
    [delay, 1],
    scrollDir === "up" || scrollDir === "left" ? ["0%", "-100%"] : ["0%", "100%"]
  );

  return (
    <m.div
      ref={mdRef}
      className={className}
      style={scrollDir === "up" || scrollDir === "down" ? { y: scrollPercentage } : { x: scrollPercentage }}
    >
      {children}
    </m.div>
  );
};

export default MotionScrollDiv;
