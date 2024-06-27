import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import ProductItem2 from "../../../components/ProductItem2";

const ProductNew = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await ProductService.productnew(8);
            setProducts(result.products);
        })();
    }, []);
    return (
        <div className="hot-products">
            {/* <h3 className="title"><strong>{props.category.name}</strong></h3> */}
            <h3 className="py-3 text-center">SẢN PHẨM MỚI</h3>
            <div className="row">
                {products && products.map((product, index) => {
                    return (
                        <ProductItem2 key={index} product={product} />
                    );
                })}
            </div>
        </div>
    );
}
export default ProductNew;