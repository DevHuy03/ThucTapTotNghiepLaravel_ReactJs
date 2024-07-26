import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { urlImage } from "../../../Config";

function Checkout({ items }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cartData = localStorage.getItem("cart");

        if (cartData) {
            setCart(JSON.parse(cartData));
        }

    }, []);

    useEffect(() => {
        const cartTotal = calculateCartTotal();
        const finalTotal = cartTotal;
        setTotal(finalTotal);
    }, [cart]);

    const calculateTotal = (price, quantity) => {
        return price * quantity;
    };

    const calculateCartTotal = () => {
        let total = 0;
        cart.forEach(product => {
            total += calculateTotal(product.price, product.qty);
        });
        return total;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [formData, setFormData] = useState({
        delivery_name: '',
        delivery_phone: '',
        delivery_email: '',
        delivery_address: '',
        delivery_gender: '',
        note: '',
    });

    const handleCheckout = async (e) => {
        e.preventDefault();
        try {
            if (!formData.delivery_name || !formData.delivery_phone || !formData.delivery_address) {
                throw new Error('Xin vui lòng điền đầy đủ thông tin vào các ô bắt buộc');
            }

            if (/^\s*$/.test(formData.delivery_name) || /^\s*$/.test(formData.delivery_phone) || /^\s*$/.test(formData.delivery_address)) {
                throw new Error('Vui lòng điền vào tất cả các trường bắt buộc với các giá trị hợp lệ.');
            }
            setLoading(true);

            const url = 'http://localhost/MacQuocHuy_CDTT_laravel/public/api/export/storeonline';
            let listcart = [];

            // Chọn tất cả các phần tử có class 'productid'
            document.querySelectorAll(".productid").forEach((element) => {
                const productId = element.value;
                // Lấy giá trị qty từ phần tử có class 'qty' tương ứng
                const qtyElement = element.closest("tr").querySelector(".qty");
                const qtyValue = qtyElement ? qtyElement.getAttribute("data-qty") : 0;

                // Thêm vào listcart
                listcart = [...listcart, { id: productId, qty: qtyValue }];
            });

            const response = await axios.post(url, {
                user_id: 1,
                status: 1,
                delivery_name: formData.delivery_name,
                delivery_phone: formData.delivery_phone,
                delivery_address: formData.delivery_address,
                delivery_gender: "avc",
                delivery_email: formData.delivery_email,
                note: formData.note,
                listcart: listcart
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status !== 200) {
                throw new Error('Lỗi xử lý đơn hàng. Vui lòng thử lại.');
            }

            Swal.fire(
                'Thanh toán thành công!',
                'Bạn đã hoàn tất thanh toán thành công!',
                'success'
            );

            // Clear form data
            setFormData({
                delivery_name: '',
                delivery_phone: '',
                delivery_email: '',
                delivery_address: '',
                delivery_gender: '',
                note: '',
            });

            // Clear cart state
            setCart([]);
            // Remove cart data from localStorage
            localStorage.removeItem('cart');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container_fullwidth">
            <div className="container">
                <form onSubmit={handleCheckout}>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="special-deal leftbar">
                                <h4 className="title">
                                    Special
                                    <strong>
                                        Deals
                                    </strong>
                                </h4>
                                <div className="special-item">
                                    {cart.map((product, index) => (
                                        <tr key={index}>
                                            <td className="d-none">
                                                {product.id}
                                                <input className="productid" value={product.id} type="hidden" />
                                            </td>
                                            <div className="product-image">
                                                <a href="details.html">
                                                    <img src={urlImage + "product/" + product.image} alt="" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <p>
                                                    <a href="details.html">
                                                        {product.name}
                                                    </a>
                                                </p>
                                                <h5 className="price">
                                                    {product.price}
                                                </h5>
                                            </div>
                                        </tr>
                                    ))}

                                </div>
                            </div>

                            <div className="fbl-box leftbar">
                                <h3 className="title">
                                    Facebook
                                </h3>
                                <span className="likebutton">
                                    <a href="#">
                                        <img src="images/fblike.png" alt="" />
                                    </a>
                                </span>
                                <p>
                                    12k people like Flat Shop.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        </a>
                                    </li>
                                </ul>
                                <div className="fbplug">
                                    <a href="#">
                                        <span>
                                            <img src="images/fbicon.png" alt="" />
                                        </span>
                                        Facebook social plugin
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="checkout-page">
                                <ol className="checkout-steps">
                                    <li className="steps active">
                                        <a href="checkout.html" className="step-title">
                                            Thông tin gửi hàng
                                        </a>
                                        <div className="step-description">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="your-details">
                                                            <h5>
                                                                Thông tin khách hàng
                                                            </h5>
                                                            <div className="">
                                                                <label className="lebel-abs">
                                                                    Họ Tên
                                                                    <strong className="red">
                                                                        *
                                                                    </strong>
                                                                </label>
                                                                <input type="text" name="delivery_name" className="form-control" value={formData.delivery_name} onChange={handleInputChange} required />
                                                            </div>
                                                            <div className="">
                                                                <label className="lebel-abs">
                                                                    Email
                                                                    <strong className="red">
                                                                        *
                                                                    </strong>
                                                                </label>
                                                                <input type="email" name="delivery_email" className="form-control" value={formData.delivery_email} onChange={handleInputChange} required />
                                                            </div>
                                                            <div className="">
                                                                <label className="lebel-abs">
                                                                    Số điện thoại
                                                                    <strong className="red">
                                                                        *
                                                                    </strong>
                                                                </label>
                                                                <input type="tel" name="delivery_phone" className="form-control" value={formData.delivery_phone} onChange={handleInputChange} required />
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="your-details">
                                                            <h5>
                                                                Địa chỉ
                                                            </h5>
                                                            <div className="form-row">
                                                                {/* <label className="lebel-abs">
                                                                    Address 01
                                                                    <strong className="red">
                                                                        *
                                                                    </strong>
                                                                </label> */}
                                                                <textarea type="text" name="delivery_address" cols={20} rows={3} className="form-control" value={formData.delivery_address} onChange={handleInputChange} required />
                                                            </div>
                                                            <button onClick={handleCheckout}>
                                                                Đặt hàng
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>

                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix">
                    </div>
                    <div className="our-brand">
                        <h3 className="title">
                            <strong>
                                Our
                            </strong>
                            Brands
                        </h3>
                        <div className="control">
                            <a id="prev_brand" className="prev" href="#">
                                &lt;
                            </a>
                            <a id="next_brand" className="next" href="#">
                                &gt;
                            </a>
                        </div>
                        <ul id="braldLogo">
                            <li>
                                <ul className="brand_item">
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/envato.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/themeforest.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/photodune.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/activeden.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/envato.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className="brand_item">
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/envato.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/themeforest.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/photodune.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/activeden.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="brand-logo">
                                                <img src="images/envato.png" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Checkout;