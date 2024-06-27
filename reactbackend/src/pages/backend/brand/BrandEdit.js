import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import BrandService from "../../../services/BrandService";

const BrandEdit = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   // const [load, setLoad] = useState(false);
   const [name, setName] = useState("");
   const [slug, setSlug] = useState("");
   const [description, setDescription] = useState("");
   const [sort_order, setSortOrder] = useState(1);
   const [status, setStatus] = useState(1);

   const [brands, setBrands] = useState([]);
   useEffect(() => {
      (async () => {
         const result = await BrandService.index();
         setBrands(result.brands);
      })();
   }, []);


   useEffect(() => {
      (async () => {
         const result = await BrandService.show(id);
         const brand = result.brand;
         setName(brand.name);
         setSlug(brand.slug);
         setDescription(brand.description);
         setSortOrder(brand.sort_order);
         setStatus(brand.status);
      })();
   }, [id]);
   const handleSubmit = (e) => {
      e.preventDefault();
      const image = document.getElementById("image");
      const brand = new FormData();
      brand.append("name", name);
      brand.append("slug", slug);
      brand.append("description", description);
      brand.append("sort_order", sort_order);
      brand.append("status", status);
      brand.append("image", image.files.length === 0 ? "" : image.files[0]);
      (async () => {
         const result = await BrandService.update(brand, id);
         alert(result.message);
         navigate("/admin/brand/index", { replace: true })
      })();
   };
   return (
      <form onSubmit={handleSubmit}>
         <div className="content">
            <section className="content-header my-2">
               <h1 className="d-inline">Cập nhật thương hiệu</h1>
               <div className="text-end">
                  <Link to={"/admin/brand/index"} className="btn btn-sm btn-success">
                     <i className="fa fa-arrow-left"></i> Về danh sách
                  </Link>
               </div>
            </section>
            <section className="content-body my-2">

               <div className="row">
                  <div className="col-md-9">
                     <div className="mb-3">
                        <label><strong>Tên thương hiệu (*)</strong></label>
                        <input type="text" onChange={(e) => setName(e.target.value)}
                           value={name} className="form-control" required />
                     </div>
                     <div className="mb-3">
                        <label><strong>Slug</strong></label>
                        <input type="text" onChange={(e) => setSlug(e.target.value)}
                           value={slug} className="form-control" />
                     </div>
                     <div className="mb-3">
                        <label><strong>Mô tả</strong></label>
                        <textarea onChange={(e) => setDescription(e.target.value)}
                           value={description}
                           rows="4" className="form-control" placeholder="Mô tả"></textarea>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Đăng</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <p>Chọn trạng thái đăng</p>
                           <select value={status}
                              className="form-control"
                              onChange={(e) => setStatus(e.target.value)}
                           >
                              <option value="1">Xuất bản</option>
                              <option value="2">Chưa xuất bản</option>
                           </select>
                        </div>
                        <div className="box-footer text-end px-2 py-3">
                           <button type="submit" className="btn btn-success btn-sm text-end">
                              <i className="fa fa-save" aria-hidden="true"></i> Đăng
                           </button>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Hình đại diện</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <input type="file" id="image" className="form-control" />
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Thứ tự</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select onChange={(e) => setSortOrder(e.target.value)}
                              value={sort_order} className="form-control">
                              {brands && brands.map((brand, index) => {
                                 return (
                                    <option key={index} value={brand.id}>Sau: {brand.name}</option>
                                 );
                              })}
                           </select>
                        </div>
                     </div>
                  </div>
               </div>

            </section>
         </div>

      </form>
   );
}

export default BrandEdit;