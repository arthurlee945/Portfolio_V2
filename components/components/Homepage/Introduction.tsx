import { FC } from "react";
import styled from "styled-components";
interface IntroductionProps {}

const IntroductionContainer = styled.div`
  height: 90vh;
`;
const Introduction: FC<IntroductionProps> = ({}) => {
  return <IntroductionContainer>Introduction</IntroductionContainer>;
};

export default Introduction;
