import { FC } from "react";
import styled from "styled-components";
import HighlightText from "../../reusable/HighlightText";
import { colors, medias, highlightEffect } from "../../../styles/style-variables";
import AosElement from "../../reusable/AosElement";
import Languages from "./parts/Languages";
import ShapeZoom from "./parts/ShapeZoom";
import ScrollBoard from "../../reusable/ScrollBoard";
import ArrowLink from "components/reusable/ArrowLink";
interface IntroductionProps {}

const IntroductionContainer = styled.section`
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
  }
  .introduction-infos {
    border-top: 1px solid ${colors.white};
    padding: 200px min(5%, 75px);
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: ${medias.tablet + "px"}) {
      flex-direction: column;
      row-gap: 75px;
    }
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      padding: 65px min(9%, 95px);
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      padding: 50px min(6%, 60px);
    }
    .info-box {
      width: 40%;
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      @media only screen and (max-width: ${medias.tablet + "px"}) {
        width: 100%;
        row-gap: 20px;
      }
    }
    .info-header {
      display: flex;
      ${highlightEffect}
      cursor:default;
      font-weight: 500;
      font-size: 2.75rem;
      column-gap: 0.7rem;
      @media only screen and (max-width: ${medias.phone + "px"}) {
        font-size: 2rem;
        column-gap: 0.5rem;
      }
    }
    .info-description {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    .info-language {
      font-weight: 700;
      margin: 10px 0px;
    }
    .info-link {
      text-transform: uppercase;
      margin-top: 10px;
    }
  }
`;
const Introduction: FC<IntroductionProps> = ({}) => {
  return (
    <IntroductionContainer>
      <ScrollBoard>Let's Create Something Extraordinary! Contact Me Today and Let's Get Started.</ScrollBoard>
      <div className="introduction-infos">
        <AosElement direction="right" className="info-box">
          <h2 className="info-header" aria-label="Let's Do This!">
            <HighlightText fragment={true}>Let's Do This! </HighlightText>
          </h2>
          <p className="info-description">
            Ready to see what I can do? Check out my portfolio now to explore my skills and experience. From web development to mobile apps,
            I've got you covered. Let's work together to bring your ideas to life. Visit my portfolio page and let's get started!
          </p>
          <ShapeZoom />
          <ArrowLink className="info-link" href="/contact">
            Contact Me!
          </ArrowLink>
        </AosElement>
        <AosElement direction="left" transition={{ delay: 0.25 }} className="info-box">
          <h2 className="info-header" aria-label="About Me!">
            <HighlightText fragment={true}>About Me!</HighlightText>
          </h2>
          <p className="info-description">
            I'm a skilled developer with experience in developing and delivering high-quality, scalable, and user-friendly web applications.
            I'm passionate about building innovative solutions that make a difference. Browse my portfolio to see examples of my work, and
            let's discuss how I can help you achieve your goals. Contact me today to get started!
          </p>
          <p className="info-language">Here are some languages I use:</p>
          <Languages />
          <ArrowLink className="info-link" href="/about">
            Learn About Me!
          </ArrowLink>
        </AosElement>
      </div>
    </IntroductionContainer>
  );
};

export default Introduction;
