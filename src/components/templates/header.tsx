import styled from "styled-components";
import { Link } from "react-router-dom";
import headerImage from "../images/guruguru_logo.png";

export const Header = () => {
  return (
    <>
      <SHeader>
        <ul>
          <SLi>
            <Link to="/">
              <SImg height={80} width={180} src={headerImage} />
            </Link>
          </SLi>

          <SLi>
            <Link to="/about">About</Link>
          </SLi>

          <SLi>
            <Link to="/pagelist">Page List</Link>
          </SLi>
        </ul>
      </SHeader>
    </>
  );
};

const SHeader = styled.header`
  background-color: rgb(200, 255, 200);
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SImg = styled.img`
  border-radius: 30px;
`;

const SLi = styled.li`
display: inline;
padding 10px;
font-size: 120%;
`;
