import { Link, useParams } from "react-router-dom";
import { urlImage } from "../Config";
import { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import ProductItemDetail from "./ProductItemDetail";

const ProductDetail2 = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(function () {
        (function () {
            ProductService.getProductBySlug(slug)
                .then(function (result) {
                    if (result.success === true) {
                        setProduct(result.products);
                        setProductOther(result.product_other);
                    }
                });
        })()
    }, [slug])
    
    const addToCart = () => {
        const productCopy = { ...product };
        const updatedCart = [...cart, productCopy];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert("Sản phẩm đã được thêm vào giỏ hàng.");
    };
    return (
        <div className="container_fullwidth">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="products-details">
                            <div className="preview_image">
                                <div className="preview-small">
                                    <img id="zoom_03" src={urlImage + 'product/' + product.image} data-zoom-image="images/products/Large/products-01.jpg" alt="" />
                                </div>
                                <div className="thum-image">
                                    <ul id="gallery_01" className="prev-thum">
                                        <li>
                                            <Link to="#" data-image="images/products/medium/products-01.jpg" data-zoom-image="images/products/Large/products-01.jpg">
                                                <img src={urlImage + 'product/' + product.image} alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" data-image="images/products/medium/products-02.jpg" data-zoom-image="images/products/Large/products-02.jpg">
                                                <img src={urlImage + 'product/' + product.image} alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" data-image="images/products/medium/products-03.jpg" data-zoom-image="images/products/Large/products-03.jpg">
                                                <img src={urlImage + 'product/' + product.image} alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" data-image="images/products/medium/products-04.jpg" data-zoom-image="images/products/Large/products-04.jpg">
                                                <img src={urlImage + 'product/' + product.image} alt="" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" data-image="images/products/medium/products-05.jpg" data-zoom-image="images/products/Large/products-05.jpg">
                                                <img src={urlImage + 'product/' + product.image} alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link className="control-left" id="thum-prev">
                                        <i className="fa fa-chevron-left">
                                        </i>
                                    </Link>
                                    <Link className="control-right" id="thum-next">
                                        <i className="fa fa-chevron-right">
                                        </i>
                                    </Link>
                                </div>
                            </div>
                            <div className="products-description">
                                <h5 className="name">
                                    {product.name}
                                </h5>
                                <p>
                                    <img alt="" src="../images/star.png" />
                                    <Link className="review_num" to="#">
                                        02 Review(s)
                                    </Link>
                                </p>
                                <p>{product.description}</p>
                                <hr className="border" />
                                <div className="price">
                                    Giá :
                                    <span className="new_price">{product.price}<sup> đ</sup></span>
                                    <span className="old_price">
                                        450.00
                                        <sup>
                                            $
                                        </sup>
                                    </span>
                                </div>
                                <hr className="border" />
                                <div className="wided">
                                    <div className="qty">
                                        Số Lượng:
                                        <select>
                                            <option>
                                                1
                                            </option>
                                        </select>
                                    </div>
                                    <div className="button_group">
                                        <button className="button" onClick={addToCart} >
                                            Thêm Vào Giỏ Hàng
                                        </button>
                                        <button className="button favorite">
                                            <i className="fa fa-heart-o">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <div className="clearfix">
                                </div>
                                <hr className="border" />
                                <img src="../images/share.png" alt="" className="pull-right" />
                            </div>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="tab-box">
                            <div id="tabnav">
                                <h3>
                                    Miêu tả
                                </h3>
                            </div>
                            <div className="tab-content-wrap">
                                <div className="tab-content" id="Descraption">
                                    <p>
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div id="productsDetails" className="hot-products">
                            <h3 className="title">
                                <strong>
                                    Hot
                                </strong>
                                Products
                            </h3>
                            <div className="control">
                                <Link id="prev_hot" className="prev" to="#">
                                    &lt;
                                </Link>
                                <Link id="next_hot" className="next" to="#">
                                    &gt;
                                </Link>
                            </div>
                            <ul id="hot">
                                <li>
                                    <ProductItemDetail/>
                                </li>

                            </ul>
                        </div>
                        <div className="clearfix">
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="special-deal leftbar">
                            <h4 className="title">
                                Sản Phẩm
                                <strong>
                                    Cùng Loại
                                </strong>
                            </h4>

                            {product_other && product_other.map(function (product, index) {
                                return (
                                    <div className="special-item" key={index}>
                                        <div className="product-image">
                                            <Link to={"/chi-tiet-san-pham2/" + product.slug}>
                                                <img src={urlImage + 'product/' + product.image} alt="" />
                                            </Link>
                                        </div>
                                        <div className="product-info">
                                            {product.name}
                                            <h5 className="price">
                                             {product.price} đ
                                            </h5>
                                        </div>
                                    </div>

                                );
                            })}

                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="product-tag leftbar">
                            <h3 className="title">
                                Products
                                <strong>
                                    Tags
                                </strong>
                            </h3>
                            <ul>
                                <li>
                                    <Link to="#">
                                        Lincoln us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        SDress for Girl
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Corner
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Window
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        PG
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Oscar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Bath room
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        PSD
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="get-newsletter leftbar">
                            <h3 className="title">
                                Get
                                <strong>
                                    newsletter
                                </strong>
                            </h3>
                            <p>
                                Casio G Shock Digital Dial Black.
                            </p>
                            <form>
                                <input className="email" type="text" name="" placeholder="Your Email..." />
                                <input className="submit" type="submit" value="Submit" />
                            </form>
                        </div>
                        <div className="clearfix">
                        </div>
                        <div className="fbl-box leftbar">
                            <h3 className="title">
                                Facebook
                            </h3>
                            <span className="likebutton">
                                <Link to="#">
                                    <img src="../images/fblike.png" alt="" />
                                </Link>
                            </span>
                            <p>
                                12k people like Flat Shop.
                            </p>
                            <ul>
                                <li>
                                    <Link to="#">
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    </Link>
                                </li>
                            </ul>
                            <div className="fbplug">
                                <Link to="#">
                                    <span>
                                        <img src="../images/fbicon.png" alt="" />
                                    </span>
                                    Facebook social plugin
                                </Link>
                            </div>
                        </div>
                        <div className="clearfix">
                        </div>
                    </div>
                </div>
                <div className="clearfix">
                </div>
                <div className="our-brand">
                    <h3 className="title">
                        <strong>
                            Thương 
                        </strong>
                        Hiệu
                    </h3>
                    <div className="control">
                        <Link id="prev_brand" className="prev" to="#">
                            &lt;
                        </Link>
                        <Link id="next_brand" className="next" to="#">
                            &gt;
                        </Link>
                    </div>
                    <ul id="braldLogo">
                        <li>
                            <ul className="brand_item">
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/envato.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/themeforest.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/photodune.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/activeden.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/envato.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="brand_item">
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/envato.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/themeforest.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/photodune.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/activeden.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="brand-logo">
                                            <img src="../images/envato.png" alt="" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail2;