import { FC } from "react";
import styled from "styled-components";
import { colors, medias } from "../../../styles/style-variables";
import HighlightText from "../../reusable/HighlightText";
import HighlightLink from "../../reusable/HighlightLink";

interface HeroProps {}

const HeroContainer = styled.div`
  padding: 0px 20px;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 0px 10px;
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 0px 10px;
  }
  .hero-container {
    height: calc(100vh - 50px);
    color: ${colors.white};
    border-bottom: 1px solid ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    .hero-header {
      font-size: 5rem;
    }
    .hero-subHeader {
      width: 75%;
      justify-content: space-between;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;

const HomePageHero: FC<HeroProps> = ({}) => {
  return (
    <HeroContainer>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-header">
            Hi, My
            <br />
            Name is <b>Arthur</b>.
          </h1>
          <HighlightLink href="/" underline={false} className="hero-subHeader">
            I am a Developer based in Chicago
          </HighlightLink>
        </div>
        <div className="hero-image"></div>
      </div>
    </HeroContainer>
  );
};

export default HomePageHero;
