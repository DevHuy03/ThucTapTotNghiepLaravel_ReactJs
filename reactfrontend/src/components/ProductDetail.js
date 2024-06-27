import { Link, useParams } from "react-router-dom";
import { urlImage } from "../Config";
import ProductItem2 from "./ProductItem2";
import { useEffect, useState } from "react";
import ProductService from "../services/ProductService";

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);
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
    return (
        <section class="hdl-maincontent py-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="image">
                            <img id="productimage" class="img-fluid w-100" src={urlImage + 'product/' + product.image}
                                alt="" />
                        </div>
                        <div class="list-image mt-3">
                            <div class="row">
                                <div class="col-3">
                                    <img id="productimage" class="img-fluid w-100" src={urlImage + 'product/' + product.image}
                                        alt="" />
                                </div>
                                <div class="col-3">
                                    <img id="productimage" class="img-fluid w-100" src={urlImage + 'product/' + product.image}
                                        alt="" />
                                </div>
                                <div class="col-3">
                                    <img id="productimage" class="img-fluid w-100" src={urlImage + 'product/' + product.image}
                                        alt="" />
                                </div>
                                <div class="col-3">
                                    <img class="img-fluid" src="../public/images/product/thoi-trang-nam-1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* <script>
                            function changeimage(src) {
                                document.getElementById("productimage").src = src;
                    }
                        </script> */}
                    </div>
                    <div class="col-md-6">
                        <h1 class="text-main">{product.name}</h1>
                        <h3 class="fs-5">{product.description}</h3>
                        <h2 class="text-main py-4">{product.price}</h2>
                        <div class="mb-3 product-size">
                            <input id="sizexxl" type="radio" class="d-none" /*  value="xxl"  */ name="size" />
                            <label htmlFor="sizexxl" class="bg-info p-2">XXX</label>
                            <input id="sizexl" type="radio" class="d-none" /* value="xl" */ name="size" />
                            <label htmlFor="sizexl" class="bg-info p-2 px-3">XL</label>
                            <input id="sizel" type="radio" class="d-none" /* value="xl" */ name="size" />
                            <label htmlFor="sizel" class="bg-primary p-2 px-3">M</label>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="">Số lượng</label>
                            <input type="number" /* value="1" */ name="qty" class="form-control" style={{ width: 200 }} />
                        </div>
                        <div class="mb-3">
                            <Link class="btn btn-main" to="checkout.html">Mua ngay</Link>
                            <button class="btn btn-main">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2 class="text-main fs-4 pt-4">Chi tiết sản phẩm</h2>
                    <p>
                        {product.detail}
                    </p>
                </div>
                <div class="row">
                    <h2 class="text-main fs-4 pt-4">Sản phẩm khác</h2>
                    <div class="product-category mt-3">
                        <div class="row product-list">
                            {product_other && product_other.map(function (product, index) {
                                return (
                                        <ProductItem2 key={index} product={product} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ProductDetail;