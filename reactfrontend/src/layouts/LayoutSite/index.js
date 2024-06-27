import "./LayoutSiteStyle.css"
import Header from "./Header";
import Footer from "./Footer";
// import Home from "../../pages/frontend/Home";
import { Outlet } from "react-router-dom";
const LayoutSite = () => {
    return (
        <>
            <Header/>
            {/* <Home/> */}
            <Outlet />
            <Footer/> 
        </>
    );
}
export default LayoutSite;