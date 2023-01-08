import Link from "next/link";
import styled from "@emotion/styled";
import { medias } from "../../styles/style-variables";
const HeaderComponent = styled.header`
  max-width: ${medias.maxDesktop + "px"};
  margin: 0px auto;
  .navigation {
    padding: 25px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .route_container {
      display: flex;
      column-gap: 50px;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderComponent>
      <div className="navigation">
        <Link href="/">PH LOGO</Link>
        <ul className="route_container">
          <li>
            <Link className="" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </HeaderComponent>
  );
};

export default Header;
