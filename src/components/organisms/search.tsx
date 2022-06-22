import { RecoilRoot } from "recoil"
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { Tags } from "../molecules/tags"

export const Search = () => {
  return (
    <div>
      <Input />
      <Button>Search</Button>
      <Tags />
    </div>
  );
}
