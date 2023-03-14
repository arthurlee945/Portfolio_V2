import { colors, medias } from "@/styles/style-variables";
import HighlightText from "components/reusable/HighlightText";
import { m } from "framer-motion";
import { FC } from "react";
import { useViewPortTracker } from "../../../utils/custom-hooks";
import styled from "styled-components";
import ProjectsSections from "./parts/ProjectsSections";
import projects from "../../../data/Projects.json";
const ProjectDisplayContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
  border-bottom: 1px solid ${colors.white};
  overflow: hidden;
  row-gap: 75px;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 35px 0px;
    row-gap: 55px;
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 25px 0px;
    row-gap: 40px;
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
  const vpTracker = useViewPortTracker();
  return (
    <ProjectDisplayContainer>
      <m.h1 style={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="pi-header">
        <HighlightText>_PROJECTS</HighlightText>
      </m.h1>
      <ProjectsSections sectionTitle="Recent Works" data={projects.data.work} viewport={vpTracker} />
      <ProjectsSections sectionTitle="Other Works" data={projects.data.personal} viewport={vpTracker} />
    </ProjectDisplayContainer>
  );
};

export default ProjectDisplay;
