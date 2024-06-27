import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash, FaTrashAlt } from "react-icons/fa";
import UserService from "../../../services/UserService";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../LoadingSpinner";
import { useEffect, useState } from "react";
const UserIndex = () => {
   const[users,setUser]=useState([]);
   const [load, setLoad] = useState(false);
   const [reload, setReLoad] = useState(0);

   useEffect(() => {
      (async () => {
         setLoad(false);
         const result = await UserService.index();
         setUser(result.users);
         setLoad(true);
      })();
   }, [reload]);

   const handDelete = (id) => {
      (async () => {
        const result = await UserService.delete(id);
        alert(result.message);
        setReLoad(Date.now);
      })();
    };
  
    const handStatus = (id) => {
      (async () => {
        const result = await UserService.status(id);
        alert(result.message);
        setReLoad(Date.now);
      })();
    };
    return ( 
        <div className="content">
        <section className="content-header my-2">
           <h1 className="d-inline">Thành viên</h1>
           <Link to={"/admin/user/create"} className="btn-add">Thêm mới</Link>
           <div className="text-end">
           <Link className="btn btn-danger btn-sm" to={"/admin/user/trash"}>
               <FaTrash /> Thùng rác
            </Link>
            </div>
        </section>
        <section className="content-body my-2">
        {(load === false) ? <LoadingSpinner /> : ""}
           <table className="table table-bordered">
              <thead>
                 <tr>
                    <th className="text-center" style={{width:"30px"}}>
                       <input type="checkbox" id="checkAll" />
                    </th>
                    {/* <th className="text-center" style={{width:"90px"}}>Hình ảnh</th> */}
                    <th>Họ tên</th>
                    <th>Điện thoại</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th className="text-center" style={{width:"30px"}}>ID</th>
                 </tr>
              </thead>
              <tbody>
              {users && users.map((user, index) => {
               return (
                  <tr className="datarow"key={index}>
                  <td>
                     <input type="checkbox" id="checkId" />
                  </td>
                  <td>
                     <div className="name">
                        <Link to="#">{user.name}</Link>
                     </div>
                     <div className="function_style">
                     <button onClick={() => handStatus(user.id)}
                          className={user.status === 1
                            ? "border-0 px-1 text-success"
                            : "border-0 px-1 text-danger"
                          }
                        >
                          {user.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                        <Link to={"/admin/user/edit/"+ user.id} className="text-primary mx-1">
                           <FaRegEdit className="fa fa-edit"/>
                        </Link>
                        <Link to={"/admin/user/show/" + user.id} className="text-info mx-1">
                           <FaEye className="fa fa-eye"/>
                        </Link>
                        <Link to="#" className="text-danger mx-1">
                           <FaTrashAlt onClick={() => handDelete(user.id)} className="fa fa-trash"/>
                        </Link>
                     </div>
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td className="text-center">{user.id}</td>
               </tr>
                 );
               })}
              </tbody>
           </table>

        </section>
     </div>

     );
}
 
export default UserIndex;