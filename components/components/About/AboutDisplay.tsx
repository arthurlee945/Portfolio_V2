import { FC, SyntheticEvent, useState } from "react";
import styled, { css } from "styled-components";
import { m } from "framer-motion";
import HighlightText from "components/reusable/HighlightText";
import { colors, highlightEffect, medias } from "@/styles/style-variables";
import ArrowLink from "components/reusable/ArrowLink";
import Image from "next/image";
import SpoonZoom from "./parts/SpoonZoom";
const AboutDisplayContainer = styled.section<{ $profileClicked: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 150px min(5%, 75px);
  border-bottom: 1px solid ${colors.white};
  @media only screen and (max-width: ${medias.tablet + "px"}) {
    flex-direction: column;
  }
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 75px min(9%, 95px);
    row-gap: 50px;
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 50px min(6%, 60px);
    row-gap: 40px;
  }
  .about-infos {
    display: flex;
    width: 48%;
    flex-direction: column;
    row-gap: 40px;
    @media only screen and (max-width: ${medias.tablet + "px"}) {
      width: 100%;
      flex-direction: column;
      row-gap: 30px;
    }
  }
  .about-img-cont {
    position: relative;
    width: 45%;
    aspect-ratio: 1000/650;
    border: 1px solid ${colors.white};
    overflow: hidden;
    cursor: pointer;
    ${({ $profileClicked }) => {
      if ($profileClicked) {
        return css`
          pointer-events: none;
        `;
      } else {
        return css`
          &:hover {
            &:after {
              position: absolute;
              content: "<--- My Spoon";
              top: 38%;
              left: 20%;
              font-size: 1.1rem;
              @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
                font-size: 1rem;
              }
              @media only screen and (max-width: ${medias.phone + "px"}) {
                font-size: 0.9rem;
              }
              animation: spoon-ani 650ms infinite;
              @keyframes spoon-ani {
                50% {
                  transform: translateX(10px);
                }
              }
            }
          }
        `;
      }
    }}
    &:focus {
      outline: 2px solid ${colors.white};
    }

    @media only screen and (min-width: ${medias.tablet + 1 + "px"}) {
      position: sticky;
      top: 110px;
    }
    @media only screen and (max-width: ${medias.tablet + "px"}) {
      width: 100%;
      flex-direction: column;
    }
    > img {
      object-fit: contain;
      object-position: bottom;
      user-select: none;
    }
  }
  .about-header {
    display: flex;
    ${highlightEffect}
    cursor:default;
    font-weight: 500;
    font-size: 2.75rem;
    column-gap: 0.7rem;
    @media only screen and (max-width: ${medias.phone + "px"}) {
      font-size: 2.25rem;
      column-gap: 0.5rem;
    }
  }
  .about-description {
    font-size: 1.2rem;
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      line-height: 1.85rem;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      line-height: 1.75rem;
    }
  }
  .about-link {
    font-size: 1.1rem;
  }
`;
interface ADProps {}

const AboutDisplay: FC<ADProps> = ({}) => {
  const [profile, setProfile] = useState({ image: "/assets/AboutFirst.png", clicked: false });

  const handleHoverStart = (e: MouseEvent) => {
    if (profile.clicked) return;
    setProfile((curr) => ({
      ...curr,
      image: "/assets/AboutSecond.png",
    }));
  };
  const handleHoverEnd = (e: MouseEvent) => {
    if (profile.clicked) return;
    setProfile((curr) => ({
      ...curr,
      image: "/assets/AboutFirst.png",
    }));
  };
  const handleImageClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    setProfile((curr) => ({
      ...curr,
      clicked: !curr.clicked,
    }));
  };
  return (
    <AboutDisplayContainer $profileClicked={profile.clicked}>
      <div className="about-infos">
        <h1 className="about-header">
          <HighlightText fragment={true}>About Me</HighlightText>
        </h1>
        <p className="about-description">
          <span>
            Hey there! My name is Arthur Lee and I'm a skilled developer with a passion for creating amazing web applications. Over the
            years, I've honed my skills in developing high-quality, scalable, and user-friendly websites that meet the specific needs of my
            clients.
          </span>
          <span>
            One of the things that sparked my interest in web development was my background in photography and editing. When I started
            creating websites using WordPress, I quickly discovered that I loved the creative process involved in building websites even
            more than I enjoyed taking photos! This led me to pursue a career in web development and gain valuable experience as an intern
            for a production company, where I produced websites for multiple projects used for promotional purposes.
          </span>
          <span>
            Since then, I've continued to grow and develop my skills by participating in and building projects with a variety of
            cutting-edge frameworks such as Next.js and headless CMS. My goal is always to create web applications that are not only
            functional and effective, but also aesthetically pleasing and easy to use.
          </span>
          <span>
            If you'd like to learn more about my experience and skills, be sure to check out my resume below. Thanks for stopping by!
          </span>
        </p>
        <ArrowLink className="about-link" href="./assets/arthur_lee-resume.pdf" target="_blank">
          Resume
        </ArrowLink>
      </div>
      <m.div
        className="about-img-cont"
        style={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        viewport={{ once: true }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onClick={handleImageClick}
        role="button"
        tabIndex={profile.clicked ? -1 : 0}
      >
        <Image src={profile.image} alt="Arthur Lee Profile Image" fill sizes={"100%"} priority quality={100} />
        {profile.clicked && <SpoonZoom onClick={handleImageClick} />}
      </m.div>
    </AboutDisplayContainer>
  );
};

export default AboutDisplay;
