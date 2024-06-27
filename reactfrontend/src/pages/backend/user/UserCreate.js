import { IoArrowBackSharp } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import UserService from "../../../services/UserService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const UserCreate = () => {
   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [gender, setGender] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [status, setStatus] = useState(1);
   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      const user = new FormData();
      user.append("name", name);
      user.append("username", username);
      user.append("password", password);
      user.append("gender", gender);
      user.append("phone", phone);
      user.append("email", email);
      user.append("address", address);
      user.append("status", status);
      (async () => {
         const result = await UserService.store(user);
         alert(result.message);
         navigate('/admin/user/index', { replace: true });
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thêm thành viên</h1>
            <div className="row mt-2 align-items-center">
               <div className="col-md-12 text-end">
                  {/* <button className="btn btn-success btn-sm" name="THEM">
                     <FaSave className="fa fa-save" /> Lưu [Thêm]
                  </button> */}
                  <Link to={"/admin/user/index"} className="btn btn-primary btn-sm">
                     <IoArrowBackSharp className="fa fa-arrow-left" /> Về danh sách
                  </Link>
               </div>
            </div>
         </section>
         <section className="content-body my-2">
            <form onSubmit={handleSubmit}>
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
                        <input 
                           type="password" 
                           onChange={(e) => set(e.target.value)}
                           value={name}
                           className="form-control"
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
                     <button className="btn btn-success btn-sm" name="THEM">
                        <FaSave className="fa fa-save" /> Lưu [Thêm]
                     </button>
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
                        <select onChange={(e) => setGender(e.target.value)} className="form-select">
                           <option>Chọn giới tinh</option>
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
                     <div className="mb-3">
                        <label><strong>Trạng thái</strong></label>
                        <select onChange={(e) => setStatus(e.target.value)} className="form-select">
                           <option value="1">Xuất bản</option>
                           <option value="2">Chưa xuất bản</option>
                        </select>
                     </div>
                  </div>
               </div>
            </form>
         </section>
      </div>
   );
}
 
export default UserCreate;