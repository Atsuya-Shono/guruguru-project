import { useState } from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil"

export const Tag = (props: any) => {
  const { text } = props;
  const [onFlag, setOnFlag] = useState(false);

  const OnTag = () => {
    setOnFlag(!onFlag);
  };
  //console.log(onFlag);

  return (
    <div>
      {onFlag || <OffButton onClick={OnTag}>{text}</OffButton>}
      {onFlag && <OnButton onClick={OnTag}>{text}</OnButton>}
    </div>
  );
}

const OnButton = styled.button`
  background-color: rgb(200, 120, 120);
  border: none;
  outline: none;
`

const OffButton = styled.button`
  background-color: rgb(180, 180, 180);
  border: none;
  outline: none;
`
