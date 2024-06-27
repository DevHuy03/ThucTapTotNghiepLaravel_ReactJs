import { Link } from "react-router-dom";
import MainMenu from "../../components/MainMenu";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import Logo from '../../assets/image/logo.png';
const Header = () => {
    const [key, setKey] = useState("");
    return (
        <>
            <section className="hdls-header">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-2 py-3">
                            <Link to="/">
                                <img src={Logo} className="img-fluid" alt="Logo" />
                            </Link>
                        </div>
                        <div className="col-12 col-sm-9 d-none d-md-block col-md-5 py-3">
                            <div className="input-group mb-3">
                                <input value={key} onChange={(e)=>setKey(e.target.value)} className="form-control" placeholder="Nhập nội dung tìm kiếm"
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text bg-main" id="basic-addon2">
                                <Link className="fa fa-search" aria-hidden="true" to={"/tim-kiem/"+ key }></Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 d-none d-md-block col-md-4 text-center py-2">
                            <div className="call-login--register border-bottom">
                                <ul className="nav nav-fills py-0 my-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="login.html">
                                            <i className="fa fa-phone-square" aria-hidden="true"> </i>
                                              0987654321
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/dang-nhap"}>Đăng nhập</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/dang-ky"}>Đăng ký</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="profile.html">Mạc Quốc Huy</Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="fs-6 py-2">
                                ĐỔI TRẢ HÀNG HOẶC HOÀN TIỀN <span className="text-main">TRONG 3 NGÀY</span>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-1 text-end py-4 py-md-2">
                            <Link to="/gio-hang">
                                <div className="box-cart float-end">
                                <FiShoppingCart size={30}/>
                                    <span>1</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <MainMenu />
        </>
    );
}
export default Header;