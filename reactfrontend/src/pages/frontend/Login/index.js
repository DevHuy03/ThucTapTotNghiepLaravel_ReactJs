import { useNavigate } from "react-router-dom";

import { useState } from 'react';
import CustomerService from '../../../services/CustomerService';

const Login = () => {
    const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const doLogin = (e) => {
        e.preventDefault();
        const customer = new FormData();
        customer.append("email", email);
        customer.append("password", password);
        (async () => {
            const result = await CustomerService.login(customer);
            alert(result.message);
            navigate('/', { replace: true });
        })();
    };


    return (
        <div className="content d-flex align-items-center justify-content-center" style={{ height: '60vh' }}>
            <div className="border p-4" style={{ width: '35%' }}>
                <section className="content-header my-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="d-inline text-danger">Đăng Nhập</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-body my-2">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form onSubmit={doLogin}>

                                <div className="mb-3">
                                    <label>
                                        <strong>Email(*)</strong>
                                    </label>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>
                                        <strong>Mật khẩu(*)</strong>
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        placeholder="Mật khẩu"
                                    />
                                </div>
                                <div className="form-group pb-2">
                                    <button
                                        type="submit"
                                        className="btn py-2 px-4"
                                        style={{ backgroundColor: 'blue', color: 'white' }}
                                    >
                                        Đăng Nhập
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;