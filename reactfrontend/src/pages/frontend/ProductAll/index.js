import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import ProductItem2 from "../../../components/ProductItem2";

const ProductAll = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(4);
    useEffect(() => {
        (async () => {
            const result = await ProductService.getProductAll(limit, 1);
            setProducts(result.products);
        })();
    }, [limit]);
    return (
        <>
            <div className="category-title bg-main mt-2">
                <h3 className="fs-5 py-3 text-center">TẤT CẢ SẢN PHẨM</h3>
            </div>
            <div className="row product-list">
                {products && products.map((product, index) => {
                    return (
                        <ProductItem2 key={index} product={product} />
                    );
                })}
            </div>
            <div className='row'>
                <div className='col-12 text-center mb-2'>
                    <button className='btn btn-success' onClick={() => setLimit(limit + 4)}>Xem thêm</button>
                </div>
            </div>
        </>
    );

}
export default ProductAll;