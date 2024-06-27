import { FaTrashAlt, FaUndo } from "react-icons/fa";
import CustomerService from "../../../services/CustomerService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import LoadingSpinner from "../../../LoadingSpinner";
const CustomerTrash = () => {
   const [customers, setCustomers] = useState([]);
   const [load, setLoad] = useState(false);

   const [reload, setReLoad] = useState(0);
   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await CustomerService.trash();
         setCustomers(result.customers);
         setLoad(true);
      })();
   }, [reload]);
   const handDelete = (id) => {
      (async () => {
         const result = await CustomerService.destroy(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   const handRestore = (id) => {
      (async () => {
         const result = await CustomerService.restore(id);
         alert(result.message);
         setReLoad(Date.now)
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thùng rác khách hàng</h1>
            <div className="row mt-2 align-items-center">
               <div className="col-md-12 text-end">
                  <Link to={"/admin/customer/index"} className="btn btn-primary btn-sm">
                     <IoArrowBackSharp /> Về danh sách
                  </Link>
               </div>
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
                     {/* <th className="text-center" style={{width:"130px"}}>Hình ảnh</th> */}
                     <th>Họ tên</th>
                     <th>User name</th>
                     <th>Giới tính</th>
                     <th>Điện thoại</th>
                     <th>Email</th>
                     <th className="text-center" style={{ width: "130px" }}>ID</th>
                  </tr>
               </thead>
               <tbody>
                  {customers && customers.length > 0 && customers.map((customer, index) => {
                     return (
                        <tr className="datarow">
                           <td>
                              <input type="checkbox" id="checkId" />
                           </td>
                           <td>
                              <div className="name">
                                 <Link to="customer_edit.html">
                                    {customer.name}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <Link href="#" className="text-primary mx-1">
                                    <FaUndo onClick={() => handRestore(customer.id)} className="fa fa-undo" />
                                 </Link>
                                 <Link href="#" className="text-danger mx-1">
                                    <FaTrashAlt onClick={() => handDelete(customer.id)} className="fa fa-trash" />
                                 </Link>
                              </div>
                           </td>
                           <td>
                              {customer.username}
                           </td>
                           <td>
                              {customer.gender}
                           </td>
                           <td>{customer.phone}</td>
                           <td>{customer.email}</td>
                           <td className="text-center">{customer.id}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>

         </section>
      </div>

   );
}

export default CustomerTrash;