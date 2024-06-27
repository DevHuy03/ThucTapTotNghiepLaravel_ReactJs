import { useEffect, useState } from "react";
import { FaEye, FaPlus, FaRegEdit, FaToggleOn, FaTrashAlt, FaToggleOff, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { urlImage } from "../../../Config";
import LoadingSpinner from "../../../LoadingSpinner";
import ProductService from "../../../services/ProductService";
const ProductIndex = () => {
   const [products, setProducts] = useState([]);
   const [load, setLoad] = useState(true);
   const [reload, setReLoad] = useState(0);
   // const [name, setName] = useState("");
   // const [description, setDescription] = useState("");
   // const [sort_order, setSortOrder] = useState(1);
   // const [status, setStatus] = useState(1);
   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await ProductService.index();
         setProducts(result.products);
         setLoad(true);
      })();
   }, [reload]);
   const handStatus = (id) => {
      (async () => {
         const result = await ProductService.status(id);
         alert(result.message);
         setReLoad(Date.now);
      })();
   };
   const handDelete = (id) => {
      (async () => {
        const result = await ProductService.delete(id);
        alert(result.message);
        setReLoad(Date.now);
      })();
    };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Sản phẩm</h1>
            <div className="col-md-12 text-end">
               <Link to="/admin/product/create" className="btn btn-sm btn-success" ><FaPlus />Thêm</Link>
               <Link className="btn btn-danger btn-sm" to={"/admin/product/trash"}>
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
                     <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                     <th>Tên sản phẩm</th>
                     <th>Tên danh mục</th>
                     <th>Tên thương hiệu</th>
                     <th>ID</th>
                  </tr>
               </thead>
               <tbody>
                  {products && products.length > 0 && products.map((product, index) => {
                     return (
                        <tr className="datarow">
                           <td>
                              <input type="checkbox" id="checkId" />
                           </td>
                           <td>
                              <img
                                 className="img-fluid"
                                 src={urlImage + "product/" + product.image}
                                 alt={product.image}
                              />
                           </td>
                           <td>
                              <div className="name">
                                 <Link href="product_edit.html">
                                    {product.name}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <button onClick={() => handStatus(product.id)}
                                    className={product.status === 1
                                       ? "border-0 px-1 text-success"
                                       : "border-0 px-1 text-danger"
                                    }
                                 >
                                    {product.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                                 </button>
                                 <Link to={"/admin/product/edit/" + product.id} className="px-1 text-primary">
                                    <FaRegEdit className="fa fa-edit" />
                                 </Link>
                                 <Link to={"/admin/product/show/" + product.id} className="px-1 text-info">
                                    <FaEye className="fa fa-eye" />
                                 </Link>
                                 <button
                                    onClick={() => handDelete(product.id)}
                                    className="btn btn-sm btn-none text-danger">
                                    <FaTrashAlt />
                                 </button>
                              </div>
                           </td>
                           <td>{product.catname}</td>
                           <td>{product.brname}</td>
                           <td className="text-center" style={{ width: "30px" }}>{product.id}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default ProductIndex;