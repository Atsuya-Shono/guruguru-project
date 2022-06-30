import styled from "styled-components"
import { Button } from "../atoms/button"

export const Input = () =>
{
  return (
    <SContainer>
        <input type="text" />    
        <Button text="Search" />
    </SContainer>
  );
}

const SContainer = styled.div`
// display: flex;
// padding 10px;
// text-align: center;
// font-size: 120%;
`;
