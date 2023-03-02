import { colors } from "@/styles/style-variables";
import Image from "next/image";
import { m } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
interface SZProps {}
const ShapeZoomContainer = styled(m.div)`
  position: relative;
  border: 1px solid ${colors.white};
  flex: 1;
  min-height: 150px;
  overflow: hidden;
  .lines {
    fill: transparent;
    stroke-width: 1px;
    stroke: ${colors.white};
    width: 100%;
    height: 100%;
  }
`;
const ShapeZoom: FC<SZProps> = ({}) => {
  return (
    <ShapeZoomContainer style={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
      {/* <svg
        version="1.1"
        className="lines"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        viewBox="0 0 500.0 300.0"
        enable-background="new 0 0 500.0 300.0"
        xmlSpace="preserve"
      >
        <path d="M146.64,-144.96C-74.98,37.82,151.82,68.58,-69.79,251.37" />
        <path d="M208.82,-117.23C-12.80,65.56,214.00,96.32,-7.61,279.11" />
        <path d="M271.00,-89.49C49.38,93.30,276.19,124.06,54.57,306.84" />
        <path d="M333.18,-61.75C111.57,121.03,338.37,151.80,116.75,334.58" />
        <path d="M395.36,-34.01C173.75,148.77,400.55,179.53,178.93,362.32" />
        <path d="M457.54,-6.28C235.93,176.51,462.73,207.27,241.11,390.06" />
        <path d="M519.72,21.46C298.11,204.25,524.91,235.01,303.29,417.79" />
        <path d="M581.90,49.20C360.29,231.99,587.09,262.75,365.47,445.53" />
        <path d="M644.08,76.94C422.47,259.72,649.27,290.48,427.66,473.27" />
        <path d="M686.14,162.18C592.43,474.47,471.32,283.85,377.61,596.13" />
        <path d="M633.71,121.35C540.00,433.64,418.89,243.02,325.18,555.30" />
        <path d="M581.27,80.52C487.56,392.80,366.45,202.19,272.74,514.47" />
        <path d="M528.84,39.69C435.13,351.97,314.02,161.35,220.31,473.64" />
        <path d="M476.40,-1.14C382.69,311.14,261.58,120.52,167.87,432.81" />
        <path d="M423.96,-41.97C330.25,270.31,209.15,79.69,115.43,391.98" />
        <path d="M371.53,-82.80C277.82,229.48,156.71,38.86,63.00,351.15" />
        <path d="M319.09,-123.64C225.38,188.65,104.27,-1.97,10.56,310.32" />
        <path d="M266.66,-164.47C172.95,147.82,51.84,-42.80,-41.87,269.48" />
      </svg> */}
    </ShapeZoomContainer>
  );
};

export default ShapeZoom;
