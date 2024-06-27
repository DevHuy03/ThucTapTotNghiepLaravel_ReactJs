// import LastPost from "./LastPost";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import ProductNew from "./ProductNew";
import ProductSale from "./ProductSale";
import ProductHotBuy from "./ProductHotBuy";
import CategoryService from "../../../services/CategoryService";
import { useEffect, useState } from "react";

const Home = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            const result = await CategoryService.getCategoryByParentId(0);
            setCategorys(result.categorys);
        })();
    }, []);
    return (
        <>
            
            <section className="hdl-maincontent">
            <Slider />
                <div className="container">
                    <ProductNew />
                    <ProductSale />
                    <ProductHotBuy />
                    {categorys.map(function (category, index) {
                        return <ProductCategory key={index} category={category} />
                    })}
                </div>
            </section>
            {/* <LastPost /> */}
            
        </>
    );
}
export default Home;