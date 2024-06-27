import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomerService from "../../../services/CustomerService";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [status] = useState(1);
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
            const result = await CustomerService.store(customer);
            alert(result.message);
            navigate('/dang-nhap', { replace: true });
        })();
    };
    return (
        <>
            <section class="bg-light">
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb py-2 my-0">
                            <li class="breadcrumb-item">
                                <a class="text-main" href="index.html">Trang chủ</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Đăng ký tài khoản
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section class="hdl-maincontent py-2">
                <form onSubmit={handleSubmit} action="register.html" method="post" name="registercustomer">
                    <div class="container">
                        <h1 class="fs-2 text-main text-center">ĐĂNG KÝ TÀI KHOẢN</h1>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="name" class="text-main">Họ tên(*)</label>
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} class="form-control" placeholder="Nhập họ tên" required />
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="text-main">Điện thoại(*)</label>
                                    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} class="form-control" placeholder="Nhập điện thoại"
                                        required />
                                </div>
                                <div class="mb-3">
                                    <div class="card">
                                        <div class="card-header text-main">
                                            Địa chỉ
                                        </div>
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <label for="address">Địa chỉ</label>
                                                <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} class="form-control"
                                                    placeholder="Nhập địa chỉ" />
                                            </div>
                                            {/* <div class="row">
                                                <div class="col-4">
                                                    <select name="tinhtp" id="tinhtp" class="form-control">
                                                        <option value="">Chọn Tỉnh/TP</option>
                                                    </select>
                                                </div>
                                                <div class="col-4">
                                                    <select name="quanhuyen" id="quanhuyen" class="form-control">
                                                        <option value="">Chọn Quận/Huyện</option>
                                                    </select>
                                                </div>
                                                <div class="col-4">
                                                    <select name="phuongxa" id="phuongxa" class="form-control">
                                                        <option value="">Chọn Phường/Xã</option>
                                                    </select>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="text-main">Giới tính</label>
                                    <div class="col-4">
                                        <select onChange={(e) => setGender(e.target.value)} value={gender} class="form-control">
                                            <option value="LJBT">Chọn giới tính</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nữ">Nữ</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="username" class="text-main">Tên tài khoản(*)</label>
                                    <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} class="form-control"
                                        placeholder="Nhập tài khoản đăng nhập" required />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="text-main">Email(*)</label>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} class="form-control" placeholder="Nhập email" required />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="text-main">Mật khẩu(*)</label>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} class="form-control" placeholder="Mật khẩu"
                                        required />
                                </div>
                                {/* <div class="mb-3">
                                    <label for="password_re" class="text-main">Xác nhận Mật khẩu(*)</label>
                                    <input type="password" name="password_re" id="password_re" class="form-control"
                                        placeholder="Xác nhận mật khẩu" required />
                                </div> */}
                                <div class="mb-3">
                                    {/* <button class="btn btn-main" name="REGISTER">Đăng ký</button> */}
                                    <button
                                        type="submit"
                                        className="btn py-2 px-4"
                                        style={{ backgroundColor: 'blue', color: 'white' }}
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
export default Register;