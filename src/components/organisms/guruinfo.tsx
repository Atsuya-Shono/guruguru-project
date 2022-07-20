import { useRecoilState } from "recoil";
import styled from "styled-components";

import { infoState } from "../store/infoState";

import { InfoData } from "../data/infoData";

export const GuruInfo = () => {
  const [id, setInfoState] = useRecoilState(infoState);

  return (
    <div>
      <h2> {InfoData[id].name}</h2>
      <img height={250} width={400} src={InfoData[id].images[0]} />
      <STable>
        <tr>
          <td>予算:</td>
          <td> {InfoData[id].budet}</td>
        </tr>
        <tr>
          <td>営業時間・定休日:</td>
          <td> {InfoData[id].opening}</td>
        </tr>
        <tr>
          <td>マップ:</td>
          <td> {InfoData[id].map}</td>
        </tr>
      </STable>
    </div>
  );
};

const STable = styled.table`
border-collapse: collapse;
border-spacing: 0;
width: 30%;
text-align: center;
align-items: center;
margin: 0 auto;

tr {
border-bottom: solid 1px #eee;
// cursor: pointer;
hover: background-color: #d4f0fd;
}

th,
td {
text-align: center;
width: 25%;
padding: 15px 0;

}
`;
