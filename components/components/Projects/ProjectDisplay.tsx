import { colors, medias } from "@/styles/style-variables";
import HighlightText from "components/reusable/HighlightText";
import { FC } from "react";
import styled from "styled-components";
const ProjectDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 125px min(5%, 75px);
  border-bottom: 1px solid ${colors.white};
  overflow: hidden;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 35px min(9%, 95px);
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 25px min(6%, 60px);
  }
  .pi-header {
    font-size: 3.35rem;
    font-weight: 500;
    column-gap: 1rem;
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
      <h1 className="pi-header">
        <HighlightText>_PROJECTS</HighlightText>
      </h1>
    </ProjectDisplayContainer>
  );
};

export default ProjectDisplay;
