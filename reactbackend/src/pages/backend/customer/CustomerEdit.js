import { IoArrowBackSharp } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import CustomerService from "../../../services/CustomerService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const CustomerEdit = () => {

   const { id } = useParams();
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
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
         setPassword(customer.password);
         setGender(customer.gender);
         setPhone(customer.phone);
         setEmail(customer.email);
         setAddress(customer.address);
         setStatus(customer.status);
      })();
   }, [id]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const customer = new FormData();
      customer.append("name", name);
      customer.append("username", username);
      customer.append("password", password);
      customer.append("gender", gender);
      customer.append("phone", phone);
      customer.append("email", email);
      customer.append("address", address);
      customer.append("status", status);
      (async () => {
         const result = await CustomerService.update(customer, id);
         alert(result.message);
         navigate("/admin/customer/index", { replace: true })
      })();
   };
   return (
      <form onSubmit={handleSubmit}>
         <div className="content">
            <section className="content-header my-2">
               <h1 className="d-inline">Sửa khách hàng</h1>
               <div className="row mt-2 align-items-center">
                  <div className="col-md-12 text-end">
                     <button className="btn btn-success btn-sm" name="THEM">
                        <FaSave className="fa fa-save" /> Lưu [Sửa]
                     </button>
                     <Link to={"/admin/customer/index"} className="btn btn-primary btn-sm">
                        <IoArrowBackSharp className="fa fa-arrow-left" /> Về danh sách
                     </Link>
                  </div>
               </div>
            </section>
            <section className="content-body my-2">

               <form action="" method="post" enctype="multipart/form-data">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="mb-3">
                           <label><strong>Tên đăng nhập(*)</strong></label>
                           <input 
                              type="text" 
                              onChange={(e) => setUsername(e.target.value)}
                              value={username}
                              className="form-control" 
                              placeholder="Tên đăng nhập" />
                        </div>
                        <div className="mb-3">
                           <label><strong>Mật khẩu(*)</strong></label>
                           <input 
                              type="password" 
                              onChange={(e) => setPassword(e.target.value)}
                              value={password} 
                              className="form-control" 
                              placeholder="Mật khẩu" />
                        </div>
                        {/* <div className="mb-3">
                           <label><strong>Xác nhận mật khẩu(*)</strong></label>
                           <input type="password" name="re_password" className="form-control"
                              placeholder="Xác nhận mật khẩu" />
                        </div> */}
                        <div className="mb-3">
                           <label><strong>Email(*)</strong></label>
                           <input 
                              type="text" 
                              onChange={(e) => setEmail(e.target.value)}
                              value={email} 
                              className="form-control" 
                              placeholder="Email" />
                        </div>
                        {/* <div className="mb-3">
                           <label><strong>Xác nhận email(*)</strong></label>
                           <input type="text" name="re_email" className="form-control" placeholder="Xác nhận email" />
                        </div> */}
                        <div className="mb-3">
                           <label><strong>Điện thoại(*)</strong></label>
                           <input 
                              type="text" 
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
                              className="form-control" 
                              placeholder="Điện thoại" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="mb-3">
                           <label><strong>Họ tên (*)</strong></label>
                           <input 
                              type="text" 
                              onChange={(e) => setName(e.target.value)}
                              value={name} 
                              className="form-control" 
                              placeholder="Họ tên" />
                        </div>
                        <div className="mb-3">
                           <label><strong>Giới tính</strong></label>
                           <select onChange={(e) => setGender(e.target.value)} value={gender}  id="gender" className="form-control">
                              <option>Chọn giới tính</option>
                              <option value="Nam">Nam</option>
                              <option value="Nữ">Nữ</option>
                           </select>
                        </div>
                        <div className="mb-3">
                           <label><strong>Địa chỉ</strong></label>
                           <input 
                              type="text" 
                              onChange={(e) => setAddress(e.target.value)}
                              value={address} 
                              className="form-control" 
                              placeholder="Địa chỉ" />
                        </div>
                        {/* <div className="mb-3">
                           <label><strong>Hình đại diện</strong></label>
                           <input type="file" name="image" className="form-control" />
                        </div> */}
                        <div className="mb-3">
                           <label><strong>Trạng thái</strong></label>
                           <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                              <option value="1">Xuất bản</option>
                              <option value="2">Chưa xuất bản</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </form>

            </section>
         </div>
      </form>
   );
}

export default CustomerEdit;