import { FC } from "react";
import styled from "styled-components";
import { colors, defaultContainerStyle } from "../../../styles/style-variables";
interface HeroProps {}

const HeroContainer = styled.div`
  ${defaultContainerStyle}
  .hero-container {
    background-color: ${colors.white};
    color: ${colors.richBlack};
    height: 100vh;
  }
`;

const HomePageHero: FC<HeroProps> = (props) => {
  return (
    <HeroContainer>
      <div className="hero-container">HomePageHero</div>
    </HeroContainer>
  );
};

export default HomePageHero;
