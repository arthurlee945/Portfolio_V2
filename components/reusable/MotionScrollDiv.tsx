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
  const scrollUpDown = useTransform(
    scrollYProgress,
    [0, 1],
    (scrollDir != "up" && scrollDir != "down")? ["0%", "0%"] : scrollDir === "up" ? ["0%", "-115%"] : ["0%", "115%"]
  );
  const scrollLeftRight = useTransform(scrollYProgress, [0, 1], (scrollDir != "left" && scrollDir != "right")? ["0%", "0%"] : scrollDir === "left" ? ["0%", "-115%"] : ["0%", "115%"]);

  const directionMemo = useMemo(() => {
    if (scrollDir === "up" || scrollDir === "down") {
      return { y: scrollUpDown, x:0 };
    } else {
      return { x: scrollLeftRight, y:0 };
    }
  }, [scrollDir]);
  return (
    <m.div key={className} ref={ref} className={className} style={{ ...directionMemo }} >
      {children}
    </m.div>
  );
};

export default MotionScrollDiv;
