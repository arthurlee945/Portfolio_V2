import { MouseEvent } from "react";
import styled from "styled-components";
import { medias, colors } from "../../styles/style-variables";
import StyledLink from "../buttons/StyledLink";
import SocialLinks from "../buttons/SocialLinks";
import LightbulbBtn from "../buttons/LightbulbBtn";
import { useRouter } from "next/router";
const HeaderComponent = styled.header`
  z-index: 1;
  .navigation {
    position: absolute;
    top: 15px;
    right: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media only screen and (max-width: ${medias.phone + "px"}) {
      width: 100%;
      top: 10px;
      right: 10px;
    }
  }
`;
const DropdownContainer = styled.div`
  position: relative;
  @media only screen and (max-width: ${medias.phone + "px"}) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .route_container {
    z-index: 1;
    position: absolute;
    right: -5px;
    top: -5px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 40px;
    padding: 85px 50px 40px;
    background-color: ${colors.darkGray};
    overflow: hidden;
    transition: transform 300ms;
    transform-origin: top right;
    border-radius: 8px;
    box-shadow: -6px 8px 12px #0a090536;
    &[aria-hidden="true"] {
      user-select: none;
      pointer-events: none;
      transform: scale(0);
      .link-container,
      .social-container {
        opacity: 0;
        transition-delay: 0ms;
      }
    }
    &[aria-hidden="false"] {
      transform: scale(1);
      overflow: hidden;
      &:before {
        position: absolute;
        content: "";
        width: 200%;
        height: 200%;
        top: 0;
        right: 0;
        pointer-events: none;
        background-image: radial-gradient(#66604d, transparent 70%);
        transform: translate(calc(50% - 20px), calc(-50% + 20px));
        opacity: 0;
        animation: light-flicker 150ms forwards;
        animation-delay: 300ms;
        @keyframes light-flicker {
          from {
            opacity: 0.1;
          }
          20% {
            opacity: 0;
          }
          45% {
            opacity: 0.15;
          }
          65% {
            opacity: 0;
          }
          100% {
            opacity: 0.2;
          }
        }
      }
      .link-container,
      .social-container {
        --default-op: 0.05;
        opacity: var(--default-op);
        animation: light-reflect 150ms forwards;
        animation-delay: 300ms;
        @keyframes light-reflect {
          from {
            opacity: 0.7;
          }
          20% {
            opacity: var(--default-op);
          }
          45% {
            opacity: 0.8;
          }
          65% {
            opacity: var(--default-op);
          }
          100% {
            opacity: 1;
          }
        }
      }
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      top: -10px;
      right: -10px;
      width: 100%;
      height: 100vh;
      border-radius: 0px;
      justify-content: space-between;
      padding: max(15vh, 100px) 50px;
      min-height: 400px;
      box-shadow: none;
    }
    .link-container {
      transition: opacity 200ms;
      svg {
        fill: white;
        width: 30px;
        height: 30px;
        &:hover {
          animation: gh-jiggle 300ms;
          animation-iteration-count: 2;
          @keyframes gh-jiggle {
            25% {
              transform: rotate(35deg);
            }
            50% {
              transform: rotate(-35deg);
            }
            75% {
              transform: rotate(35deg);
            }
          }
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  const router = useRouter();
  const handleDropdownBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const innerContainer = document.getElementById("__next");
    innerContainer?.classList.toggle("nav-open");
    const button = e.target as HTMLButtonElement;
    const routeContainer = document.getElementById("route_container");
    button.setAttribute("aria-pressed", button.getAttribute("aria-pressed") === "true" ? "false" : "true");
    routeContainer?.setAttribute("aria-hidden", routeContainer?.getAttribute("aria-hidden") === "true" ? "false" : "true");
  };
  return (
    <HeaderComponent>
      <div className="navigation">
        <DropdownContainer>
          <LightbulbBtn id="dropdown-btn" className="dropdownButton" onClick={handleDropdownBtn} ariaPressed={false} />
          <ul id="route_container" className="route_container" role="presentation" aria-hidden="true">
            {router.asPath !== "/" && (
              <li className="link-container">
                <StyledLink href="/">Home</StyledLink>
              </li>
            )}
            {router.asPath !== "/projects" && (
              <li className="link-container">
                <StyledLink href="/projects">Projects</StyledLink>
              </li>
            )}
            {router.asPath !== "/about" && (
              <li className="link-container">
                <StyledLink href="/about">About</StyledLink>
              </li>
            )}
            {router.asPath !== "/contact" && (
              <li className="link-container">
                <StyledLink href="/contact">Contact</StyledLink>
              </li>
            )}
            <SocialLinks />
          </ul>
        </DropdownContainer>
      </div>
    </HeaderComponent>
  );
};

export default Header;
