import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import ProductItem2 from "../../../components/ProductItem2";
function ProductCategory(props) {
    const [products, setProducts] = useState([]);
    const [limit] = useState(4);

    useEffect(function () {
        (async function () {
            const result = await ProductService.getProductHome(limit, props.category.id);
            setProducts(result.products);
        })();
    }, [limit, props.category.id]);

    if (products != null) {
        return (
            <div className="hot-products">
                <h3 className="title"><strong>{props.category.name}</strong></h3>
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
}
export default ProductCategory;