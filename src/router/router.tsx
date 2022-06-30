import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/top"
import { About } from "../components/pages/about";
import { PageList } from "../components/pages/pageList";
import { Page } from "../components/pages/page";
import { Header } from "../components/templates/header";

export const Router = () => {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Top />} />
            <Route path="/about" element={<About />} />
            <Route path="/pagelist" element={<PageList />} />
            <Route path="/pagelist/page" element={<Page />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}
