import { useParams } from "react-router-dom";
import BrandService from "../../../services/BrandService";
import ProductService from "../../../services/ProductService";
import { useState } from "react";
import { useEffect } from "react";
import ListBrand from "./ListBrand";
import ProductItem2 from "../../../components/ProductItem2";

const ProductBrand = () =>{
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [limit] = useState(4);
    useEffect(() => {
        (async () => {
            try {
                const infobrand = await BrandService.getById(slug);
                const brandid = infobrand.brand.id;
                const result = await ProductService.getProductByBrandId(brandid, limit);
                setProducts(result.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug]);
    return (
        <div className="product-category mt-3">
            <div className="row">
                <div className="col-md-3">
                <ListBrand />
                </div>
                <div className="col-md-9">
                    <div className="row product-list">
                        {products && products.map((product, index) => {
                            return (
                                // <div className="col-6 col-md-3 mb-4" key={index}>
                                //     <ProductItem product={product} />
                                // </div>
                                <ProductItem2 key={index} product={product} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductBrand;