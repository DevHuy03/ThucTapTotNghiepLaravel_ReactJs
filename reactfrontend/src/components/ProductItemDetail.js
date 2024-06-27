import { useEffect, useState } from "react";
import { urlImage } from "../Config";
import ProductService from "../services/ProductService";
import ProductItem2 from "./ProductItem2";

const ProductItemDetail = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await ProductService.producthotbuy(8);
            setProducts(result.products);
        })();
    }, []);
    return (
        <div className="row">
            {products && products.map((product, index) => {
                return (
                    <ProductItem2 key={index} product={product} />
                );
            })}

        </div>
    );
}
export default ProductItemDetail;