import { useEffect, useState } from "react";
import OrderService from "../../../services/OrderService";
import LoadingSpinner from "../../../LoadingSpinner";
import { FaEye, FaToggleOff, FaToggleOn, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const OrderIndex = () => {

   const [orders, setOrders] = useState([]);
   const [load, setLoad] = useState(false);
   const [reload, setReLoad] = useState(0);

   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await OrderService.index();
         setOrders(result.orders);
         setLoad(true);
      })();
   }, [reload]);
   const handStatus = (id) => {
      (async () => {
         const result = await OrderService.status(id);
         alert(result.message);
         setReLoad(Date.now);
      })();
   };

   const handDelete = (id) => {
      (async () => {
         const result = await OrderService.destroy(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Quản lý đơn hàng</h1>
         </section>
         <section className="content-body my-2">
            {(load === false) ? <LoadingSpinner /> : ""}

            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th className="text-center" style={{ width: "30px" }}>
                        <input type="checkbox" id="checkboxAll" />
                     </th>
                     <th>Họ tên khách hàng</th>
                     <th>Điện thoại</th>
                     <th>Email</th>
                     <th>Ngày đặt hàng</th>
                     <th className="text-center" style={{ width: "30px" }}>ID</th>
                  </tr>
               </thead>
               <tbody>
                  {orders && orders.map((ord, index) => {
                     return (
                        <tr className="datarow">
                           <td>
                              <input type="checkbox" id="checkId" />
                           </td>
                           <td>
                              <div className="name">
                                 <Link to="order_show.html">
                                    {ord.delivery_name}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <button onClick={() => handStatus(ord.id)}
                                    className={ord.status === 1
                                       ? "border-0 px-1 text-success"
                                       : "border-0 px-1 text-danger"
                                    }
                                 >
                                    {ord.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                                 </button>
                                 {/* <Link to="order_edit.html" className="text-primary mx-1">
                                    <FaRegEdit className="fa fa-edit" />
                                 </Link> */}
                                 <Link  to={"/admin/order/show/" + ord.id} className="text-info mx-1">
                                    <FaEye className="fa fa-eye" />
                                 </Link>
                                 <Link to="#" className="text-danger mx-1">
                                    <FaTrashAlt onClick={() => handDelete(ord.id)} className="fa fa-trash" />
                                 </Link>
                              </div>
                           </td>
                           <td>{ord.delivery_phone}</td>
                           <td>{ord.delivery_email}</td>
                           <td>{ord.created_at}</td>
                           <td className="text-center">{ord.id}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default OrderIndex;