import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite";
import AppRoute from "./router";
import LayoutAdmin from "./layouts/LayoutAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSite />}>
          {AppRoute.RouteSite.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} key={index} element={<Page />} />
          })}
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
