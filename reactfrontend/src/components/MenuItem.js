import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuService from "../services/MenuService";

const MenuItem = (props) => {
    const rowmenu = props.menu;
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await MenuService.getByParentId('mainmenu', rowmenu.id);
            setMenus(result.menus);
        })();
    }, [rowmenu.id]);

    if (menus == null) {
        return (
            <li className="nav-item">
                <Link className="nav-link text-black" to={rowmenu.link}>{rowmenu.name}</Link>
            </li>
        );
    }
    else {
        return (
            <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle text-black"
                    to={rowmenu.link}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {rowmenu.name}
                </Link>
                <ul className="dropdown-menu">
                    {menus && menus.map((menu1, index) => {
                        return (
                            <li key={index}>
                                <Link className="dropdown-item text-main" to={menu1.link}>
                                    {menu1.name}
                                </Link>
                            </li>
                        );
                    })}
                    
                </ul>
            </li>
        );
    }
}
export default MenuItem;