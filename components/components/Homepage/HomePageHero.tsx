import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { colors, medias } from "../../../styles/style-variables";
import HighlightText from "../../reusable/HighlightText";
import HighlightLink from "../../reusable/HighlightLink";

interface HeroProps {}

const HeroContainer = styled.div`
  padding: 25px 50px;
  border-bottom: 1px solid ${colors.white};
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 35px min(9%, 95px);
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 25px min(6%, 60px);
  }
  .hero-container {
    color: ${colors.richBlack};
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4%;
    @media only screen and (max-width: ${medias.tablet + "px"}) {
      flex-direction: column;
    }
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      row-gap: 50px;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      row-gap: 25px;
    }
    .hero-content {
      background-color: ${colors.white};
      width: max(40%, 540px);
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 25px;
      @media only screen and (max-width: ${medias.tablet + "px"}) {
        width: 100%;
      }
      @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
      }
    }
    .hero-image-container {
      width: max(40%, 540px);
      border: 1px solid ${colors.white};
      aspect-ratio: 1/1;
      padding: 25px;
      @media only screen and (max-width: ${medias.tablet + "px"}) {
        width: 100%;
      }
      @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
      }
    }
    .hero-image {
      position: relative;
      width: 100%;
      height: 100%;
      > img {
        width: 100%;
        object-fit: contain;
      }
    }
    .hero-header {
      font-size: 3.35rem;
      @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
        font-size: 2.15rem;
      }
    }
    .hero-subHeader {
      justify-content: space-between;
      font-size: 1.1rem;
      cursor: pointer;
      transition: width 300ms;
      color: ${colors.richBlack};
      flex-wrap: wrap;
      justify-content: flex-start;
      letter-spacing: 0.1rem;
      transition: letter-spacing 250ms;
      &:hover {
        letter-spacing: 0.15rem;
      }
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
          <HighlightLink href="/about" underline={false} className="hero-subHeader">
            I am a Developer based in Chicago
          </HighlightLink>
        </div>
        <div className="hero-image-container">
          <div className="hero-image">
            <Image src="/assets/profile-image.png" alt="profile picture" fill sizes="100%" priority={true} quality={88} />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default HomePageHero;
