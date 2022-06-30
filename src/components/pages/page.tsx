import { GuruInfo } from "../organisms/guruinfo";

export const Page = () => {
  //const id = useRecoilState(infoState);
  //const id_: number = useRecoilValue(infoState);

  return (
    <div>
      <h1>飲食店情報</h1>
      <GuruInfo />
    </div>
  );
};
