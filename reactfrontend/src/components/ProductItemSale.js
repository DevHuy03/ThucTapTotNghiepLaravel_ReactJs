import React from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../Config";
import { useState } from "react";

const ProductItemSale = (props) => {
    const product = props.product;

    const [cart, setCart] = useState([]);
    const addToCart = () => {
        const productCopy = { ...props.product };
        const updatedCart = [...cart, productCopy];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert("Sản phẩm đã được thêm vào giỏ hàng.");
    };
    return (
        <div className="col-md-3 col-sm-6">
            <div className="products">
            <div className="offer">{product.price} <sup> đ</sup></div>
                <div className="">
                    <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                        <img src={urlImage + 'product/' + product.image} alt="Product Name" />
                    </Link>
                </div>
                <div className="productname">{product.name}</div>
                <h4 className="price">Sale {product.pricesale} <sup> đ</sup></h4>
                <div className="button_group">
                    <button className="button add-cart" onClick={addToCart} type="button">Thêm giỏ hàng</button>
                    <button className="button compare" type="button"><i className="fa fa-exchange"></i></button>
                    <button className="button wishlist" type="button"><i className="fa fa-heart-o"></i></button>
                </div>
            </div>
        </div>
    );
}
export default ProductItemSale;