import { useEffect, useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";
const CategoryShow = () => {
   const { id } = useParams();
   // const [load, setLoad] = useState(false);
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [slug, setSlug] = useState("");
   const [description, setDescription] = useState('');
   const [parent_id, setParentId] = useState(1);
   const [sort_order, setSortOrder] = useState(1);
   const [status, setStatus] = useState(1);
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
   const handDelete = (id) => {
      (async () => {
         const result = await CategoryService.delete(id);
         alert(result.message);
         navigate("/admin/category/index", { replace: true })
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Chi tiết</h1>
            <div className="row mt-2 align-items-center">
               <div className="col-md-12 text-end">
                  <Link to={"/admin/category/index"} className="btn btn-primary btn-sm">
                     <IoArrowBackSharp className="fa fa-arrow-left" /> Về danh sách
                  </Link>
                  <Link to={"/admin/category/edit/" + id} className="btn btn-success btn-sm">
                     <FaRegEdit className="fa fa-edit" /> Sửa
                  </Link>
                  <Link onClick={() => handDelete(id)} className="btn btn-danger btn-sm">
                     <FaTrashAlt className="fa fa-trash" /> Xóa
                  </Link>
               </div>
            </div>
         </section>
         <section className="content-body my-2">

            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th style={{ width: "180px" }}>Tên trường</th>
                     <th>Giá trị</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th className="text-center">Id</th>
                     <td className="text-center">{id}</td>
                  </tr>

                  <tr>
                     <th className="text-center">Tên danh mục</th>
                     <td className="text-center">{name}</td>
                  </tr>
                  <tr>
                     <th className="text-center">Slug</th>
                     <td className="text-center">{slug}</td>
                  </tr>
                  <tr>
                     <th className="text-center">Chi tiết</th>
                     <td className="text-center">{description}</td>
                  </tr>
                  <tr>
                     <th className="text-center">Cha</th>
                     <td className="text-center">{parent_id}</td>
                  </tr>
                  <tr>
                     <th className="text-center">Thứ tự</th>
                     <td className="text-center">{sort_order}</td>
                  </tr>
                  <tr>
                     <th className="text-center">Trạng thái</th>
                     <td className="text-center">{status}</td>
                  </tr>
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default CategoryShow;