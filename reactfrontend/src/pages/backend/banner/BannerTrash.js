import { FaTrashAlt, FaUndo } from "react-icons/fa";
import BannerService from "../../../services/BannerService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { urlImage } from "../../../Config";

const BannerTrash = () => {
   const [banners, setBanners] = useState([]);
   const [reload, setReLoad] = useState(0);
   useEffect(() => {
      (async () => {
         const result = await BannerService.trash();
         setBanners(result.banners);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await BannerService.destroy(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   const handRestore = (id) => {
      (async () => {
         const result = await BannerService.restore(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };

   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thùng rác Banner</h1>
            <div className="row mt-2 align-items-center">
               <div className="col-md-12 text-end">
                  <Link to={"/admin/banner/index"} className="btn btn-primary btn-sm">
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
                     <th>Tên banner</th>
                     <th>Liên kết</th>
                     <th>Vị trí</th>
                     <th className="text-center" style={{ width: "30px" }}>ID</th>
                  </tr>
               </thead>
               <tbody>
                  {banners && banners.length > 0 && banners.map((banner, index) => {
                     return (
                        <tr className="datarow">
                           <td className="text-center">
                              <input type="checkbox" />
                           </td>
                           <td>
                              <img
                                 className="img-fluid"
                                 src={urlImage + "banner/" + banner.image}
                                 alt={banner.image}
                              />
                           </td>
                           <td>
                              <div className="name">
                                 <Link to="banner_edit.html">
                                    {banner.name}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <Link href="#" className="text-primary mx-1">
                                    <FaUndo onClick={() => handRestore(banner.id)} className="fa fa-undo" />
                                 </Link>
                                 <Link href="#" className="text-danger mx-1">
                                    <FaTrashAlt onClick={() => handDelete(banner.id)} className="fa fa-trash" />
                                 </Link>
                              </div>
                           </td>
                           <td>{banner.link}</td>
                           <td>{banner.position}</td>
                           <td className="text-center">1</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default BannerTrash;