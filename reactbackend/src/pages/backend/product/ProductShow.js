import { useEffect, useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductService from "../../../services/ProductService";
const ProductShow = () => {
   const { id } = useParams();
   // const [load, setLoad] = useState(false);
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [category_id, setCategory_id] = useState(1);
   const [brand_id, setBrand_id] = useState(1);
   const [detail, setDetail] = useState("");
   const [description, setDescription] = useState("");
   const [price , setPrice] = useState(0);
   const [qty , setQty] = useState(1);
   const [status, setStatus] = useState(1);
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
   const handDelete = (id) => {
      (async () => {
         const result = await ProductService.delete(id);
         alert(result.message);
         navigate("/admin/product/index", { replace: true })
      })();
   };

    return ( 
        <div className="content">
        <section className="content-header my-2">
           <h1 className="d-inline">Chi tiết</h1>
           <div className="row mt-2 align-items-center">
              <div className="col-md-12 text-end">
                 <Link href="product_index.html" className="btn btn-primary btn-sm">
                    <IoArrowBackSharp className="fa fa-arrow-left"/> Về danh sách
                 </Link>
                 <Link to={"/admin/product/edit/" + id} className="btn btn-success btn-sm">
                    <FaRegEdit className="fa fa-edit"/> Sửa
                 </Link>
                 <Link onClick={() => handDelete(id)} className="btn btn-danger btn-sm">
                    <FaTrashAlt className="fa fa-trash"/> Xóa
                 </Link>
              </div>
           </div>
        </section>
        <section className="content-body my-2">

           <table className="table table-bordered">
              <thead>
                 <tr>
                    <th style={{width:"180px"}}>Tên trường</th>
                    <th>Giá trị</th>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                    <td>Id</td>
                    <td>{id}</td>
                 </tr>
                 <tr>
                    <td>Tên</td>
                    <td>{name}</td>
                 </tr>
                 <tr>
                    <td>Danh mục</td>
                    <td>{category_id}</td>
                 </tr>
                 <tr>
                    <td>Thương hiệu</td>
                    <td>{brand_id}</td>
                 </tr>
                 <tr>
                    <td>Chi tiết</td>
                    <td>{detail}</td>
                 </tr>
                 <tr>
                    <td>Mô tả</td>
                    <td>{description}</td>
                 </tr>
                 <tr>
                    <td>Giá</td>
                    <td>{price}</td>
                 </tr>
                 <tr>
                    <td>Số lượng</td>
                    <td>{qty}</td>
                 </tr>

              </tbody>
           </table>

        </section>
     </div>

     );
}
 
export default ProductShow;