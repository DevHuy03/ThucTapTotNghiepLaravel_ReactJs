import { useEffect, useState } from "react";
import { FaTrashAlt, FaUndo } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import BrandService from "../../../services/BrandService";
import { urlImage } from "../../../Config";
import { Link } from "react-router-dom";
const BrandTrash = () => {
   const [brands, setBrands] = useState([]);
   const [reload, setReLoad] = useState(0);
   useEffect(() => {
      (async () => {
         const result = await BrandService.trash();
         setBrands(result.brands);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await BrandService.destroy(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   const handRestore = (id) => {
      (async () => {
         const result = await BrandService.restore(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thùng rác thương hiệu</h1>
            <div className="row mt-2 align-items-center">
               <div className="col-md-12 text-end">
                  <Link to={"/admin/brand/index"} className="btn btn-primary btn-sm">
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
                     <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                     <th>Tên thương hiệu</th>
                     <th>Tên slug</th>
                     <th className="text-center" style={{ width: "30px" }}>ID</th>
                  </tr>
               </thead>
               <tbody>
                  {brands && brands.length > 0 && brands.map((brand, index) => {
                     return (
                        <tr className="datarow">
                           <td className="text-center">
                              <input type="checkbox" id="checkId" />
                           </td>
                           <td>
                              <img
                                 className="img-fluid"
                                 src={urlImage + "brand/" + brand.image}
                                 alt={brand.image}
                              />
                           </td>
                           <td>
                              <div className="name">
                                 <Link href="brand_index.html">
                                    {brand.name}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <Link href="#" className="text-primary mx-1">
                                    <FaUndo onClick={() => handRestore(brand.id)} className="fa fa-undo" />
                                 </Link>
                                 <Link href="#" className="text-danger mx-1">
                                    <FaTrashAlt onClick={() => handDelete(brand.id)} className="fa fa-trash" />
                                 </Link>
                              </div>
                           </td>
                           <td>{brand.slug}</td>
                           <td className="text-center">{brand.id}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default BrandTrash;