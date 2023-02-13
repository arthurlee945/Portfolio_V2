import { FC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { colors } from "../../styles/style-variables";
interface Social {
  github?: boolean;
  linkedin?: boolean;
  email?: boolean;
}
const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 40px;
  transition: opacity 200ms;
  padding-top: 30px;
  border-top: 1px solid ${colors.white};
  svg {
    fill: ${colors.white};
    width: 35px;
    height: 35px;
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
`;
const SocialLinks: FC<Social> = ({ github = true, linkedin = true, email = true }) => {
  return (
    <SocialLinksContainer className="social-container">
      {github && (
        <Link className="link-svg" href="https://github.com/arthurlee945" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
      )}
      {linkedin && (
        <Link className="link-svg" href="https://www.linkedin.com/in/arthurjlee/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64">
            <path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" />
            <path
              d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z"
              fill="#000"
            />
          </svg>
        </Link>
      )}
      {email && (
        <Link className="link-svg" href="mailto:arthur.lee945@gmail.com" target="_blank">
          <svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.294 75.294">
            <g>
              <path
                d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
              />
            </g>
          </svg>
        </Link>
      )}
    </SocialLinksContainer>
  );
};

export default SocialLinks;
