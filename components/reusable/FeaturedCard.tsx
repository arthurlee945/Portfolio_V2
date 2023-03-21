import { colors, medias, underline } from "@/styles/style-variables";
import AosElement from "components/reusable/AosElement";
import HighlightLink from "components/reusable/HighlightLink";
import { FC, useContext, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { HTMLMotionProps } from "framer-motion";
import { useViewPortTracker } from "utils/custom-hooks";
import { throttle } from "utils/throttle-functions";
import Link from "next/link";
import HighlightText from "./HighlightText";
import { GlobalContext } from "utils/GlobalContext";

type SCProps = { $cardImage: string; $bgPos: { x: string; y: string }; $viewStarted: boolean; $viewport: string };
const FeaturedCardContainer = styled(AosElement)<SCProps>`
  width: 22.5%;
  min-width: 335px;
  aspect-ratio: 1/1.25;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    width: 75%;
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    width: 100%;
    min-width: auto;
  }
  .featured-card {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      transition: filter 250ms;
      overflow: hidden;
      background-image: url(${({ $cardImage }) => $cardImage});
      background-size: cover;
      background-position: inherit;
    }

    .card-controls > button,
    .card-description,
    .card-tags {
      transition: opacity 250ms;
    }
    .card-info {
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      row-gap: 20px;
      padding: 20px 30px;
      text-align: center;
      width: 100%;
      flex: 1;
      transition: opacity 250ms;
    }
    .card-controls {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 50px;
      width: 100%;
      @media only screen and (max-width: ${medias.phone + "px"}) {
        row-gap: 25px;
      }
    }
    .card-header {
      font-size: 1.8rem;
      flex-wrap: wrap;
      column-gap: 0.5rem;
      justify-content: center;
      &:after {
        left: unset;
      }
    }
    .card-description {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
      @media only screen and (max-width: ${medias.phone + "px"}) {
        row-gap: 15px;
      }
      .card-repo {
        position: relative;
        width: fit-content;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 600;
        display: flex;
        letter-spacing: 0.2rem;
        justify-content: center;
        ${underline};
        &:after {
          left: unset;
        }
      }
    }
    .card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 10px;
    }

    ${({ $viewStarted, $viewport }) => {
      if ($viewStarted) {
        return css`
          .card-info {
            opacity: 0;
            pointer-events: none;
          }
          &:hover {
            &:before {
              filter: unset;
            }
          }
        `;
      } else {
        if ($viewport === "desktop") {
          return css`
            &:before {
              filter: blur(10px) brightness(0.4) grayscale(1);
            }
            .card-controls > button,
            .card-description,
            .card-tags {
              opacity: 0;
              pointer-events: none;
            }
            &:hover {
              &:before {
                filter: blur(8px) brightness(0.5) grayscale(1);
              }
              .card-controls > button,
              .card-description,
              .card-tags {
                opacity: 1;
                pointer-events: all;
              }
            }
          `;
        } else {
          return css`
            &:before {
              filter: blur(8px) brightness(0.5) grayscale(1);
            }
          `;
        }
      }
    }}
  }
`;

const TagCont = styled.p`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid ${colors.white};
  font-size: 0.9rem;
  cursor: default;
  transition: background-color 250ms, border-color 250ms;
  &:hover {
    background-color: ${colors.richBlack};
    border-color: ${colors.richBlack};
  }
`;

const ControlButtonCont = styled.button`
  width: 50px;
  > svg {
    fill: ${colors.white};
    pointer-events: none;
  }
`;

const ControlButton: FC<{ [fc: string]: () => void }> = ({ onPressStart }) => {
  return (
    <ControlButtonCont
      onMouseDown={onPressStart}
      onTouchStart={onPressStart}
      role="button"
      aria-label="project card sample image view button"
    >
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5.5A2.59 2.59 0 0 0 5.33 8 2.59 2.59 0 0 0 8 10.5 2.59 2.59 0 0 0 10.67 8 2.59 2.59 0 0 0 8 5.5zm0 3.75A1.35 1.35 0 0 1 6.58 8 1.35 1.35 0 0 1 8 6.75 1.35 1.35 0 0 1 9.42 8 1.35 1.35 0 0 1 8 9.25z" />
        <path d="M8 2.5A8.11 8.11 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5A8.11 8.11 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5.4 7.5A6.91 6.91 0 0 1 8 12.25 6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.91 6.91 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2z" />
      </svg>
    </ControlButtonCont>
  );
};
const Tag: FC<{ name: string }> = ({ name }) => {
  return <TagCont>{name}</TagCont>;
};
interface CardType extends HTMLMotionProps<"div"> {
  data: {
    id: string;
    name: string;
    img: string;
    url: string;
    tools: string[];
    desc: string;
    repo?: string;
  };
  delay?: number;
  className?: string;
}
type CardStateProps = {
  imgPos: { x: string; y: string };
  imgViewStarted: boolean;
};
const FeaturedCard: FC<CardType> = ({ data, delay = 0, className, ...rest }) => {
  const globalCtx = useContext(GlobalContext);
  const vpTracker = useViewPortTracker();
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardStatus, setCardStatus] = useState<CardStateProps>({ imgPos: { x: "50%", y: "50%" }, imgViewStarted: false });
  const removeListeners = () => {
    document.removeEventListener("mousemove", onMTEventMove);
    document.removeEventListener("touchmove", onMTEventMove);
    document.removeEventListener("mouseup", onMTEventEnd);
    document.removeEventListener("touchend", onMTEventEnd);
  };
  const onPressStart = () => {
    setCardStatus((currState) => ({
      ...currState,
      imgViewStarted: true,
    }));
    document.addEventListener("mouseup", onMTEventEnd);
    document.addEventListener("touchend", onMTEventEnd);
    document.addEventListener("mousemove", onMTEventMove);
    document.addEventListener("touchmove", onMTEventMove);
    globalCtx.setViewPortLock("opened");
  };
  const onMTEventMove = throttle<MouseEvent | TouchEvent>((eve: MouseEvent | TouchEvent) => {
    let { top, right, bottom, left } = (cardRef.current as HTMLDivElement).getBoundingClientRect();

    let relativeX = eve.type === "mousemove" ? (eve as MouseEvent).clientX : (eve as TouchEvent).touches[0].clientX;
    let relativeY = eve.type === "mousemove" ? (eve as MouseEvent).clientY : (eve as TouchEvent).touches[0].clientY;
    if (relativeY < top || relativeY > bottom || relativeX < left || relativeX > right) {
      onMTEventEnd();
      return;
    }
    let percentageX = ((relativeX - left) / (right - left)) * 100;
    let percentageY = ((relativeY - top) / (bottom - top)) * 100;
    setCardStatus((currState) => ({
      ...currState,
      imgPos: { x: `${percentageX}%`, y: `${percentageY}%` },
    }));
  }, 15);

  const onMTEventEnd = (event?: MouseEvent | TouchEvent) => {
    setCardStatus((currState) => ({
      ...currState,
      imgPos: { x: "50%", y: "50%" },
      imgViewStarted: false,
    }));
    removeListeners();
    globalCtx.setViewPortLock("closed");
  };

  return (
    <FeaturedCardContainer
      className={className}
      $cardImage={data.img}
      $viewStarted={cardStatus.imgViewStarted}
      $viewport={vpTracker}
      {...rest}
    >
      <div
        ref={cardRef}
        id="featured-card"
        className="featured-card"
        style={{ backgroundPosition: `${cardStatus.imgPos.x} ${cardStatus.imgPos.y}` }}
      >
        <div className="card-info">
          <div className="card-controls">
            <ControlButton onPressStart={onPressStart} />

            <h3>
              {data.url !== "NONE" ? (
                <HighlightLink href={data.url} target="_blank" className="card-header">
                  {data.name}
                </HighlightLink>
              ) : (
                <HighlightText className="card-header" style={{ cursor: "default" }}>
                  {data.name}
                </HighlightText>
              )}
            </h3>
          </div>
          <p className="card-description">
            {data.desc}
            {data.repo && (
              <Link className="card-repo" href={data.repo} target="_blank">
                Visit Repo
              </Link>
            )}
          </p>
          <div className="card-tags">
            {data.tools.map((tool) => (
              <Tag key={`${data.name}-${tool}`} name={tool} />
            ))}
          </div>
        </div>
      </div>
    </FeaturedCardContainer>
  );
};

export default FeaturedCard;
