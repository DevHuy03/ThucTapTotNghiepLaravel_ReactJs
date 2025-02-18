import { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService";
import { FaEye, FaRegEdit, FaSave, FaToggleOn, FaToggleOff, FaTrash } from "react-icons/fa";
import { urlImage } from "../../../Config";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from "react-router-dom";
const CategoryIndex = () => {

   const [categorys, setCategorys] = useState([]);
   const [load, setLoad] = useState(false);
   const [reload, setReload] = useState(0);
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [parent_id, setParentId] = useState(0);
   const [sort_order, setSortOrder] = useState(1);
   const [status, setStatus] = useState(1);

   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await CategoryService.index();
         setCategorys(result.categorys);
         setLoad(true);
      })();
   }, [reload]);

   //ham them 
   const handleSubmit = (e) => {
      e.preventDefault();
      const image = document.getElementById("image");
      const category = new FormData();
      category.append("name", name);
      category.append("description", description);
      category.append("parent_id", parent_id);
      category.append("sort_order", sort_order);
      category.append("status", status);
      category.append("image", image.files.length === 0 ? "" : image.files[0]);
      (async () => {
         const result = await CategoryService.store(category);
         alert(result.message);
         setReload(result.category.id);
      })();

   };

   const handDelete = (id) => {
      (async () => {
         const result = await CategoryService.delete(id);
         alert(result.message);
         setReload(Date.now);
      })();
   };

   const handStatus = (id) => {
      (async () => {
         const result = await CategoryService.status(id);
         alert(result.message);
         setReload(Date.now);
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Danh mục</h1>
            <hr style={{ border: "none" }} />
         </section>
         <section className="content-body my-2">

            <div className="row">
               <div className="col-md-4">
                  <form onSubmit={handleSubmit}>
                     <div className="mb-3">
                        <label>
                           <strong>Tên danh mục (*)</strong>
                        </label>
                        <input type="text"
                           onChange={(e) => setName(e.target.value)}
                           value={name}
                           placeholder="Nhập tên danh mục"
                           className="form-control" required />
                     </div>
                     <div className="mb-3">
                        <label><strong>Mô tả</strong></label>
                        <textarea
                           onChange={(e) => setDescription(e.target.value)}
                           value={description}
                           placeholder="Mô tả" rows="4" className="form-control"></textarea>
                     </div>
                     <div className="mb-3">
                        <label><strong>Danh mục cha</strong></label>
                        <select
                           onChange={(e) => setParentId(e.target.value)}
                           value={parent_id} className="form-select">
                           {categorys && categorys.map((category, index) => {
                              return (
                                 <option key={index} value={category.id}>{category.name}</option>
                              );
                           })}
                        </select>
                     </div>
                     <div className="mb-3">
                        <label><strong>Sắp xếp</strong></label>
                        <select
                           onChange={(e) => setSortOrder(e.target.value)}
                           value={sort_order}
                           className="form-select">
                           {categorys && categorys.map((category, index) => {
                              return (
                                 <option key={index} value={category.id}>Sau :{category.name}</option>
                              );
                           })}
                        </select>
                     </div>

                     <div className="mb-3">
                        <label><strong>Hình đại diện</strong></label>
                        <input type="file" id="image" className="form-control" />
                     </div>
                     <div className="mb-3">
                        <label><strong>Trạng thái</strong></label>
                        <select onChange={(e) => setStatus(e.target.value)}
                           value={status}
                           className="form-select">
                           <option value="1">Xuất bản</option>
                           <option value="2">Chưa xuất bản</option>
                        </select>
                     </div>
                     <div className="mb-3 text-end">
                        <button type="submit" className="btn btn-success" name="THEM">
                           <FaSave className="fa fa-save" /> Lưu[Thêm]
                        </button>
                     </div>
                  </form>
               </div>
               <div className="col-md-8">
                  <div className="row mt-3 align-items-center">
                     <div className="col-12">
                        <ul className="manager">
                           <li>
                              <Link to="category_index.html">Tất cả {categorys.length}</Link>
                           </li>
                           <li>
                              <Link to="#">Xuất bản {categorys.length}</Link>
                           </li>
                           <li>
                              <Link to={"/admin/category/trash"}>Rác (12)</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  {(load === false) ? <LoadingSpinner /> : ""}
                  <table className="table table-bordered">
                     <thead>
                        <tr>
                           <th className="text-center" style={{ width: "30px" }}>
                              <input type="checkbox" id="checkboxAll" />
                           </th>
                           <th className="text-center" style={{ width: "90px" }}>Hình ảnh</th>
                           <th>Tên danh mục</th>
                           <th>Tên slug</th>
                           <th className="text-center" style={{ width: "30px" }}>ID</th>
                        </tr>
                     </thead>
                     <tbody>
                        {categorys && categorys.map((category, index) => {
                           return (
                              <tr className="datarow" key={index}>
                                 <td className="text-center">
                                    <input type="checkbox" id="checkId" />
                                 </td>
                                 <td>
                                    <img className="img-fluid" src={urlImage + "category/" + category.image} alt={category.image} />
                                 </td>
                                 <td>
                                    <div className="name">
                                       <Link href="category_index.html">
                                          {category.name}
                                       </Link>
                                    </div>
                                    <div className="function_style">
                                       <button onClick={() => handStatus(category.id)}
                                          className={category.status === 1
                                             ? "border-0 px-1 text-success"
                                             : "border-0 px-1 text-danger"
                                          }
                                       >
                                          {category.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                                       </button>
                                       <Link to={"/admin/category/edit/" + category.id} className="px-1 text-primary">
                                          <FaRegEdit className="fa fa-edit" />
                                       </Link>
                                       <Link to={"/admin/category/show/" + category.id} className="px-1 text-info">
                                          <FaEye className="fa fa-eye" />
                                       </Link>
                                       <button
                                          onClick={() => handDelete(category.id)}
                                          className="btn btn-sm btn-none text-danger">
                                          <FaTrash />
                                       </button>
                                    </div>
                                 </td>
                                 <td>{category.slug}</td>
                                 <td className="text-center">{category.id}</td>
                              </tr>

                           );
                        })}

                     </tbody>
                  </table>
               </div>
            </div>

         </section>
      </div>

   );
}

export default CategoryIndex;