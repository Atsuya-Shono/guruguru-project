import styled from "styled-components"
export const Button = (props: any) =>
{
  const { text } = props;

  return (
    <SButton>
      {text}
    </SButton>
  )
}

const SButton = styled.button`
    align-items: center;
    margin 10px;
`;
