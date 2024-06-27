import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash, FaTrashAlt } from "react-icons/fa";
import PageService from "../../../services/PageService";
import { useEffect, useState } from "react";
import { urlImage } from "../../../Config";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../LoadingSpinner";
const PageIndex = () => {
 
   const [pages, setPages] = useState([]);
   const [load, setLoad] = useState(false);
   const [reload, setReLoad] = useState(0);
   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await PageService.index();
         setPages(result.pages);
         setLoad(true);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await PageService.delete(id);
         alert(result.message);
         setReLoad(Date.now);
      })();
   };

   const handStatus = (id) => {
      (async () => {
         const result = await PageService.status(id);
         alert(result.message);
         setReLoad(Date.now);
      })();
   };
    return ( 
        <div className="content">
        <section className="content-header my-2">
           <h1 className="d-inline">Quản lý trang đơn</h1>
           <Link to={"/admin/page/create"} className="btn-add">Thêm mới</Link>
           <div className="col-md-12 text-end">
               <Link className="btn btn-danger btn-sm" to={"/admin/page/trash"}>
                     <FaTrash /> Thùng rác
               </Link>
            </div>
        </section>
        <section className="content-body my-2">
        {(load === false) ? <LoadingSpinner /> : ""}
           <table className="table table-bordered">
              <thead>
                 <tr>
                    <th className="text-center" style={{width:"30px"}}>
                       <input type="checkbox" id="checkboxAll" />
                    </th>
                    <th className="text-center" style={{width:"130px"}}>Hình ảnh</th>
                    <th>Tiêu đề trang đơn</th>
                    <th>Chi tết trang đơn</th>
                    <th className="text-center" style={{width:"30px"}}>ID</th>
                 </tr>
              </thead>
              <tbody>
              {pages && pages.map((page, index) => {
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
                          <Link to="page_edit.html">
                             {page.title}
                          </Link>
                       </div>
                       <div className="function_style">
                       <button onClick={() => handStatus(page.id)}
                            className={page.status === 1
                              ? "border-0 px-1 text-success"
                              : "border-0 px-1 text-danger"
                            }
                          >
                            {page.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                          </button>
                          <Link to={"/admin/page/edit/"+ page.id} className="text-primary mx-1">
                             <FaRegEdit className="fa fa-edit"/>
                          </Link>
                          <Link to={"/admin/page/show/"+ page.id} className="text-info mx-1">
                             <FaEye className="fa fa-eye"/>
                          </Link>
                          <button 
                            onClick={() => handDelete(page.id)} 
                            className="btn btn-sm btn-none text-danger">
                            <FaTrashAlt />
                          </button>
                       </div>
                    </td>
                    <td>{page.detail}</td>
                    <td className="text-center">{page.id}</td>
                 </tr>
                  );
               })}
              </tbody>
           </table>

        </section>
     </div>

     );
}
 
export default PageIndex;