import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContactService from "../../../services/ContactService";
import { useEffect, useState } from "react";
const ContactShow = () => {
   const { id } = useParams();
   // const [load, setLoad] = useState(false);
   const navigate = useNavigate();
   const [user_id, setUserId] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState('');
   const [title, setTitle] = useState(1);
   const [content, setContent] = useState(1);
   const [status, setStatus] = useState(1);
   useEffect(() => {
      (async () => {
         const result = await ContactService.show(id);
         const contact = result.contact;
         setUserId(contact.user_id);
         setName(contact.name);
         setEmail(contact.email);
         setPhone(contact.phone);
         setTitle(contact.title);
         setContent(contact.content);
         setStatus(contact.status);
      })();
   }, [id]);
   const handDelete = (id) => {
      (async () => {
         const result = await ContactService.delete(id);
         alert(result.message);
         navigate("/admin/contact/index", { replace: true })
      })();
   };

    return ( 
        <div className="content">
        <section className="content-header my-2">
           <h1 className="d-inline">Chi tiết</h1>
           <div className="row mt-2 align-items-center">
              <div className="col-md-12 text-end">
                 <Link to={"/admin/contact/index"} className="btn btn-primary btn-sm">
                    <IoArrowBackSharp className="fa fa-arrow-left"/> Về danh sách
                 </Link>
                 <Link href="contact_reply.html" className="btn btn-success btn-sm">
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
                    <td>User Id</td>
                    <td>{user_id}</td>
                 </tr>
                 <tr>
                    <td>Tên</td>
                    <td>{name}</td>
                 </tr>
                 <tr>
                    <td>Email</td>
                    <td>{email}</td>
                 </tr>
                 <tr>
                    <td>Số điện thoại</td>
                    <td>{phone}</td>
                 </tr>
                 <tr>
                    <td>Chi tiết</td>
                    <td>{title}</td>
                 </tr>
                 <tr>
                    <td>Content</td>
                    <td>{content}</td>
                 </tr>
                 <tr>
                    <td>Trạng thái</td>
                    <td>{status}</td>
                 </tr>
              </tbody>
           </table>

        </section>
     </div>

     );
}
 
export default ContactShow;