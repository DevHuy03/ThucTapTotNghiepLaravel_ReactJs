import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./LayoutAdminStyle.css"
import { FaPlus, FaProductHunt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const LayoutAdmin = () => {
    function handleItemClick(item) {
        const hdlitem = document.getElementById(item);
        hdlitem.classList.toggle("active");
    }
    return (
        <>
            <section className="hdl-header sticky-top">
                <div className="container-fluid">
                    <ul className="menutop">
                        <li>
                            <Link to="">
                                <i className="fa-brands fa-dashcube"></i> Shop Thời trang
                            </Link>
                        </li>
                        <li className="text-phai">
                            <Link to="">
                                <i className="fa-solid fa-power-off"></i> Thoát
                            </Link>
                        </li>
                        <li className="text-phai">
                            <Link to="">
                                <i className="fa fa-user" aria-hidden="true"></i> Chào quản lý
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="hdl-content">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 bg-dark p-0 hdl-left">
                            <div className="hdl-left">
                                <div className="dashboard-name">
                                    Bản điều khiển
                                </div>
                                <nav className="m-2 mainmenu">
                                    <ul className="main">
                                        <li className="hdlitem item-sub" id="item1" onClick={() => handleItemClick('item1')}>
                                            <FaProductHunt className="icon-left" />
                                            <Link to="#">Sản phẩm</Link>
                                            <FaPlus className="icon-right" />
                                            <ul className="submenu">
                                                <li>
                                                    <Link to={"/admin/product/index"}>Tất cả sản phẩm</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/admin/product/import"}>Nhập hàng</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/admin/category/index"}>Danh mục</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/admin/brand/index"}>Thương hiệu</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/admin/product/sale"}>Khuyễn mãi</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="hdlitem item-sub" id="item2" onClick={() => handleItemClick('item2')}>
                                            <FaProductHunt className="icon-left" />
                                            <Link to="#">Bài viết</Link>
                                            <FaPlus className="icon-right" />
                                            <ul className="submenu">
                                                <li>
                                                    <Link to={"/admin/post/index"}>Tất cả bài viết</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/admin/topic/index"}>Chủ đề</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/admin/page/index"}>Trang đơn</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="hdlitem item-sub" id="item3" onClick={() => handleItemClick('item3')}>
                                            <FaProductHunt className="icon-left" />
                                            <Link to="#">Quản lý bán hàng</Link>
                                            <FaPlus className="icon-right" />
                                            <ul className="submenu">
                                                <li>
                                                    <Link to={"/admin/order/index"}>Tất cả đơn hàng</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/admin/order/export'}>Xuất hàng</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="hdlitem">
                                            <i className="fa-regular fa-circle icon-left"></i>
                                            <Link to={"/admin/customer/index"}>Khách hàng</Link>
                                        </li>
                                        <li className="hdlitem">
                                            <i className="fa-regular fa-circle icon-left"></i>
                                            <Link to={"/admin/contact/index"}>Liên hệ</Link>
                                        </li>
                                        <li className="hdlitem item-sub" id="item4" onClick={() => handleItemClick('item4')}>
                                            <FaProductHunt className="icon-left" />
                                            <Link to="#">Giao diện</Link>
                                            <FaPlus className="icon-right" />
                                            <ul className="submenu">
                                                <li>
                                                    <Link to={"/admin/menu/index"}>Menu</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/admin/banner/index"}>Banner</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="hdlitem item-sub" id="item5" onClick={() => handleItemClick('item5')}>
                                            <FaProductHunt className="icon-left" />
                                            <Link to="#">Hệ thống</Link>
                                            <FaPlus className="icon-right" />
                                            <ul className="submenu">
                                                <li>
                                                    <Link to={"/admin/user/index"}>Thành viên</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/admin/config/index"}>Cấu hình</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-md-10">
                            {/* CONTENT  */}
                            <div className="content">
                                <Outlet />

                            </div>
                            {/* END CONTENT */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default LayoutAdmin;


