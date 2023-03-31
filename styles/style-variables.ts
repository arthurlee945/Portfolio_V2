import { css } from "styled-components";

export const medias = {
  maxDesktop: 1920,
  tablet: 1100,
  phone: 600,
};

export const colors = {
  lightPurple: "#AFB3F7",
  yellow: "#ffce00",
  midBlue: "#92BCEA",
  darkBlue: "#7A93AC",
  gray: "#617073",
  darkGray: "#262c2e",
  richBlack: "#080a0c",
  amber: "#d30910",
  white: "#FAF9F6",
};

export const underline = css`
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0px;
    transform: translateY(100%);
    background-color: ${colors.amber};
    transition: width 250ms;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
`;
export const highlightEffect = css`
  position: relative;
  display: flex;
  column-gap: 0.3rem;
  span {
    display: flex;
    flex-direction: row;
    p {
      transition: font-weight 150ms;
      color: ${colors.white};
      &:has(+ p + ${"p:hover"}) {
        font-weight: 600;
      }
      &:has(+ ${"p:hover"}) {
        font-weight: 700;
      }
      &:hover {
        font-weight: 800;
        & + p {
          font-weight: 700;
          & + p {
            font-weight: 600;
          }
        }
      }
    }
  }
`;
export const boxShadow = css`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.85);
`;
