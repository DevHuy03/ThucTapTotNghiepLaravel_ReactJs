import { FaEye, FaPlus, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomerService from "../../../services/CustomerService";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../LoadingSpinner";

const CustomerIndex = () => {

   const[customers,setCustomers]=useState([]);
   const [load, setLoad] = useState(false);
   const [reload, setReLoad] = useState(0);

   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await CustomerService.index();
         setCustomers(result.customers);
         setLoad(true);
      })();
   }, [reload]);

   const handDelete = (id) => {
      (async () => {
        const result = await CustomerService.delete(id);
        alert(result.message);
        setReLoad(Date.now);
      })();
    };
  
    const handStatus = (id) => {
      (async () => {
        const result = await CustomerService.status(id);
        alert(result.message);
        setReLoad(Date.now);
      })();
    };
    return ( 
        <div className="content">
        <section className="content-header my-2">
           <h1 className="d-inline">Khách hàng</h1>
           <div className="col-md-12 text-end">
           <Link to="/admin/customer/create" className="btn btn-sm btn-success" ><FaPlus/>Thêm</Link>
           <Link className="btn btn-danger btn-sm" to={"/admin/customer/trash"}>
               <FaTrash /> Thùng rác
            </Link>
           </div>
         </section>
        <section className="content-body my-1">
        {(load === false) ? <LoadingSpinner /> : ""}
           <table className="table table-bordered">
              <thead>
                 <tr>
                    <th className="text-center" style={{width:"30px"}}>
                       <input type="checkbox" id="checkboxAll" />
                    </th>
                    <th>Họ tên</th>
                    <th>Điện thoại</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th className="text-center" style={{width:"30px"}}>ID</th>
                 </tr>
              </thead>
              <tbody>
              {customers && customers.map((customer, index) => {
               return (
                 <tr className="datarow"key={index}>
                    <td>
                       <input type="checkbox" id="checkId" />
                    </td>
                    <td>
                       <div className="name">
                          <Link to="customer_edit.html">{customer.name}</Link>
                       </div>
                       <div className="function_style">
                       <button onClick={() => handStatus(customer.id)}
                            className={customer.status === 1
                              ? "border-0 px-1 text-success"
                              : "border-0 px-1 text-danger"
                            }
                          >
                            {customer.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                          </button>
                          <Link to={"/admin/customer/edit/"+ customer.id} className="text-primary mx-1">
                             <FaRegEdit className="fa fa-edit"/>
                          </Link>
                          <Link to={"/admin/customer/show/" + customer.id} className="text-info mx-1">
                             <FaEye className="fa fa-eye"/>
                          </Link>
                          <Link to="#" className="text-danger mx-1">
                             <FaTrashAlt onClick={() => handDelete(customer.id)} className="fa fa-trash"/>
                          </Link>
                       </div>
                    </td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>{customer.address}</td>
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
 
export default CustomerIndex;