// import { Button } from "../atoms/button";
// import { Input } from "../atoms/input";
// import { Link } from "react-router-dom";
// import { useRecoilState } from "recoil";
import styled from "styled-components";
// import { InfoThumbnail } from "../molecules/infoThumbnail";
import { InfoThumbnails } from "../organisms/infoThumbnails";
import { Search } from "../organisms/search";
// import { infoState } from "../store/infoState";

export const PageList = () => {
  // const [id, setInfoState] = useRecoilState(infoState);
  // const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h1>飲食店検索</h1>
      <SContainer>
        <Search />
        <InfoThumbnails />
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
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
