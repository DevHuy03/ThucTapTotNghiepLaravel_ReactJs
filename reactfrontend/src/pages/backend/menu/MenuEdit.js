import { IoArrowBackSharp } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import MenuService from "../../../services/MenuService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const MenuEdit = () => {


   const { id } = useParams();
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [link, setLink] = useState("");
   const [position, setPosition] = useState('');
   const [parent_id, setParent_id] = useState(0);
   const [sort_order, setSortOrder] = useState(0);
   const [status, setStatus] = useState(1);
   const [menus, setMenus] = useState([]);

   useEffect(function () {
      (async function () {
         const result = await MenuService.getList('index');
         setMenus(result.menus);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         const result = await MenuService.getById(id);
         const menu = result.menu;
         setName(menu.name);
         setLink(menu.link);
         setPosition(menu.position);
         setParent_id(menu.parent_id);
         setSortOrder(menu.sort_order);
         setStatus(menu.status);
      })();
   }, [id]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const menu = new FormData();
      menu.append("name", name);
      menu.append("link", link);
      menu.append("position", position);
      menu.append("parent_id", parent_id);
      menu.append("sort_order", sort_order);
      menu.append("status", status);
      (async () => {
         const result = await MenuService.update(menu, id);
         alert(result.message);
         navigate("/admin/menu/index", { replace: true })
      })();
   };
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Cập nhật menu</h1>
            <div className="text-end">
               <Link to={"/admin/menu/index"} className="btn btn-sm btn-success">
                  <IoArrowBackSharp className="fa fa-arrow-left" /> Về danh sách
               </Link>
            </div>
         </section>
         <form onSubmit={handleSubmit}>
            <section className="content-body my-2">
               <div className="row">
                  <div className="col-md-9">
                     <div className="mb-3">
                        <label for="name"><strong>Tên menu</strong></label>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} id="name" className="form-control" />
                     </div>
                     <div className="mb-3">
                        <label for="link"><strong>Liên kết</strong></label>
                        <input type="text" onChange={(e) => setLink(e.target.value)} value={link} id="link" className="form-control" />
                     </div>
                     <div className="mb-3">
                        <label for="position"><strong>Vị trí</strong></label>
                        <select onChange={(e) => setPosition(e.target.value)}
                           value={position} className="form-control">
                           <option value="mainmenu">Main Menu</option>
                           <option value="footermenu">Footer Menu</option>
                        </select>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Đăng</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <p>Chọn trạng thái đăng</p>
                           <select onChange={(e) => setStatus(e.target.value)} value={status} className="form-control">
                              <option value="1">Xuất bản</option>
                              <option value="2">Chưa xuất bản</option>
                           </select>
                        </div>
                        <div className="box-footer text-end px-2 py-3">
                           <button type="submit" className="btn btn-success btn-sm text-end">
                              <FaSave className="fa fa-save" aria-hidden="true" /> Đăng
                           </button>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Cấp cha</strong>
                        </div>
                        <select onChange={(e) => setParent_id(e.target.value)}
                           value={parent_id} className="form-control mt-2">
                           {menus.map(function (mn, index) {
                              return <option key={index} value={mn.id}>Cha: {mn.name}</option>
                           })}
                        </select>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Thứ tự</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select onChange={(e) => setSortOrder(e.target.value)}
                              value={sort_order} className="form-control mt-2">
                              {menus.map(function (mn, index) {
                                 return <option key={index} value={mn.id}>Sau: {mn.name}</option>
                              })}
                           </select>
                        </div>
                     </div>
                  </div>
               </div>

            </section>
         </form>
      </div>

   );
}

export default MenuEdit;