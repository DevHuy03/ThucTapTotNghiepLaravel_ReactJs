import { Link } from "react-router-dom";
import { urlImage } from "../Config";
import { useState } from "react";
const ProductItem = (props) => {
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
        <div className="product-item border">
            <div className="product-item-image">
                <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                    <img src={urlImage + 'product/' + product.image} className="img-fluid" alt=""
                        id="img1" />
                    {/* <img className="img-fluid" src="public/images/product/thoi-trang-nam-2.jpg" alt=""
                        id="img2" /> */}
                </Link>
                <button className='btn btn-outline-dark' onClick={addToCart} id="img2" >Thêm vào giỏ hàng</button>

            </div>
            <h2 className="product-item-name text-main text-center fs-5 py-1">
                <Link to={"/chi-tiet-san-pham/" + props.product.slug}>{product.name}</Link>
            </h2>
            <h3 className="product-item-price fs-6 p-2 d-flex">
                <div className="flex-fill">{product.price}</div>
                <div className="flex-fill text-end text-main text-danger">{product.pricesale}</div>
            </h3>

        </div>
    );
}
export default ProductItem;