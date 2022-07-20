//検索に使うタグボタン
import { useState } from "react";
import styled from "styled-components";
// import { RecoilRoot } from "recoil"

type Props = {
  text: string;
};

export const Tag = (props: Props) => {
  const { text } = props;
  const [onFlag, setOnFlag] = useState(false);

  //切り替え
  const OnTag = () => {
    setOnFlag(!onFlag);
  };

  return (
    <div>
      {onFlag || <OffButton onClick={OnTag}>{text}</OffButton>}
      {onFlag && <OnButton onClick={OnTag}>{text}</OnButton>}
    </div>
  );
};

//デフォルトスタイル
const BaseTag = styled.button`
  border: none;
  outline: none;
  margin: 5px;
  border-radius: 30px;
  min-width: 50px;
`;

//ONのスタイル
const OnButton = styled(BaseTag)`
  background-color: rgb(255, 200, 200);
`;

//OFFのスタイル
const OffButton = styled(BaseTag)`
  background-color: rgb(180, 180, 180);
`;
