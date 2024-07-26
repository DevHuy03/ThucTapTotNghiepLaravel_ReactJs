import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { urlImage } from "../../../Config";
function Cart() {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        console.log("jj", cartData)
        if (cartData) {
            setCart(JSON.parse(cartData));

        }
    }, []);
    useEffect(() => {
    }, [cart]);

    const updateQuantity = (index, newQuantity) => {
        if (isNaN(newQuantity) || newQuantity < 1) {
            newQuantity = 1;
        }
        const updatedCart = cart.map((item, idx) => {
            if (idx === index) {
                return {
                    ...item,
                    quantity: newQuantity,
                    total: calculateTotal(item.price, newQuantity)
                };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.location.reload();
    };

    const removeProduct = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

    };

    const calculateTotal = (price, quantity) => {
        return price * quantity;
    };

    const calculateCartTotal = () => {
        let total = 0;
        cart.forEach(product => {
            total += calculateTotal(product.price, product.quantity);
        });
        return total;
    };

    useEffect(() => {
        const cartTotal = calculateCartTotal();
        const finalTotal = cartTotal + shippingCost;
        setTotal(finalTotal);
    }, [cart, shippingCost, selectedShippingMethod]);


    const handleFreeShippingChange = () => {
        setSelectedShippingMethod('Free Shipping');
        setShippingCost(0);
        localStorage.setItem('shippingCost', 0);
        localStorage.setItem('selectedShippingMethod', 'Free Shipping');
    };

    const handleStandardShippingChange = () => {
        setSelectedShippingMethod('Standard');
        setShippingCost(10);
        localStorage.setItem('shippingCost', 10);
        localStorage.setItem('selectedShippingMethod', 'Standard');
    };

    const handleExpressShippingChange = () => {
        setSelectedShippingMethod('Express');
        setShippingCost(20);
        localStorage.setItem('shippingCost', 20);
        localStorage.setItem('selectedShippingMethod', 'Express');
    };

    return (
        <section className="hdl-maincontent py-2">
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-dark">
                            <th style={{ width: 30 }} className="text-center">STT</th>
                            <th style={{ width: 100 }}>Hình</th>
                            <th>Tên sản phẩm</th>
                            <th className="text-center">Giá</th>
                            <th style={{ width: 130 }} className='text-center'>Số lượng</th>
                            <th className='text-center'>Tổng giá sản phẩm</th>
                            <th className='text-center'>Xóa</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product, index) => (
                            <tr key={index}>
                                <td class="d-none">
                                    {product.id}
                                    <input class="productid" value={product.id} type="hidden" />
                                </td>
                                <td>
                                    <img
                                        classNamee="img-fluid"
                                        src={urlImage + "product/" + product.image}
                                        alt="hinh"
                                    />
                                </td>
                                <td className="align-middle">{product.name}</td>
                                <td className="text-center align-middle">{product.price}đ</td>
                                <td className="text-center align-middle">
                                    <div className="input-group mb-3">
                                        {/* <span className="input-group-text" id="sub" onclick="changenumber(id)">-</span>
                                    <input type="text" value="1" id="qty" className="form-control text-center" />
                                    <span className="input-group-text" id="add" onclick="changenumber(id)">+</span> */}
                                        <input
                                            type="number"
                                            classNamee="form-control"
                                            defaultValue={product.quantity || 1} // Mặc định số lượng là 1
                                            min={1}
                                            max={10}
                                            step={1}
                                            data-decimals={0}
                                            required=""
                                            onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                        />

                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    {calculateTotal(product.price, product.quantity || 1)}đ
                                </td>
                                <td className="text-center align-middle">
                                    <button onClick={() => removeProduct(index)} className="btn btn-sm btn-main">
                                        <FaWindowClose size={20} color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5">
                                <button className="btn btn-main">Cập nhật</button>
                                <Link classNamee="btn btn-main" to="/dat-hang">Thanh Toán</Link>
                            </td>
                            <td colspan="2" className="text-end">
                                <strong>Tổng Tiền: {total} đ</strong>
                            </td>
                        </tr>

                    </tfoot>
                </table>
            </div>

        </section>
    );
}
export default Cart;