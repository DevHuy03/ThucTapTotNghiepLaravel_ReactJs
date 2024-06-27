import { Link } from "react-router-dom";
const MainMenu = () => {

    return (
        <section class="hdl-mainmenu bg-main">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-none d-md-block col-md-2 d-none d-md-block">
                        <div class="dropdown list-category">
                            <strong class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Danh mục sản phẩm
                            </strong>
                            <ul class="dropdown-menu w-100">
                                <li><Link class="dropdown-item" to={"/danh-muc-san-pham/do-nam"}>Thời trang nam</Link></li>
                                <li><Link class="dropdown-item" to={"/danh-muc-san-pham/do-nu"}>Thời trang nữ</Link></li>
                                <li><Link class="dropdown-item" to={"/danh-muc-san-pham/do-tre-em"}>Thời trang trẻ em</Link></li>
                            </ul>
                        </div>
                    </div> 
                    <div class="col-12 col-md-9">
                        <nav class="navbar navbar-expand-lg bg-main">
                            <div class="container-fluid">
                                <Link class="navbar-brand d-block d-sm-none text-black" to={"/"}>FLAT SHOP</Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <Link class="nav-link text-black" aria-current="page" to={"/"}>Trang chủ</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link text-black" to={"/gioi-thieu"}>Giới thiệu</Link>
                                        </li>
                                        {/* <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle text-black" to="#" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Thời trang nam
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item text-main" to="product_category.html">Quần jean nam</Link>
                                                </li>
                                                <li><Link class="dropdown-item text-main" to="product_category.html">Áo thun nam </Link>
                                                </li>
                                                <li><Link class="dropdown-item text-main" to="product_category.html">Sơ mi nam</Link></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle text-black" to="#" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Thời trang nữ
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item text-main" to="product_category.html">Váy</Link></li>
                                                <li><Link class="dropdown-item text-main" to="product_category.html">Đầm</Link>
                                                </li>
                                                <li><Link class="dropdown-item text-main" to="product_category.html">Sơ mi nữ</Link></li>
                                            </ul>
                                        </li> */}
                                        <li class="nav-item">
                                            <Link to={"/san-pham"} class="nav-link text-black">Tất cả sản phẩm</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={"/thuong-hieu/viet-nam"} class="nav-link text-black">Thương hiệu</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={"/bai-viet"} class="nav-link text-black">Bài viết</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={"/lien-he"} class="nav-link text-black">Liên hệ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default MainMenu;