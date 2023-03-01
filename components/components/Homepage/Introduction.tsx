import { FC, useRef } from "react";
import styled from "styled-components";
import HighlightText from "../../reusable/HighlightText";
import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { colors, medias, highlightEffect } from "../../../styles/style-variables";
import AosElement from "../../reusable/AosElement";
import Languages from "./parts/Languages";
import HighlightLink from "components/reusable/HighlightLink";
import ImageZoom from "./parts/ImageZoom";
interface IntroductionProps {}

const IntroductionContainer = styled.div`
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
  }
  .repeating-cta {
    padding: 20px 15px;
    width: fit-content;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      padding: 15px 10px;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      padding: 10px;
    }
    .repeating-text {
      position: relative;
      font-size: 4.5rem;
      cursor: default;
      column-gap: 2rem;
      text-transform: uppercase;
      @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
        font-size: 3.5rem;
        column-gap: 1.5rem;
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
        font-size: 2.5rem;
        column-gap: 1rem;
      }
    }
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
      padding: 35px min(9%, 95px);
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      padding: 25px min(6%, 60px);
    }
    .info-box {
      width: 40%;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      @media only screen and (max-width: ${medias.tablet + "px"}) {
        width: 100%;
        row-gap: 20px;
      }
    }
    .info-header {
      display: flex;
      ${highlightEffect}
      cursor:default;
      font-weight: 600;
      font-size: 2.5rem;
      column-gap: 0.7rem;
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
      width: fit-content;
      text-transform: uppercase;
    }
  }
`;
const Introduction: FC<IntroductionProps> = ({}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.5", "0 0"],
  });
  const springScroll = useSpring(scrollYProgress, { stiffness: 8, damping: 4 });
  const scrollProgress = useTransform(springScroll, [0, 1], ["0%", "-50%"]);

  const ctaText = "Let's create something amazing together. Get in touch with me today to discuss your project.";
  return (
    <IntroductionContainer>
      <m.div ref={ref} className="repeating-cta" style={{ x: scrollProgress, y: 0 }}>
        <HighlightText className="repeating-text" data-text={ctaText}>
          {ctaText + " " + ctaText}
        </HighlightText>
      </m.div>
      <div className="introduction-infos">
        <AosElement direction="right" className="info-box">
          <h2 className="info-header" aria-label="Let's Do This!">
            <HighlightText fragment={true}>Let's Do This! </HighlightText>
          </h2>
          <p className="info-description">
            Ready to see what I can do? Check out my portfolio now to explore my skills and experience. From web development to mobile apps,
            I've got you covered. Let's work together to bring your ideas to life. Visit my portfolio page and let's get started!
          </p>
          <ImageZoom />
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
        </AosElement>
      </div>
    </IntroductionContainer>
  );
};

export default Introduction;
