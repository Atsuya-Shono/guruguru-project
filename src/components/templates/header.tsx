import styled from "styled-components";
import { Link } from "react-router-dom";
import headerImage from "../images/guruguru_logo.png"

export const Header = () => {

  return (
    <>
      <SHeader>
        <Link to="/">
          <SImg height={80} width={180} src={headerImage} />
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/pagelist">
          Page List
        </Link>
      </SHeader>
    </>
  );
}

const SHeader = styled.header`
  background-color: rgb(100, 255, 200);
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SImg = styled.img`
  border-radius: 30px
`;
