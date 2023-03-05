import { FC, forwardRef, ReactNode } from "react";
import { HTMLMotionProps, m } from "framer-motion";
import Link from "next/link";

interface Props extends HTMLMotionProps<"div"> {
  element?: "div" | "section" | "ul" | "link";
  direction?: "up" | "down" | "right" | "left";
  children?: ReactNode;
  className?: string;
  [rest: string]: unknown;
}

const AosElement: FC<Props> = ({ element = "div", direction = "up", children, className, transition = {}, viewport = {}, ...rest }) => {
  const directionAni = {
    up: { y: "25%" },
    down: { y: "-25%" },
    left: { x: "25%" },
    right: { x: "-25%" },
  };

  const motionProps = {
    style: { opacity: 0, ...directionAni[direction] },
    whileInView: { opacity: 1, y: 0, x: 0 },
    transition: { duration: 0.35, ...transition },
    viewport: { amount: 0.7, once: true, ...viewport },
    className: className,
    ...rest,
  };

  switch (element) {
    case "section":
      return <m.section {...motionProps}>{children}</m.section>;
    case "link":
      const CustomComponent = forwardRef<HTMLAnchorElement>((props, ref) => (
        <Link ref={ref} href="/" {...props}>
          {children}
        </Link>
      ));
      const LinkMotionComponent = m(CustomComponent);
      return <LinkMotionComponent {...motionProps} />;
    default:
      return <m.div {...motionProps}>{children}</m.div>;
  }
};

export default AosElement;
