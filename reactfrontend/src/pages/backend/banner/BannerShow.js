import { useEffect, useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import BannerService from "../../../services/BannerService";
const BannerShow = () => {
   const { id } = useParams();
   // const [load, setLoad] = useState(false);
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [link, setLink] = useState("");
   const [position, setPosition] = useState("");
   const [description, setDescription] = useState(1);
   const [status, setStatus] = useState(1);
   
   useEffect(() => {
      (async () => {
         const result = await BannerService.show(id);
         const banner = result.banner;
         setName(banner.name);
         setLink(banner.link);
         setPosition(banner.position);
         setDescription(banner.description);
         setStatus(banner.status);
      })();
   }, [id]);

   const handDelete = (id) => {
      (async () => {
         const result = await BannerService.delete(id);
         alert(result.message);
         navigate("/admin/banner/index", { replace: true })
      })();
   };
    return ( 
        <div className="content">
        <section className="content-header my-2">
           <h1 className="d-inline">Chi tiết</h1>
           <div className="row mt-2 align-items-center">
              <div className="col-md-12 text-end">
                 <Link to={"/admin/banner/index"}className="btn btn-primary btn-sm">
                    <IoArrowBackSharp className="fa fa-arrow-left"/> Về danh sách
                 </Link>
                 <Link to={"/admin/banner/edit/" + id} className="btn btn-success btn-sm">
                    <FaRegEdit className="fa fa-edit"/> Sửa
                 </Link>
                 <button className="btn btn-danger btn-sm" onClick={() => handDelete(id)}>
                     <FaTrash /> Xóa
                  </button>
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
                    <td>Name</td>
                    <td>{name}</td>
                 </tr>
                 <tr>
                    <td>Link</td>
                    <td>{link}</td>
                 </tr>
                 <tr>
                    <td>Vị trí</td>
                    <td>{position}</td>
                 </tr>
                 <tr>
                    <td>Mô tả</td>
                    <td>{description}</td>
                 </tr>
                 <tr>
                    <td>Trạng Thái</td>
                    <td>{status}</td>
                 </tr>

              </tbody>
           </table>

        </section>
     </div>

     );
}
 
export default BannerShow;