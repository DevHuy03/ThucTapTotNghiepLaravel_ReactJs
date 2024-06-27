import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../Config";
import { useState } from "react";
import Swal from 'sweetalert2';

const ProductItem2 = (props) => {
    const product = props.product;

    const [cart, setCart] = useState([]);
    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);

    const addToCart = () => {
        const product = props.product;
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên thêm 1
            const updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
            const productCopy = { ...product, quantity: 1 };
            const updatedCart = [...cart, productCopy];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
        Swal.fire({
            title: "Add to cart!",
            text: "You clicked the button!",
            icon: "success"
        });

    };
    return (
        <div className="col-md-3 col-sm-6">
            <div className="products">
                <div className="offer">{product.pricesale}</div>
                <div className="">
                    <Link to={"/chi-tiet-san-pham2/" + props.product.slug}>
                        <img src={urlImage + 'product/' + product.image} alt="Product Name" />
                    </Link>
                </div>
                <div className="productname">{product.name}</div>
                <h4 className="price">{product.price}<sup> đ</sup></h4>
                <div className="button_group">
                    <button className="button add-cart" onClick={addToCart} type="button">Thêm giỏ hàng</button>
                    <button className="button compare" type="button"><i className="fa fa-exchange"></i></button>
                    <button className="button wishlist" type="button"><i className="fa fa-heart-o"></i></button>
                </div>
            </div>
        </div>
    );
}
export default ProductItem2;