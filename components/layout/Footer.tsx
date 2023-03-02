import { FC } from "react";
import styled from "styled-components";
import { colors, medias } from "@/styles/style-variables";
interface FooterProps {}
const FooterContainer = styled.footer`
  border-top: 1px solid ${colors.white};
  padding: 200px min(5%, 75px);
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 35px min(9%, 95px);
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 25px min(6%, 60px);
  }
`;
const Footer: React.FC<FooterProps> = ({}) => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;
