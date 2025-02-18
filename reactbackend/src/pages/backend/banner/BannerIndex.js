import BannerService from "../../../services/BannerService";
import { useEffect, useState } from "react";
import { FaEye, FaPlus, FaRegEdit, FaToggleOn, FaTrashAlt, FaToggleOff, FaTrash } from "react-icons/fa";
import { urlImage } from "../../../Config";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../LoadingSpinner";
const BannerIndex = () => {
   const [banners, setBanners] = useState([]);
   const [load, setLoad] = useState(false);
   const [reload, setReLoad] = useState(0);
   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await BannerService.index();
         setBanners(result.banners);
         setLoad(true);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await BannerService.delete(id);
         alert(result.message);
         setReLoad(Date.now);
      })();
   };

   const handStatus = (id) => {
      (async () => {
         const result = await BannerService.status(id);
         alert(result.message);
         setReLoad(Date.now);
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Banner</h1>
            <div className="col-md-12 text-end">
               <Link to="/admin/banner/create" className="btn btn-sm btn-success" ><FaPlus />Thêm</Link>
               <Link className="btn btn-danger btn-sm" to={"/admin/banner/trash"}>
                     <FaTrash /> Thùng rác
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
                     <th className="text-center" style={{ width: "90px" }}>Hình ảnh</th>
                     <th>Tên banner</th>
                     <th>Vị trí</th>
                     <th>Liên kết</th>
                     <th className="text-center" style={{ width: "30px" }}>ID</th>
                  </tr>
               </thead>
               <tbody>
                  {banners && banners.map((banner, index) => {
                     return (
                        <tr className="datarow" key={index}>
                           <td className="text-center">
                              <input type="checkbox" />
                           </td>
                           <td>
                              <img className="img-fluid" src={urlImage + "banner/" + banner.image} alt={banner.image} />
                           </td>
                           <td>
                              <div className="name">
                                 <Link to="banner_edit.html">
                                    {banner.name}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <button onClick={() => handStatus(banner.id)}
                                    className={banner.status === 1
                                       ? "border-0 px-1 text-success"
                                       : "border-0 px-1 text-danger"
                                    }
                                 >
                                    {banner.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                                 </button>
                                 <Link to={"/admin/banner/edit/" + banner.id} className="text-primary mx-1">
                                    <FaRegEdit className="fa fa-edit" />
                                 </Link>
                                 <Link to={"/admin/banner/show/" + banner.id} className="text-info mx-1">
                                    <FaEye className="fa fa-eye" />
                                 </Link>
                                 <button 
                                    onClick={() => handDelete(banner.id)} 
                                    className="btn btn-sm btn-none text-danger">
                                    <FaTrashAlt />
                                 </button>
                              </div>
                           </td>
                           <td>{banner.position}</td>
                           <td>{banner.link}</td>
                           <td className="text-center">{banner.id}</td>
                        </tr>
                     );
                  })}

               </tbody>
            </table>

         </section>
      </div>

   );
}

export default BannerIndex;