import { useEffect, useState } from "react";
import { FaTrashAlt, FaUndo } from "react-icons/fa";
import CategoryService from "../../../services/CategoryService";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { urlImage } from "../../../Config";
const CategoryTrash = () => {
   const [categorys, setCategory] = useState([]);
   const [reload, setReLoad] = useState(0);
   useEffect(() => {
      (async () => {
         const result = await CategoryService.trash();
         setCategory(result.categorys);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await CategoryService.destroy(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   const handRestore = (id) => {
      (async () => {
         const result = await CategoryService.restore(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thùng rác danh mục</h1>
            <div className="row mt-2 align-items-center">
               <div className="col-md-12 text-end">
                  <Link to={"/admin/category/index"} className="btn btn-primary btn-sm">
                     <IoArrowBackSharp /> Về danh sách
                  </Link>
               </div>
            </div>
         </section>
         <section className="content-body my-2">

            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th className="text-center" style={{ width: "30px" }}>
                        <input type="checkbox" id="checkboxAll" />
                     </th>
                     <th className="text-center" style={{ width: "90px" }}>Hình ảnh</th>
                     <th>Tên danh mục</th>
                     <th>Tên slug</th>
                  </tr>
               </thead>
               <tbody>
                  {categorys && categorys.length > 0 && categorys.map((category, index) => {
                     return (
                        <tr className="datarow" key={index}>
                           <td className="text-center">
                              <input type="checkbox" id="checkId" />
                           </td>
                           <td>
                              <img
                                 className="img-fluid"
                                 src={urlImage + "category/" + category.image}
                                 alt={category.image}
                              />
                           </td>
                           <td>
                              <div className="name">
                                 <Link href="category_index.html">
                                    {category.name}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <Link href="#" className="text-primary mx-1">
                                    <FaUndo onClick={() => handRestore(category.id)} className="fa fa-undo" />
                                 </Link>
                                 <Link href="#" className="text-danger mx-1">
                                    <FaTrashAlt onClick={() => handDelete(category.id)} className="fa fa-trash" />
                                 </Link>
                              </div>
                           </td>
                           <td>{category.slug}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default CategoryTrash;