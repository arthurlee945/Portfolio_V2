import Header from "./Header";
import Footer from "./Footer";
import styled from "@emotion/styled";
type Props = {
  children: JSX.Element;
};
const Main = styled.main`
  max-width: 1920px;
  margin: 0px auto;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
