import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <section className="hdl-footer pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pt-4">
                            <h3 className="widgettilte">CHÚNG TÔI LÀ AI ?</h3>
                            <p className="pt-1">
                                Copyright@ 2024 FLAT SHOP là hệ thống bán sĩ và lẽ thời trang nam, nữ, trẻ em và quần áo thể thao,
                                mong muốn đem đến chất lượng tốt nhất cho khách hàng.
                            </p>
                            <p className="pt-1">
                                Địa chỉ: B216A, KP Bình Phước, Phường Bình Nhâm, TP. Thuận An, Bình Dương
                            </p>
                            <p className="pt-1">
                                Điện thoại: 0985 608 759(call, zalo) - Email: machuy2003@gmail.com
                            </p>
                            <h3 className="widgettilte">MẠNG XÃ HỘI</h3>
                            <div className="social my-3">
                                <div className="facebook-icon">
                                    <Link to="#">
                                        <FaFacebook color="#0000FF" size={30}/>
                                    </Link>
                                </div>
                                <div className="instagram-icon">
                                    <Link to="#">
                                        <FaInstagramSquare color="#FF1493" size={30}/>
                                    </Link>
                                </div>
                                <div className="google-icon">
                                    <Link to="#">
                                        <i className="fab fa-google"></i>
                                    </Link>
                                </div>
                                <div className="youtube-icon">
                                    <Link to="#">
                                        <i className="fab fa-youtube"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pt-4">
                            <h3 className="widgettilte">
                                <strong>Liên hệ</strong>
                            </h3>
                            <ul className="footer-menu">
                                <li><Link to="index.html">Trang chủ</Link></li>
                                <li><Link to="post_page.html">Giới thiệu</Link></li>
                                <li><Link to="product.html">Sản phẩm</Link></li>
                                <li><Link to="post_topic.html">Bài viết</Link></li>
                                <li><Link to="contact.html">Liên hệ</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 pt-4 text-end">
                            <h3 className="fs-5 text-end">
                                <strong>Lượt truy cập</strong>
                            </h3>
                            <p className="my-1">9888 lượt</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dhl-copyright bg-dark py-3">
                <div className="container text-center text-white">
                    Thiết kế bởi: Mạc Quốc Huy - Phone: 0868459255
                </div>
            </section>
        </>
    );
}
export default Footer;