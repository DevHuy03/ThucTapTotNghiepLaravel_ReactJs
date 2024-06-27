import { useEffect, useState } from "react";
import ContactService from "../../../services/ContactService";
import { FaTrashAlt, FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
const ContactTrash = () => {
   const [contacts, setContact] = useState([]);
   const [reload, setReLoad] = useState(0);
   useEffect(() => {
      (async () => {
         const result = await ContactService.trash();
         setContact(result.contacts);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await ContactService.destroy(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   const handRestore = (id) => {
      (async () => {
         const result = await ContactService.restore(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thùng rác liên hệ</h1>
            <div className="col-md-12 text-end">
                  <Link to={"/admin/contact/index"} className="btn btn-primary btn-sm">
                     <IoArrowBackSharp /> Về danh sách
                  </Link>
            </div>
         </section>
         <section className="content-body my-2">

            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th className="text-center" style={{ width: "30px" }}>
                        <input type="checkbox" id="checkboxAll" />
                     </th>
                     <th>Id</th>
                     <th>Họ tên</th>
                     <th>Điện thoại</th>
                     <th>Email</th>
                     <th>Tiêu đề</th>
                  </tr>
               </thead>
               <tbody>
                  {contacts && contacts.length > 0 && contacts.map((contact, index) => {
                     return (
                        <tr className="datarow" key={index}>
                           <td>
                              <input type="checkbox" id="checkId" />
                           </td>
                           <td>
                              {contact.id}
                           </td>
                           <td>
                              <div className="name">
                                 <Link href="contact_reply.html">{contact.name}</Link>
                              </div>
                              <div className="function_style">
                                 <Link href="#" className="text-primary mx-1">
                                    <FaUndo onClick={() => handRestore(contact.id)} className="fa fa-undo" />
                                 </Link>
                                 <Link href="#" className="text-danger mx-1">
                                    <FaTrashAlt onClick={() => handDelete(contact.id)} className="fa fa-trash" />
                                 </Link>
                              </div>
                           </td>
                           <td>{contact.phone}</td>
                           <td>{contact.email}</td>
                           <td>{contact.title}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default ContactTrash;