import { colors, medias } from "@/styles/style-variables";
import { FC } from "react";
import styled from "styled-components";
import HighlightText from "components/reusable/HighlightText";
const RecentWorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${colors.white};
  padding: 150px min(5%, 75px);
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 35px min(9%, 95px);
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 25px min(6%, 60px);
  }
  .rw-header {
    cursor: default;
    font-size: 3rem;
    column-gap: 1rem;
  }
`;

interface RWTypes {}

const RecentWorks: FC<RWTypes> = ({}) => {
  return (
    <RecentWorkContainer>
      <HighlightText className="rw-header">Recent Works</HighlightText>
      <div className="rw-contents"></div>
    </RecentWorkContainer>
  );
};

export default RecentWorks;
