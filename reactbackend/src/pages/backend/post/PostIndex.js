import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash, FaTrashAlt } from "react-icons/fa";
import PostService from "../../../services/PostService";
import { urlImage } from "../../../Config";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PostIndex = () => {

   const [posts, setPosts] = useState([]);
   const [load, setLoad] = useState(false);
   const [reload, setReLoad] = useState(0);
   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await PostService.index();
         setPosts(result.posts);
         setLoad(true);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await PostService.delete(id);
         alert(result.message);
         setReLoad(Date.now);
      })();
   };

   const handStatus = (id) => {
      (async () => {
         const result = await PostService.status(id);
         alert(result.message);
         setReLoad(Date.now);
      })();
   };
    return ( 
        <div className="content">
        <section className="content-header my-2">
           <h1 className="d-inline">Quản lý bài viết</h1>
           <Link to={"/admin/post/create"} className="btn-add">Thêm mới</Link>
           <div className="col-md-12 text-end">
               <Link className="btn btn-danger btn-sm" to={"/admin/post/trash"}>
                     <FaTrash /> Thùng rác
               </Link>
            </div>
        </section>
        <section className="content-body my-2">
        {(load === false) ? <LoadingSpinner /> : ""}
           <table className="table table-bordered">
              <thead>
                 <tr>
                    <th className="text-center" style={{width:"30px"}}>
                       <input type="checkbox" id="checkboxAll" />
                    </th>
                    <th className="text-center" style={{width:"130px"}}>Hình ảnh</th>
                    <th>Chủ đề</th>
                    <th>Tiêu đề bài viết</th>
                    <th>Chi tết bài viết</th>
                    <th className="text-center" style={{width:"30px"}}>ID</th>
                 </tr>
              </thead>
              <tbody>
              {posts && posts.map((post, index) => {
                     return (
                 <tr className="datarow">
                    <td>
                       <input type="checkbox" id="checkId" />
                    </td>
                    <td>
                    <img
                          className="img-fluid"
                          src={urlImage + "post/" + post.image}
                          alt={post.image}
                        />
                    </td>
                    <td>{post.topicname}</td>
                    <td>
                       <div className="name">
                          <Link to="post_edit.html">
                             {post.title}
                          </Link>
                       </div>
                       <div className="function_style">
                       <button onClick={() => handStatus(post.id)}
                            className={post.status === 1
                              ? "border-0 px-1 text-success"
                              : "border-0 px-1 text-danger"
                            }
                          >
                            {post.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                          </button>
                          <Link to={"/admin/post/edit/"+ post.id} className="text-primary mx-1">
                             <FaRegEdit className="fa fa-edit"/>
                          </Link>
                          <Link to={"/admin/post/show/"+ post.id} className="text-info mx-1">
                             <FaEye className="fa fa-eye"/>
                          </Link>
                          <button 
                            onClick={() => handDelete(post.id)} 
                            className="btn btn-sm btn-none text-danger">
                            <FaTrashAlt />
                          </button>
                       </div>
                    </td>
                    <td>{post.detail}</td>
                    <td className="text-center">{post.id}</td>
                 </tr>
                  );
               })}
              </tbody>
           </table>

        </section>
     </div>

     );
}
 
export default PostIndex;