import { css } from "styled-components";

export const medias = {
  maxDesktop: 1920,
  tablet: 1100,
  phone: 500,
};

export const colors = {
  lightPurple: "#AFB3F7",
  yellow: "#ffce00",
  midBlue: "#92BCEA",
  darkBlue: "#7A93AC",
  gray: "#617073",
  darkGray: "#262c2e",
  richBlack: "#171A21",
  amber: "#d30910",
  white: "#FAF9F6;",
};

export const underline = css`
  &:after {
    content: "";
    position: absolute;
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
