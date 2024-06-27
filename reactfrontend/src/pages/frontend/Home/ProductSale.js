import ProductItemSale from "../../../components/ProductItemSale";
import ProductService from "../../../services/ProductService";
import { useEffect, useState } from "react";

const ProductSale = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await ProductService.productsale(8);
            setProducts(result.products);
        })();
    }, []);

    return (
        <div className="hot-products">
            {/* <h3 className="title"><strong>{props.category.name}</strong></h3> */}
            <h3 className="py-3 text-center">SẢN PHẨM KHUYẾN MÃI</h3>
            <div className="row">
                {products && products.map((product, index) => {
                    return (
                        <ProductItemSale key={index} product={product} />
                    );
                })}
            </div>
        </div>
    );
}
export default ProductSale;