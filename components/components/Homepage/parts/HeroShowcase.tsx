import { colors } from "@/styles/style-variables";
import { FC } from "react";
import styled from "styled-components";
const HeroShowcaseContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface HSTypes {
  className?: string;
}

const HeroShowcase: FC<HSTypes> = ({}) => {
  return <HeroShowcaseContainer>HeroShowcase</HeroShowcaseContainer>;
};

export default HeroShowcase;
