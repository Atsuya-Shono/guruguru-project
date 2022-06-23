import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { Tags } from "../molecules/tags"

export const Search = () => {
  return (
    <div>
      <Input />
      {/* <Button>Search</Button> */}
      <Button text = "Search"/>
      <Tags />
    </div>
  );
}
