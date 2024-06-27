import { IoArrowBackSharp } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import PostService from "../../../services/PostService";
import TopicService from "../../../services/TopicService";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const PostCreate = () => {
   const [topic_id, setTopic_id] = useState("2");
   const [title, setTitle] = useState("");
   const [detail, setDetail] = useState("");
   const [description, setDescription] = useState("");
   const [status, setStatus] = useState(1);
   const navigate = useNavigate();

   const [topics, setTopics] = useState([]);
   useEffect(() => {
      (async () => {
         const result = await TopicService.index();
         setTopics(result.topics);
      })();
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      const image = document.getElementById("image");
      const post = new FormData();
      post.append("topic_id", topic_id);
      post.append("title", title);
      post.append("detail", detail);
      post.append("description", description);
      post.append("status", status);
      post.append("image", image.files.length === 0 ? "" : image.files[0]);
      (async () => {
         const result = await PostService.store(post);
         alert(result.message);
         navigate('/admin/post/index', { replace: true });
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thêm bài viết</h1>
            <div className="text-end">
               <Link to={"/admin/post/index"} className="btn btn-sm btn-success">
                  <IoArrowBackSharp className="fa fa-arrow-left" /> Về danh sách
               </Link>
            </div>
         </section>
         <section className="content-body my-2">
            <form onSubmit={handleSubmit}>
               <div className="row">
                  <div className="col-md-9">
                     <div className="mb-3">
                        <label><strong>Tiêu đề bài viết (*)</strong></label>
                        <input 
                           type="text" 
                           onChange={(e) => setTitle(e.target.value)}
                           value={title} 
                           className="form-control" 
                           placeholder="Nhập tiêu đề" />
                     </div>
                     <div className="mb-3">
                        <label><strong>Chi tiết (*)</strong></label>
                        <textarea 
                           onChange={(e) => setDetail(e.target.value)}
                           value={detail}
                           rows="7" 
                           className="form-control"
                           placeholder="Nhập chi tiết"></textarea>
                     </div>
                     <div className="mb-3">
                        <label><strong>Mô tả (*)</strong></label>
                        <textarea 
                           onChange={(e) => setDescription(e.target.value)}
                           value={description} 
                           rows="4" 
                           className="form-control" 
                           placeholder="Mô tả"></textarea>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Đăng</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <p>Chọn trạng thái đăng</p>
                           <select onChange={(e) => setStatus(e.target.value)} className="form-select">
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
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Chủ đề (*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select onChange={(e) => setTopic_id(e.target.value)} className="form-select">
                              {topics.map(function (topic, index) {
                                 return (<option key={index} value={topic.id}>{topic.name}</option>)
                              })}
                           </select>
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
            </form>
         </section>
      </div>

   );
}

export default PostCreate;