import { FC } from "react";
import styled from "styled-components";
import ScrollBoard from "components/reusable/ScrollBoard";
const ProjectsSectionContainer = styled.section``;
interface PSInterface {
  sectionTitle?: string;
}

const ProjectsSections: FC<PSInterface> = ({ sectionTitle = "Sample Title" }) => {
  const editedTitle = new Array(5).fill(sectionTitle).join(" ");
  return (
    <ProjectsSectionContainer>
      <ScrollBoard>{editedTitle}</ScrollBoard>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSections;
