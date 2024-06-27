import { useEffect, useState } from "react";
import BrandService from "../../../services/BrandService";
import { Link } from "react-router-dom";

const ListBrand = () =>{
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await BrandService.index();
                setBrands(result.brands);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])
    return (
        <div className="listbrand mb-5">
        <div className="list-group">
        <li class="list-group-item bg-secondary text-black">Thương hiệu</li>
            {brands.map(function (br, index) {
                return (
                    <Link key={index} className="nav-link text-black list-group-item list-group-item-action" to={"/thuong-hieu/" + br.slug}>{br.name}</Link>
                );
            })}
        </div>
        
    </div>
    );
}
export default ListBrand;