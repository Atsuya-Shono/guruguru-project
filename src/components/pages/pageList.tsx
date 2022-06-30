// import { Button } from "../atoms/button";
// import { Input } from "../atoms/input";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { InfoThumbnail } from "../molecules/infoThumbnail";
import { Search } from "../organisms/search";
import { infoState } from "../store/infoState";

export const PageList = () => {
  const setInfoState = useSetRecoilState(infoState);

  return (
    <>
      <h1>飲食店検索</h1>
      <SContainer>
        {/* <SLi> */}
        <Search />
        {/* </SLi> */}
        <ul>
          <SLi>
            <Link to="/pagelist/page" onClick={() => setInfoState(1)}>
              <InfoThumbnail id={1} />
            </Link>
          </SLi>
          <SLi>
            <Link to="/pagelist/page" onClick={() => setInfoState(2)}>
              <InfoThumbnail id={2} />
            </Link>
          </SLi>
          <SLi>
            <Link to="/pagelist/page" onClick={() => setInfoState(3)}>
              <InfoThumbnail id={3} />
            </Link>
          </SLi>
        </ul>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  // display: block;
  // align-items: center;
  // padding 10px;
  // display: table;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SLi = styled.li`
display: block;
padding 10px;
text-align: center;
font-size: 120%;
`;
