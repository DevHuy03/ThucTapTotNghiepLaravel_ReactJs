import ProductDetail from "../components/ProductDetail";
import Search from "../layouts/LayoutSite/Search";
import Cart from "../pages/frontend/Cart";
import CategoryAll from "../pages/frontend/CategoryAll";
import ChinhSach from "../pages/frontend/ChinhSach";
import Contact from "../pages/frontend/Contact";
import GioiThieu from "../pages/frontend/GioiThieu";
import Home from "../pages/frontend/Home";
import Login from "../pages/frontend/Login";
import Post from "../pages/frontend/Post";
import PostDetail from "../pages/frontend/Post/PostDetail";
import PostTopic from "../pages/frontend/Post/PostTopic";
import ProductAll from "../pages/frontend/ProductAll";
import ProductBrand from "../pages/frontend/ProductBrand";
import ProductCategory from "../pages/frontend/ProductCategory";
import Register from "../pages/frontend/Register";

const RouteSite = [
    { path: '/', component:Home },
    {path:'/san-pham',component:ProductAll},
    {path:'/danh-muc-san-pham',component:CategoryAll},
    {path:'/lien-he',component:Contact},
    {path:'/bai-viet',component:Post},
    {path:'/dang-ky',component:Register},
    {path:'/gioi-thieu',component:GioiThieu},
    {path:'/chinh-sach',component:ChinhSach},
    {path:'/danh-muc-san-pham/:slug',component:ProductCategory},  
    {path:'/thuong-hieu/:slug',component:ProductBrand},
    {path:'/chi-tiet-san-pham/:slug',component:ProductDetail},
    {path:'/gio-hang',component:Cart},
    {path:'/tim-kiem/:key',component:Search},
    {path:'/dang-nhap',component:Login},
    { path: "/chi-tiet-bai-viet/:slug", component:PostDetail},
    { path: "/chu-de-bai-viet/:slug", component:PostTopic},

];
export default RouteSite;