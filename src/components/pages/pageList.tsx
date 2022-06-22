// import { Button } from "../atoms/button";
// import { Input } from "../atoms/input";
import { Link } from "react-router-dom";
import { Search } from "../organisms/search"

export const PageList = () => {
  return (
    <div>
      <h2>pagellist</h2>
      <Search />
      <Link to="/pagelist/page">
        Page
      </Link>
    </div>
  );
}
