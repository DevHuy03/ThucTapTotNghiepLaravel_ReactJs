import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import PageService from "../../../services/PageService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const PageShow = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const [title, setTitle] = useState('');
   const [slug, setSlug] = useState('');
   const [description, setDescription] = useState('');
   const [detail, setDetail] = useState('');
   const [status, setStatus] = useState(1);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await PageService.show(id);
            const page = result.page;
            setTitle(page.title);
            setSlug(page.slug);
            setDescription(page.description);
            setDetail(page.detail);
            setStatus(page.status);
         } catch (error) {
            console.error("Error fetching page:", error);
         }
      };
      fetchData();
   }, [id]);

   const handDelete = (id) => {
      (async () => {
         const result = await PageService.delete(id);
         alert(result.message);
         navigate('/admin/page/index', { replace: true });
      })();
   };

    return ( 
        <div className="content">
        <section className="content-header my-2">
           <h1 className="d-inline">Chi tiết trang đơn</h1>
           <div className="row mt-2 align-items-center">
              <div className="col-md-12 text-end">
                 <Link to={"/admin/page/index"} className="btn btn-primary btn-sm">
                    <IoArrowBackSharp className="fa fa-arrow-left"/> Về danh sách
                 </Link>
                 <Link to={"/admin/page/edit/"+ id} className="btn btn-success btn-sm">
                    <FaRegEdit className="fa fa-edit"/> Sửa
                 </Link>
                 <button className="btn btn-danger btn-sm" onClick={() => handDelete(id)}>
                     <FaTrashAlt /> Xóa
                  </button>
              </div>
           </div>
        </section>
        <section className="content-body my-2">

           <table className="table table-bordered">
              <thead>
                 <tr>
                    <th className="text-center" style={{width:"180px"}}>Tên trường</th>
                    <th className="text-center">Giá trị</th>
                 </tr>
              </thead>
              <tbody>
              <tr>
                     <th className="text-center">Id</th>
                     <td className="text-center">{id}</td>
                  </tr>
                  <tr>
                     <th className="text-center">Slug</th>
                     <td className="text-center">{slug}</td>
                  </tr>

                  <tr>
                     <th className="text-center">Tiêu đề</th>
                     <td className="text-center">{title}</td>
                  </tr>

                  <tr>
                     <th className="text-center">Chi tiết</th>
                     <td className="text-center">{detail}</td>
                  </tr>


                  <tr>
                     <th className="text-center">Mô tả</th>
                     <td className="text-center">{description}</td>
                  </tr>

                  <tr>
                     <th className="text-center">Trạng Thái</th>
                     <td className="text-center">{status}</td>
                  </tr>
              </tbody>
           </table>

        </section>
     </div>

     );
}
 
export default PageShow;