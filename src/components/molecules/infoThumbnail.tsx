import styled from "styled-components";
import { InfoData } from "../data/infoData";
import { Card } from "../atoms/card";

export const InfoThumbnail = (props: any) => {
  const { id } = props;

  return (
    <SContainer>
      <Card>
        <h3>{InfoData[id].name}</h3>
        <img height={240} width={400} src={InfoData[id].images[0]} />
      </Card>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: block;
  align-items: center;
`;
