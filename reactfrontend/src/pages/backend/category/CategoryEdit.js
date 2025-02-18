import { IoArrowBackSharp } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService";
const CategoryEdit = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const [name, setName] = useState('');
   const [slug, setSlug] = useState("");
   const [description, setDescription] = useState('');
   const [parent_id, setParentId] = useState(0);
   const [sort_order, setSortOrder] = useState(1);
   const [status, setStatus] = useState(1);
   const [categorys, setCategorys] = useState([]);
   useEffect(() => {
      (async () => {
         const result = await CategoryService.index();
         setCategorys(result.categorys);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const result = await CategoryService.show(id);
         const category = result.category;
         setName(category.name);
         setSlug(category.slug);
         setDescription(category.description);
         setParentId(category.parent_id);
         setSortOrder(category.sort_order);
         setStatus(category.status);
      })();
   }, [id]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const image = document.getElementById("image");
      const category = new FormData();
      category.append("name", name);
      category.append("slug", slug);
      category.append("description", description);
      category.append("parent_id", parent_id);
      category.append("sort_order", sort_order);
      category.append("status", status);
      category.append("image", image.files.length === 0 ? "" : image.files[0]);
      (async () => {
         const result = await CategoryService.update(category, id);
         alert(result.message);
         navigate("/admin/category/index", { replace: true })
      })();
   };
   return (
      <form onSubmit={handleSubmit}>
         <div className="content">
            <section className="content-header my-2">
               <h1 className="d-inline">Cập nhật danh mục</h1>
               <div className="text-end">
                  <Link to={"/admin/category/index"} className="btn btn-sm btn-success">
                     <IoArrowBackSharp className="fa fa-arrow-left" /> Về danh sách
                  </Link>

               </div>
            </section>
            <section className="content-body my-2">

               <div className="row">
                  <div className="col-md-9">
                     <div className="mb-3">
                        <label><strong>Tên danh mục (*)</strong></label>
                        <input type="text" onChange={(e) => setName(e.target.value)}
                           value={name}  required />
                     </div>
                     <div className="mb-3">
                        <label><strong>Slug</strong></label>
                        <input type="text" onChange={(e) => setSlug(e.target.value)}
                           value={slug} className="form-control" />
                     </div>
                     <div className="mb-3">
                        <label><strong>Mô tả</strong></label>
                        <textarea onChange={(e) => setDescription(e.target.value)}
                           value={description} rows="7" className="form-control"
                           placeholder="Nhập mô tả"></textarea>
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
                                    onChange={(e) => setStatus(e.target.value)}>
                              <option value="1">Xuất bản</option>
                              <option value="2">Chưa xuất bản</option>
                           </select>
                        </div>
                        <div className="box-footer text-end px-2 py-3">
                           <button type="submit" className="btn btn-success btn-sm text-end">
                              <FaSave className="fa fa-save" aria-hidden="true" /> Cập nhật
                           </button>
                        </div>
                     </div>
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Danh mục cha (*)</strong>
                        </div>
                        <div className="box-body p-2">
                           <select  onChange={(e) => setParentId(e.target.value)}
                           value={parent_id} className="form-control">
                           {categorys && categorys.map((category, index) => {
                              return (
                                 <option key={index} value={category.id}>{category.name}</option>
                              );
                           })}
                           </select>
                        </div>
                     </div>
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Thứ tự</strong>
                        </div>
                        <div className="box-body p-2">
                           <select onChange={(e) => setSortOrder(e.target.value)}
                           value={sort_order} className="form-control">
                           {categorys && categorys.map((category, index) => {
                              return (
                                 <option key={index} value={category.id}>Sau :{category.name}</option>
                              );
                           })}
                           </select>
                        </div>
                     </div>
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Hình (*)</strong>
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

export default CategoryEdit;