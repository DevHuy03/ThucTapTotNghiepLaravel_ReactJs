import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";
import ProductService from "../../../services/ProductService";
import ListCategory from "./ListCategory";
import ProductItem2 from "../../../components/ProductItem2";

const ProductCategory = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [limit] = useState(4);
    const [selectedPrices, setSelectedPrices] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const infocategory = await CategoryService.getBySlug(slug);
                const catid = infocategory.category.id;
                const infoproduct = await ProductService.getProductByCategoryId(catid, limit);
                setProducts(infoproduct.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug]);

    const handlePriceFilterChange = (priceRange) => {
        setSelectedPrices((prevPrices) => {
            return prevPrices.includes(priceRange)
                ? prevPrices.filter((price) => price !== priceRange)
                : [priceRange];
        });
    };

    const filterProductsByPrice = (product) => {
        if (selectedPrices.length === 0) {
            return true;
        }

        const productPrice = parseFloat(product.price);
        return selectedPrices.some(
            (priceRange) => {
                const [min, max] = priceRange.split('-');
                return productPrice >= parseFloat(min) && productPrice <= parseFloat(max);
            }
        );
    };
    const productsInRows = [];
    for (let i = 0; i < products.length; i += 4) {
        productsInRows.push(products.slice(i, i + 4));
    }

    return (

        <div className="product-category mt-3">
            <div className="row">
                <div className="col-md-3">
                    <ListCategory />

                    <div className="list-group">
                        <li
                            style={{ backgroundColor: '#777777', color: 'white' }}
                            className="list-group-item "
                        // aria-disabled="true"
                        >Price</li>
                        <div className="collapse show" id="widget-2">
                            <div className="nav-link text-black list-group-item list-group-item-action"
                            >
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input my-2" id="size-1"
                                        onChange={() => handlePriceFilterChange("10000-19000")}
                                        checked={selectedPrices.includes("10000-19000")}
                                    />
                                    <label className="custom-control-label" htmlFor="size-1">10000-20000 VND</label>
                                </div>
                            </div>
                            <div className="nav-link text-black list-group-item list-group-item-action"
                            >
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="size-2"
                                        onChange={() => handlePriceFilterChange("20000-29000")}
                                        checked={selectedPrices.includes("20000-29000 VND")}
                                    />
                                    <label className="custom-control-label" htmlFor="size-2">20000-30000 VND</label>
                                </div>
                            </div>
                            <div className="nav-link text-black list-group-item list-group-item-action"
                            >
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="size-1"
                                        onChange={() => handlePriceFilterChange("30000-39000")}
                                        checked={selectedPrices.includes("30000-39000 VND")}
                                    />
                                    <label className="custom-control-label" htmlFor="size-3">30000-40000 VND</label>
                                </div>
                            </div>
                            <div className="nav-link text-black list-group-item list-group-item-action"
                            >
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="size-4"
                                        onChange={() => handlePriceFilterChange("40000-50000")}
                                        checked={selectedPrices.includes("40000-50000")}
                                    />
                                    <label className="custom-control-label" htmlFor="size-4">40000-50000 VND</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row product-list">
                        {/* {products && products.map((product, index) => {
                            return (
                                <div className="col-6 col-md-3 mb-4" key={index}>
                                    <ProductItem product={product} />
                                </div>
                            );
                        })} */}
                        {productsInRows.map((row, rowIndex) => (
                            <div className="row" key={rowIndex}>
                                {row
                                    .filter(filterProductsByPrice)
                                    .map((product, index) => (
                                        // <div className="col-6 col-md-3 mb-4" key={index}>
                                        //     <ProductItem product={product} />
                                        // </div>
                                        <ProductItem2 key={index} product={product}/>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


        // <>
        //     <div className="category-title bg-main mt-4">
        //         <h3 className="fs-5 py-3 text-center">SẢN PHẨM THEO DANH MỤC</h3>
        //     </div>
        //     <div className="row product-list">
        //         {products && products.map((product, index) => {
        //             return (
        //                 <div className="col-6 col-md-3 mb-4" key={index}>
        //                     <ProductItem product={product} />
        //                 </div>
        //             );
        //         })}
        //     </div>
        // </>
    );
}
export default ProductCategory;