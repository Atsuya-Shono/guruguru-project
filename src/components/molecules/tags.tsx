import styled from "styled-components"
import { Tag } from "../atoms/tag"

export const Tags = () => {
return (
<Scontainer>
  <Tag text="海鮮" />
  <Tag text="肉" />
  <Tag text="中華" />
  <Tag text={"日本酒"} />
</Scontainer>
);
}

const Scontainer = styled.div`
padding 10px;
display: flex;
justify-content: center;
align-items: center;
`;
