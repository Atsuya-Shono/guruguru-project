import styled from "styled-components"
import { Input } from "../molecules/input";
import { Tags } from "../molecules/tags"

export const Search = () => {
return (
<SContainer>
  <Input />
  <Tags />
</SContainer>
);
}

const SContainer = styled.div`
display: block;
align-items: center;
margin 0 auto;
text-align: center;
font-size: 120%;
`;
