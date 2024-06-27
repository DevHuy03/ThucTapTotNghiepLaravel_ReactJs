import { FaTrashAlt, FaUndo } from "react-icons/fa";
import PageService from "../../../services/PageService";
import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from "react-router-dom";
import { urlImage } from "../../../Config";
const PageTrash = () => {
   const [pages, setPages] = useState([]);
   const [load, setLoad] = useState(false);
   const [reload, setReLoad] = useState(0);

   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await PageService.trash();
         setPages(result.pages);
         setLoad(true);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await PageService.destroy(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   const handRestore = (id) => {
      (async () => {
         const result = await PageService.restore(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };

   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thùng rác trang đơn</h1>
            <div className="text-end">
               <Link to={"/admin/page/index"} className="btn btn-sm btn-success">
                  <IoArrowBackSharp className="fa fa-arrow-left" /> Về danh sách
               </Link>
            </div>
         </section>
         <section className="content-body my-2">
            {(load === false) ? <LoadingSpinner /> : ""}
            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th className="text-center" style={{ width: "30px" }}>
                        <input type="checkbox" id="checkboxAll" />
                     </th>
                     <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                     <th>Tên trang đơn</th>
                     <th>slug</th>
                     <th className="text-center" style={{ width: "30px" }}>ID</th>
                  </tr>
               </thead>
               <tbody>
                  {pages && pages.length > 0 && pages.map((page, index) => {
                     return (
                        <tr className="datarow">
                           <td>
                              <input type="checkbox" id="checkId" />
                           </td>
                           <td>
                              <img
                                 className="img-fluid"
                                 src={urlImage + "page/" + page.image}
                                 alt={page.image}
                              />
                           </td>
                           <td>
                              <div className="name">
                                 <Link to="page_index.html">
                                    {page.title}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <button onClick={() => handRestore(page.id)} className="border-0 fa fa-undo text-primary mx-1" >
                                    <FaUndo />
                                 </button>

                                 <button onClick={() => handDelete(page.id)} className="border-0 fa fa-trash text-danger mx-1" >
                                    <FaTrashAlt />
                                 </button>
                              </div>
                           </td>
                           <td>{page.slug}</td>
                           <td class="text-center">{page.id}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default PageTrash;