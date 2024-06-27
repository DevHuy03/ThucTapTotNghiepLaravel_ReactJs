import { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService";
import { Link } from "react-router-dom";

const ListCategory = () => 
{
    const [categorys, setCategory] = useState([]);
    useEffect( () => {
        (async () => {
            try {
                const result = await CategoryService.getCategoryByParentId(0);
                setCategory(result.categorys);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [categorys])
    return(
        <div className="listcategory mb-5">
            <div className="list-group">
            <li class="list-group-item bg-secondary text-black" >Danh mục sản phẩm</li>
                {categorys && categorys.map(function (cat, index) {
                    return (
                        <Link key={index} className="nav-link text-black list-group-item list-group-item-action" to={"/danh-muc-san-pham/" + cat.slug}>{cat.name}</Link>
                    );
                })}
            </div>
        </div>
    );
}
export default ListCategory;