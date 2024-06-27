import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import ProductItem2 from "../../components/ProductItem2";

function Search() {
    const { key } = useParams();
    const [products, setProducts] = useState([]);
    document.title = "Kết quả tìm kiếm";
    useEffect(function () {
        (async function () {
            const resultp = await ProductService.getProductSearch(key);
            setProducts(resultp.products)
        })();
    }, [key]);
    if (products != null) {
        return (
            <section className="maincontent">
                <div className="container my-4">
                    <div className="row">
                        <h3 className="text-primary">Kết quả bạn tìm </h3>


                        <div className="row product-list">
                            {products && products.map((product, index) => {

                                return (
                                        <ProductItem2 key={index} product={product} />

                                );
                            })}

                        </div>
                    </div>
                </div>
            </section>
        );
    }
    else {
        return (
            <section className="maincontent">
                <div className="container my-4">
                    <div className="row">
                        <h3 className="text-primary"><b>Kết quả bạn tìm</b></h3>
                        <div className="row">
                            Không tìm thấy {key}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Search;