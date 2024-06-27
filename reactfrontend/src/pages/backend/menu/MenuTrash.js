import { FaTrashAlt, FaUndo } from "react-icons/fa";
import MenuService from "../../../services/MenuService";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
const MenuTrash = () => {

   const [menus, setMenus] = useState([]);
   const [load, setLoad] = useState(false);

   const [reload, setReLoad] = useState(0);
   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await MenuService.trash();
         setMenus(result.menus);
         setLoad(true);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await MenuService.destroy(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   const handRestore = (id) => {
      (async () => {
         const result = await MenuService.restore(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thùng rác menu</h1>
         </section>
         <div className="col-md-12 text-end">
            <Link to={"/admin/menu/index"} className="btn btn-primary btn-sm">
               <IoArrowBackSharp /> Về danh sách
            </Link>
         </div>
         <section className="content-body my-2">
            {(load === false) ? <LoadingSpinner /> : ""}
            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th className="text-center" style={{ width: "30px" }}>
                        <input type="checkbox" id="checkboxAll" />
                     </th>
                     <th>Tên menu</th>
                     <th>Liên kết</th>
                     <th>Vị trí</th>
                  </tr>
               </thead>
               <tbody>
                  {menus && menus.map((mn, index) => {
                     return (
                        <tr className="datarow" key={index}>
                           <td>
                              <input type="checkbox" id="checkId" />
                           </td>
                           <td>
                              <div className="name">
                                 <Link to="menu_show.html">
                                    {mn.name}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <Link to="#" className="text-primary mx-1">
                                    <FaUndo onClick={() => handRestore(mn.id)} className="fa fa-undo" />
                                 </Link>
                                 <Link to="#" className="text-danger mx-1">
                                    <FaTrashAlt onClick={() => handDelete(mn.id)} className="fa fa-trash" />
                                 </Link>
                              </div>
                           </td>
                           <td>{mn.link}</td>
                           <td>{mn.position}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default MenuTrash;