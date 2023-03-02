import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { colors, medias } from "../../../styles/style-variables";
import HighlightLink from "../../reusable/HighlightLink";
import MotionScrollDiv from "../../reusable/MotionScrollDiv";

interface HeroProps {}

const HeroContainer = styled.div`
  padding: 125px min(5%, 75px);
  border-bottom: 1px solid ${colors.white};
  overflow: hidden;
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
    justify-content: space-between;
    column-gap: min(2%, 25px);

    @media only screen and (max-width: ${medias.tablet + "px"}) {
      flex-direction: column;
    }
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      row-gap: 50px;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      row-gap: 25px;
    }
    .hero-content--center,
    .hero-content--left,
    .hero-content--right {
      width: max(30%, 415px);
      aspect-ratio: 1/1;
      border-radius: 10px;
      overflow: hidden;
      @media only screen and (max-width: ${medias.tablet + "px"}) {
        width: 100%;
      }
    }
    .hero-content--left,
    .hero-content--right {
      background-color: ${colors.white};

      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 25px;
      animation: content-intro 500ms;
      @media only screen and (max-width: ${medias.tablet + "px"}) {
        width: 100%;
      }
      @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
      }
    }
    .hero-content--center {
      --init-pos: translateY(-100%);
      border: 1px solid ${colors.white};
      padding: 25px;
      animation: content-intro 500ms;
      @media only screen and (max-width: ${medias.tablet + "px"}) {
        --init-pos: translateX(100%);
      }
      @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
      }
    }
    .hero-content--left {
      --init-pos: translateX(-100%);
    }
    .hero-content--right {
      --init-pos: translateX(100%);
      @media only screen and (max-width: ${medias.tablet + "px"}) {
        --init-pos: translateX(-100%);
      }
    }
    @keyframes content-intro {
      from {
        transform: var(--init-pos);
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
      font-size: 1.2rem;
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
type DirType = { dir: "up" | "down" | "left" | "right" };
const HomePageHero: FC<HeroProps> = ({}) => {
  const heroRef = useRef(null);
  const [scrollDir, setScrollDir] = useState<{
    left: DirType;
    center: DirType;
    right: DirType;
  }>({
    left: { dir: "down" },
    center: { dir: "up" },
    right: { dir: "down" },
  });

  useEffect(() => {
    let prevWidth: number | undefined = undefined;
    const handleScrollDir = () => {
      let currentWidth = window.innerWidth;
      if (prevWidth && ((currentWidth > 1100 && prevWidth > 1100) || (currentWidth <= 1100 && prevWidth <= 1100))) return;
      if (currentWidth <= 1100) {
        setScrollDir((currDir) => ({
          ...currDir,
          left: { dir: "left" },
          center: { dir: "right" },
          right: { dir: "left" },
        }));
      } else {
        setScrollDir((currDir) => ({
          ...currDir,
          left: { dir: "down" },
          center: { dir: "up" },
          right: { dir: "down" },
        }));
      }
      prevWidth = currentWidth;
    };
    window.addEventListener("resize", handleScrollDir);
    window.dispatchEvent(new Event("resize"));
    return () => {
      window.removeEventListener("resize", handleScrollDir);
    };
  }, []);
  return (
    <HeroContainer ref={heroRef}>
      <div className="hero-container">
        <MotionScrollDiv className="hero-content--left" scrollDir={scrollDir.left.dir}>
          <h1 className="hero-header">
            Hi, My
            <br />
            Name is <b>Arthur</b>.
          </h1>
          <HighlightLink href="/about" underline={false} className="hero-subHeader">
            I am a Developer based in Chicago
          </HighlightLink>
        </MotionScrollDiv>
        <MotionScrollDiv className="hero-content--center" scrollDir={scrollDir.center.dir}>
          <div className="hero-image">
            <Image src="/assets/profile-image.png" alt="profile picture" fill sizes="100%" priority={true} quality={88} />
          </div>
        </MotionScrollDiv>
        <MotionScrollDiv className="hero-content--right" scrollDir={scrollDir.right.dir}>
          <h2 className="hero-header">Let's work together.</h2>
          <HighlightLink href="/contact" underline={false} className="hero-subHeader">
            You can talk to me by clicking here!
          </HighlightLink>
        </MotionScrollDiv>
      </div>
    </HeroContainer>
  );
};

export default HomePageHero;
