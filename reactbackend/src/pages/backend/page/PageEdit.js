import { IoArrowBackSharp } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import PageService from "../../../services/PageService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const PageEdit = () => {

   const { id } = useParams();
   const navigate = useNavigate();

   const [topic_id, setTopic_id] = useState("1");
   const [title, setTitle] = useState("");
   const [detail, setDetail] = useState("");
   const [description, setDescription] = useState("");
   const [status, setStatus] = useState(1);

   useEffect(() => {
      (async () => {
         const result = await PageService.show(id);
         const page = result.page;
         setTitle(page.title);
         setDescription(page.description);
         setTopic_id(page.topic_id);
         setDetail(page.detail);
         setStatus(page.status);
      })();
   }, [id]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const image = document.getElementById("image");
      const page = new FormData();
      page.append("title", title);
      page.append("topic_id", topic_id);
      page.append("description", description);
      page.append("detail", detail);
      page.append("status", status);
      page.append("image", image.files.length === 0 ? "" : image.files[0]);
      (async () => {
         const result = await PageService.update(page, id);
         alert(result.message);
         navigate("/admin/page/index", { replace: true });
      })();

   };

    return ( 
      <form onSubmit={handleSubmit}>
        <div className="content">
        <section className="content-header my-2">
           <h1 className="d-inline">Cập nhật trang đơn</h1>
           <div className="text-end">
              <Link to={"/admin/page/index"} className="btn btn-sm btn-success">
                 <IoArrowBackSharp className="fa fa-arrow-left"/> Về danh sách
              </Link>
           </div>
        </section>
        <section className="content-body my-2">

           <div className="row">
              <div className="col-md-9">
                 <div className="mb-3">
                    <label><strong>Tiêu đề trang đơn (*)</strong></label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" placeholder="Nhập tiêu đề" />
                 </div>
                 {/* <div className="mb-3">
                    <label><strong>Slug (*)</strong></label>
                    <input type="text" name="slug" className="form-control" placeholder="Slug" />
                 </div> */}
                 <div className="mb-3">
                    <label><strong>Chi tiết (*)</strong></label>
                    <textarea onChange={(e) => setDetail(e.target.value)} value={detail} rows="7" className="form-control"
                       placeholder="Nhập chi tiết"></textarea>
                 </div>
                 <div className="mb-3">
                    <label><strong>Mô tả (*)</strong></label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} rows="4" className="form-control" placeholder="Mô tả"></textarea>
                 </div>
              </div>
              <div className="col-md-3">
                 <div className="box-container mt-4 bg-white">
                    <div className="box-header py-1 px-2 border-bottom">
                       <strong>Đăng</strong>
                    </div>
                    <div className="box-body p-2 border-bottom">
                       <p>Chọn trạng thái đăng</p>
                       <select onChange={(e) => setStatus(e.target.value)} value={status} className="form-select">
                          <option value="1">Xuất bản</option>
                          <option value="2">Chưa xuất bản</option>
                       </select>
                    </div>
                    <div className="box-footer text-end px-2 py-3">
                       <button type="submit" className="btn btn-success btn-sm text-end">
                          <FaSave className="fa fa-save" aria-hidden="true"/> Đăng
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
              </div>
           </div>

        </section>
     </div>
     </form>
     );
}
 
export default PageEdit;