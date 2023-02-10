import Link from "next/link";
import styled from "@emotion/styled";
import { medias, colors } from "../../styles/style-variables";
import StyledLink from "../linkbuttons/StyledLink";

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
    top: 125%;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 25px;
    padding: 50px 25px 25px;
    background-color: ${colors.darkGray};
    min-width: 250px;
    overflow: hidden;
    transition: transform 300ms;
    transform-origin: top center;
    border-radius: 25px;
    &[aria-hidden="true"] {
      user-select: none;
      pointer-events: none;
      transform: scaleY(0);
      .link-container {
        opacity: 0;
        transition-delay: 0ms;
      }
    }
    &[aria-hidden="false"] {
      transform: scaleY(1);
      .link-container {
        opacity: 1;
        transition-delay: 100ms;
      }
    }
    @media (max-width: ${medias.tablet + "px"}) {
      .link-svg {
        display: none;
      }
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
  return (
    <HeaderComponent>
      <div className="navigation">
        <Link href="/">Arthur Lee</Link>
        <DropdownContainer>
          <button
            className="dropdownButton"
            onClick={() => {
              document
                .getElementById("route_container")
                ?.setAttribute(
                  "aria-hidden",
                  `${document.getElementById("route_container")?.getAttribute("aria-hidden") === "true" ? "false" : "true"}`
                );
            }}
          >
            Placeholder
          </button>
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
            <li className="link-container">
              <Link className="link-svg" href="https://github.com/arthurlee945" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </li>
          </ul>
        </DropdownContainer>
      </div>
    </HeaderComponent>
  );
};

export default Header;
