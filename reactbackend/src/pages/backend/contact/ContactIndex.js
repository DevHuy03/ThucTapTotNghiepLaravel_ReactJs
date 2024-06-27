import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash, FaTrashAlt } from "react-icons/fa";
import ContactService from "../../../services/ContactService";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from "react-router-dom";

const ContactIndex = () => {
   const [contacts, setContacts] = useState([]);
   const [load, setLoad] = useState(false);
   const [reload, setReload] = useState(0);
   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await ContactService.index();
         setContacts(result.contacts);
         setLoad(true);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await ContactService.delete(id);
         alert(result.message);
         setReload(Date.now);
      })();
   };
   const handStatus = (id) => {
      (async () => {
        const result = await ContactService.status(id);
        alert(result.message);
        setReload(Date.now);
      })();
    };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Liên hệ</h1>
            <div className="col-md-12 text-end">
            <Link className="btn btn-danger btn-sm" to={"/admin/contact/trash"}>
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
                     <th>Họ tên</th>
                     <th>Điện thoại</th>
                     <th>Email</th>
                     <th>Tiêu đề</th>
                     <th>Nội dung liên hệ</th>
                     <th className="text-center" style={{ width: "30px" }}>ID</th>
                  </tr>
               </thead>
               <tbody>
                  {contacts && contacts.map((contact, index) => {
                     return (
                        <tr className="datarow" key={index}>
                           <td className="text-center">
                              <input type="checkbox" id="checkId" />
                           </td>
                           <td>
                              <div className="name">
                                 <Link href="contact_reply.html">{contact.name}</Link>
                              </div>
                              <div className="function_style">
                              <button onClick={() => handStatus(contact.id)}
                                 className={contact.status === 1
                                    ? "border-0 px-1 text-success"
                                    : "border-0 px-1 text-danger"
                                 }>
                                 {contact.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                              </button>
                                 <Link to={"/admin/contact/reply/" + contact.id} className="text-primary mx-1">
                                    <FaRegEdit className="fa fa-edit" /> Trả lời
                                 </Link>
                                 <Link to={"/admin/contact/show/" + contact.id} className="text-info mx-1">
                                    <FaEye className="fa fa-eye" />
                                 </Link>
                                 <button 
                                    onClick={() => handDelete(contact.id)} 
                                    className="btn btn-sm btn-none text-danger">
                                    <FaTrashAlt />
                                 </button>
                              </div>
                           </td>
                           <td>{contact.phone}</td>
                           <td>{contact.email}</td>
                           <td>{contact.title}</td>
                           <td>{contact.content}</td>
                           <td className="text-center">{contact.id}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default ContactIndex;