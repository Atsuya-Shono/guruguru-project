import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { InfoData } from "../data/infoData";
import { Card } from "../atoms/card";
import { infoState } from "../store/infoState";

type Props = {
  id: number;
};

export const InfoThumbnail = (props: Props) => {
  const { id } = props; //リクエストされたid
  const setInfoState = useSetRecoilState(infoState); //

  return (
    <>
      <Link to="/pagelist/page" onClick={() => setInfoState(id)}>
        <SContainer>
          <Card>
            <h3>{InfoData[id].name}</h3>
            <img height={240} width={400} src={InfoData[id].images[0]} />
          </Card>
        </SContainer>
      </Link>
    </>
  );
};

const SContainer = styled.div`
  display: block;
  align-items: center;
`;
