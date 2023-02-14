import { MouseEvent } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { medias, colors } from "../../styles/style-variables";
import StyledLink from "../buttons/StyledLink";
import SocialLinks from "../buttons/SocialLinks";
import LightbulbBtn from "../buttons/LightbulbBtn";
const HeaderComponent = styled.header`
  .navigation {
    padding: 25px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  .route_container {
    z-index: 1;
    position: absolute;
    right: 0;
    top: 110%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 35px;
    padding: 75px 35px 35px;
    background-color: ${colors.darkGray};
    overflow: hidden;
    transition: transform 300ms;
    transform-origin: top right;
    border-radius: 15px;
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
      .link-container,
      .social-container {
        opacity: 1;
        transition-delay: 100ms;
      }
    }
    @media (max-width: ${medias.tablet + "px"}) {
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
  const handleDropdownBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const routeContainer = document.getElementById("route_container");
    button.setAttribute("aria-pressed", button.getAttribute("aria-pressed") === "true" ? "false" : "true");
    routeContainer?.setAttribute("aria-hidden", routeContainer?.getAttribute("aria-hidden") === "true" ? "false" : "true");
  };
  return (
    <HeaderComponent>
      <div className="navigation">
        <Link href="/">Arthur Lee</Link>
        <DropdownContainer>
          <LightbulbBtn className="dropdownButton" onClick={handleDropdownBtn} ariaPressed={false} />
          <ul id="route_container" className="route_container" role="presentation" aria-hidden="true">
            <li className="link-container">
              <StyledLink href="/projects">Projects</StyledLink>
            </li>
            <li className="link-container">
              <StyledLink href="/about">About</StyledLink>
            </li>
            <li className="link-container">
              <StyledLink href="/contact">Contact</StyledLink>
            </li>
            <SocialLinks />
          </ul>
        </DropdownContainer>
      </div>
    </HeaderComponent>
  );
};

export default Header;
