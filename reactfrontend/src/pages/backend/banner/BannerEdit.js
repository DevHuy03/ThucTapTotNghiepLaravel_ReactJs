import { IoArrowBackSharp } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import BannerService from "../../../services/BannerService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BannerEdit = () => {
   const { id } = useParams();
const navigate = useNavigate();
// const [load, setLoad] = useState(false);
const [name, setName] = useState("");
const [link, setLink] = useState("");
const [position, setPosition] = useState("");
const [description, setDescription] = useState("");
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
const handleSubmit = (e) => {
   e.preventDefault();
   const image = document.getElementById("image");
   const banner = new FormData();
   banner.append("name", name);
   banner.append("link", link);
   banner.append("position", position);
   banner.append("description", description);
   banner.append("status", status);
   banner.append("image", image.files.length === 0 ? "" : image.files[0]);
   (async () => {
      const result = await BannerService.update(banner, id);
      alert(result.message);
      navigate("/admin/banner/index", { replace: true })
   })();
};
   return (
      <form onSubmit={handleSubmit}>
         <div className="content">
            <section className="content-header my-2">
               <h1 className="d-inline">Cập nhật banner</h1>
               <div className="text-end">
                  <Link to={"/admin/banner/index"} className="btn btn-sm btn-success">
                     <IoArrowBackSharp className="fa fa-arrow-left" /> Về danh sách
                  </Link>
               </div>
            </section>
            <section className="content-body my-2">

               <div className="row">
                  <div className="col-md-9">
                     <div className="mb-3">
                        <label><strong>Tên banner (*)</strong></label>
                        <input 
                           type="text" 
                           onChange={(e) => setName(e.target.value)}
                           value={name} 
                           className="form-control" 
                           placeholder="Nhập tên banner" />
                     </div>
                     <div className="mb-3">
                        <label><strong>Liên kết</strong></label>
                        <input 
                           type="text" 
                           onChange={(e) => setLink(e.target.value)}
                           value={link} 
                           className="form-control" 
                           placeholder="Nhập liên kết" />
                     </div>
                     <div className="mb-3">
                        <label><strong>Mô tả (*)</strong></label>
                        <textarea 
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}  
                        rows="5" 
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
                           <p>Chọn trạng thái đăng</p>
                           <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select">
                              <option value="1">Xuất bản</option>
                              <option value="2">Chưa xuất bản</option>
                           </select>
                        </div>
                        <div className="box-footer text-end px-2 py-3">
                           <button type="submit" className="btn btn-success btn-sm text-end">
                              <FaSave className="fa fa-save" aria-hidden="true" /> Đăng
                           </button>
                        </div>
                     </div>
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Vị trí (*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select value={position} onChange={(e) => setPosition(e.target.value)} className="form-select">
                              <option>Chọn vị trí</option>
                              <option value="slideshow">Slide Show</option>
                              <option value="ads">Quảng cáo</option>
                           </select>
                           <p className="pt-2">Vị trí hiển thị banner</p>
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

export default BannerEdit;