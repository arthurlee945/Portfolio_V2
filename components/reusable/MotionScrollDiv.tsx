import { FC, ReactNode, useMemo, useRef } from "react";
import { m, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
interface MSDProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  scrollDir?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

const MotionScrollDiv: FC<MSDProps> = ({ children, scrollDir = "down", className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });
  const scrollPercentage = useTransform(
    scrollYProgress,
    [0, 1],
    scrollDir === "up" || scrollDir === "left" ? ["0%", "-115%"] : ["0%", "115%"]
  );
  const scrollPlaceholder = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  const directionMemo = useMemo(() => {
    if (scrollDir === "up" || scrollDir === "down") {
      return { y: scrollPercentage, x: scrollPlaceholder };
    } else {
      return { x: scrollPercentage, y: scrollPlaceholder };
    }
  }, [scrollDir]);
  return (
    <m.div ref={ref} className={className} style={{ ...directionMemo, transform: "translateY(0)" }}>
      {children}
    </m.div>
  );
};

export default MotionScrollDiv;
