import { colors, medias } from "@/styles/style-variables";
import { FC, useMemo } from "react";
import styled from "styled-components";
import HighlightText from "components/reusable/HighlightText";
import FeaturedCard from "../../reusable/FeaturedCard";
import ProjectsData from "../../../data/Projects.json";
import { useViewPortTracker } from "utils/custom-hooks";

const RecentWorkContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 75px;
  border-top: 1px solid ${colors.white};
  padding: 125px min(5%, 75px);
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 65px min(9%, 95px);
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 50px min(6%, 60px);
  }
  .rw-header {
    cursor: default;
    font-size: 2.75rem;
    column-gap: 1rem;
    @media only screen and (max-width: ${medias.phone + "px"}) {
      font-size: 2rem;
      column-gap: 0.5rem;
    }
  }
  .rw-contents {
    display: flex;
    justify-content: center;
    justify-content: space-around;
    width: 100%;
    column-gap: 15px;
    @media only screen and (max-width: ${medias.tablet + "px"}) {
      flex-direction: column;
      align-items: center;
      row-gap: 50px;
    }
  }
`;

interface RWTypes {}

const RecentWorks: FC<RWTypes> = ({}) => {
  const { data } = ProjectsData;
  const vpTracker = useViewPortTracker();
  const vpMemo = useMemo(() => (vpTracker === "desktop" ? 1 : 0), [vpTracker]);
  return (
    <RecentWorkContainer>
      <HighlightText className="rw-header">Recent Works</HighlightText>
      <div className="rw-contents">
        {data.work.map((wData, i) => (
          <FeaturedCard key={wData.name} data={wData} transition={{ delay: vpMemo * i * 0.15 }} viewport={{ amount: 0.5 }} />
        ))}
      </div>
    </RecentWorkContainer>
  );
};

export default RecentWorks;
