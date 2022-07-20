import styled from "styled-components";
import { InfoThumbnails } from "../organisms/infoThumbnails";

export const Top = () => {
  return (
    <>
      <SContainer>
        <h1>Top</h1>
        <h2>新着情報</h2>
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
