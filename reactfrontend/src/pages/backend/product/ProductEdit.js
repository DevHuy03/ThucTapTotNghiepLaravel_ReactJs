import { IoArrowBackSharp } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import ProductService from "../../../services/ProductService";
import { Link, useNavigate, useParams } from "react-router-dom";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";
import { useEffect, useState } from "react";
const ProductEdit = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const [name, setName] = useState("");
   const [category_id, setCategory_id] = useState(1);
   const [brand_id, setBrand_id] = useState(1);
   const [detail, setDetail] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState(0);
   const [qty, setQty] = useState(1);
   const [status, setStatus] = useState(1);

   const [brands, setBrands] = useState([]);
   useEffect(() => {
      (async () => {
         const result = await BrandService.index();
         setBrands(result.brands);
      })();
   }, []);

   const [categorys, setCategorys] = useState([]);
   useEffect(() => {
      (async () => {
         const result = await CategoryService.index();
         setCategorys(result.categorys);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const result = await ProductService.show(id);
         const product = result.product;
         setName(product.name);
         setCategory_id(product.category_id);
         setBrand_id(product.brand_id);
         setDetail(product.detail);
         setDescription(product.description);
         setPrice(product.price);
         setQty(product.qty);
         setStatus(product.status);
      })();
   }, [id]);


   const handleSubmit = (e) => {
      e.preventDefault();
      const image = document.getElementById("image");
      const product = new FormData();
      product.append("name", name);
      product.append("category_id", category_id);
      product.append("brand_id", brand_id);
      product.append("detail", detail);
      product.append("description", description);
      product.append("price", price);
      product.append("qty", qty);
      product.append("status", status);
      product.append("image", image.files.length === 0 ? "" : image.files[0]);
      (async () => {
         const result = await ProductService.update(product, id);
         alert(result.message);
         navigate("/admin/product/index", { replace: true })
      })();
   };
   return (
      <form onSubmit={handleSubmit}>
         <div className="content">
            <section className="content-header my-2">
               <h1 className="d-inline">Cập nhập sản phẩm</h1>
               <div className="mt-1 text-end">
                  <Link className="btn btn-sm btn-primary" to={"/admin/product/index"}>
                     <IoArrowBackSharp className="fa fa-arrow-left" /> Về danh sách
                  </Link>
               </div>
            </section>
            <section className="content-body my-2">

               <div className="row">
                  <div className="col-md-9">
                     <div className="mb-3">
                        <label><strong>Tên sản phẩm (*)</strong></label>
                        <input
                           type="text"
                           placeholder="Nhập tên sản phẩm"
                           onChange={(e) => setName(e.target.value)}
                           value={name}
                           className="form-control" />
                     </div>
                     {/* <div className="mb-3">
                    <label><strong>Slug (*)</strong></label>
                    <input type="text" placeholder="Slug" name="slug" className="form-control" />
                 </div> */}
                     <div className="mb-3">
                        <label><strong>Chi tiết (*)</strong></label>
                        <textarea
                           onChange={(e) => setDetail(e.target.value)}
                           value={detail}
                           placeholder="Nhập chi tiết sản phẩm"
                           rows="7"
                           className="form-control"></textarea>
                     </div>
                     <div className="mb-3">
                        <label><strong>Mô tả (*)</strong></label>
                        <textarea
                           onChange={(e) => setDescription(e.target.value)}
                           value={description}
                           rows="3"
                           className="form-control"
                           placeholder="Nhập mô tả"></textarea>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Đăng</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select value={status}
                              className="form-control"
                              onChange={(e) => setStatus(e.target.value)}>
                              <option value="1">Xuất bản</option>
                              <option value="2">Chưa xuất bản</option>
                           </select>
                        </div>
                        <div className="box-footer text-end px-2 py-2">
                           <button type="submit" className="btn btn-success btn-sm text-end">
                              <FaSave className="fa fa-save" aria-hidden="true" /> Cập nhật
                           </button>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Danh mục(*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select onChange={(e) => setCategory_id(e.target.value)} value={category_id} className="form-select">
                              
                              {categorys.map(function (cat, index) {
                                 return (<option key={index} value={cat.id}>{cat.name}</option>)
                              })}
                           </select>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Thương hiệu(*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select onChange={(e) => setBrand_id(e.target.value)} value={brand_id} className="form-select">
                              <option >None</option>
                              {brands.map(function (pr, index) {
                                 return (<option key={index} value={pr.id}>{pr.name}</option>)
                              })}
                           </select>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Giá và số lượng</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <div className="mb-3">
                              <label><strong>Giá bán (*)</strong></label>
                              <input
                                 type="number"
                                 min="10000"
                                 onChange={(e) => setPrice(e.target.value)}
                                 value={price}
                                 className="form-control" />
                           </div>
                           {/* <div className="mb-3">
                          <label><strong>Giá khuyến mãi (*)</strong></label>
                          <input 
                           type="number" 
                           min="10000" 
                           name="pricesale"
                           className="form-control" />
                       </div> */}
                           <div className="mb-3">
                              <label><strong>Số lượng (*)</strong></label>
                              <input type="number"
                                 min="1"
                                 onChange={(e) => setQty(e.target.value)}
                                 value={qty}
                                 className="form-control" />
                           </div>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Hình đại diện(*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <input type="file" id="image" className="form-control" />
                        </div>
                     </div>
                  </div>
               </div>

            </section>
         </div>
      </form>
   );
}

export default ProductEdit;