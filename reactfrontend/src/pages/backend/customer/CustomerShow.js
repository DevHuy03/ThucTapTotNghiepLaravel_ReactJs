import { useEffect, useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomerService from "../../../services/CustomerService";
const CustomerShow = () => {

   const { id } = useParams();
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [gender, setGender] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [status, setStatus] = useState(1);

   useEffect(() => {
      (async () => {
         const result = await CustomerService.show(id);
         const customer = result.customer;
         setName(customer.name);
         setUsername(customer.username);
         setGender(customer.gender);
         setPhone(customer.phone);
         setEmail(customer.email);
         setAddress(customer.address);
         setStatus(customer.status);
      })();
   }, [id]);

   const handDelete = (id) => {
      (async () => {
         const result = await CustomerService.delete(id);
         alert(result.message);
         navigate("/admin/customer/index", { replace: true })
      })();
   };
    return (                <div className="content">
    <section className="content-header my-2">
       <h1 className="d-inline">Chi tiết khách hàng</h1>
       <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
             <Link to={"/admin/customer/index"} className="btn btn-primary btn-sm">
                <IoArrowBackSharp className="fa fa-arrow-left"/> Về danh sách
             </Link>
             <Link to={"/admin/customer/edit/"+ id} className="btn btn-success btn-sm">
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
                <td>Username</td>
                <td>{username}</td>
             </tr>
             <tr>
                <td>Giới tính</td>
                <td>{gender}</td>
             </tr>
             <tr>
                <td>Số điện thoại</td>
                <td>{phone}</td>
             </tr>
             <tr>
                <td>Email</td>
                <td>{email}</td>
             </tr>
             <tr>
                <td>Địa chỉ</td>
                <td>{address}</td>
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
 
export default CustomerShow;