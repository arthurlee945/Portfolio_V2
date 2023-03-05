import { FC } from "react";
import styled from "styled-components";
import { m } from "framer-motion";
import { colors, medias } from "@/styles/style-variables";
import HighlightText from "components/reusable/HighlightText";
import FooterSocialLink from "./footerParts/FooterSocialLink";
interface FooterProps {}
const FooterContainer = styled.footer`
  border-top: 1px solid ${colors.white};
  .footer-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 200px min(5%, 75px);
    row-gap: 50px;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      padding: 125px min(9%, 95px);
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      padding: 125px min(6%, 60px);
    }
  }
  .footer-header {
    font-size: 3.75rem;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 1rem;
    cursor: default;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      font-size: 3rem;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      font-size: 2rem;
    }
  }
  .horizontal-line {
    width: 75%;
    border: 0px;
    background-color: ${colors.white};
    height: 1px;
    @media only screen and (max-width: ${medias.tablet + "px"}) {
      width: 100%;
    }
  }
  .footer-social {
    padding-top: 0px;
    margin-top: 30px;
    border: 0px;
    column-gap: 100px;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      margin-top: 10px;
      column-gap: 75px;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      column-gap: 0px;
    }
    svg {
      width: 50px;
      height: 50px;
      aspect-ratio: 1/1;

      @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
        width: 45px;
        height: 45px;
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
        width: 40px;
        height: 40px;
      }
    }
  }
  .footer-note {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid ${colors.white};
    padding: 15px 20px;
    > p {
    }
  }
`;
const Footer: FC<FooterProps> = ({}) => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <div className="footer-main">
        <HighlightText className="footer-header">Let's Get Started!</HighlightText>
        <m.hr
          className="horizontal-line"
          style={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        />
        <FooterSocialLink className="footer-social" />
      </div>
      <div className="footer-note">
        <p>&copy; Arthur Lee {year}</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
