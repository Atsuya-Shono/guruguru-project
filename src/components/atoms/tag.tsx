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

 const BaseTag = styled.button`
  border: none;
  outline: none;
  margin: 5px;
  border-radius: 30px;
  min-width: 50px;
`;

const OnButton = styled(BaseTag)`
  background-color: rgb(200, 120, 120);
`

const OffButton = styled(BaseTag)`
  background-color: rgb(180, 180, 180);
`
