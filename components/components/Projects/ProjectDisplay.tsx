import { colors, medias } from "@/styles/style-variables";
import HighlightText from "components/reusable/HighlightText";
import { m } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import ProjectsSections from "./parts/ProjectsSections";
const ProjectDisplayContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 125px min(5%, 75px);
  border-bottom: 1px solid ${colors.white};
  overflow: hidden;
  row-gap: 75px;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 35px min(9%, 95px);
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 25px min(6%, 60px);
  }
  .pi-header {
    font-size: 3.5rem;
    font-weight: 500;
    column-gap: 1rem;
    cursor: default;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      font-size: 2.15rem;
    }
    > span {
      display: flex;
    }
  }
`;
interface ProjectDisplayProps {}

const ProjectDisplay: FC<ProjectDisplayProps> = ({}) => {
  return (
    <ProjectDisplayContainer>
      <m.h1 style={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="pi-header">
        <HighlightText>_PROJECTS</HighlightText>
      </m.h1>
      <ProjectsSections />
    </ProjectDisplayContainer>
  );
};

export default ProjectDisplay;
