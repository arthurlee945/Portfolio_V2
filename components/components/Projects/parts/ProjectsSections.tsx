import { FC, useMemo } from "react";
import styled from "styled-components";
import ScrollBoard from "components/reusable/ScrollBoard";
import { colors, medias } from "@/styles/style-variables";
import FeaturedCard from "../../../reusable/FeaturedCard";

const ProjectsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid ${colors.white};
  .ps-titles {
    padding: 15px;
    .repeating-text {
      font-size: 3rem;
      column-gap: 1.5rem;
      @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
        font-size: 2.5rem;
        column-gap: 1rem;
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
        font-size: 1.8rem;
        column-gap: 0.75rem;
      }
    }
  }
  .projects {
    border-top: 1px solid ${colors.white};
    padding: 65px min(5%, 75px);
    display: flex;
    justify-content: space-between;
    width: 100%;
    column-gap: 20px;
    flex-wrap: wrap;
    row-gap: 50px;
    @media only screen and (max-width: ${medias.tablet + "px"}) {
      flex-direction: column;
      align-items: center;
      padding: 65px min(9%, 95px);
      row-gap: 70px;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      padding: 65px min(6%, 60px);
      row-gap: 40px;
    }
    .project-card {
    }
  }
`;
interface PSInterface {
  sectionTitle?: string;
  wordCount?: number;
  viewport?: string;
  data: any[];
}

const ProjectsSections: FC<PSInterface> = ({ sectionTitle = "Sample Title", wordCount = 5, viewport, data }) => {
  const editedTitle = new Array(wordCount).fill(sectionTitle).join(" ");
  const vpMemo = useMemo(() => (viewport === "desktop" ? 1 : 0), [viewport]);
  return (
    <ProjectsSectionContainer>
      <ScrollBoard className="ps-titles">{editedTitle}</ScrollBoard>
      <div className="projects">
        {data.map((prj, i) => (
          <FeaturedCard
            className="project-card"
            key={prj.id}
            data={prj}
            transition={{ delay: vpMemo * i * 0.1 }}
            viewport={{ amount: 0.5 }}
          />
        ))}
      </div>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSections;
