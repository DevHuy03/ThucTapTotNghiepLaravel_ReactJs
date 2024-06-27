import { useEffect, useState } from "react";
import BrandService from "../../../services/BrandService";
import { urlImage } from "../../../Config";
import LoadingSpinner from "../../../LoadingSpinner";
import { FaToggleOn, FaEdit, FaEye, FaTrash, FaToggleOff } from "react-icons/fa";
import { Link } from "react-router-dom"

const BrandIndex = () => {
  const [brands, setBrands] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sort_order, setSortOrder] = useState(1);
  const [status, setStatus] = useState(1);

  useEffect(() => {
    (async () => {
      setLoad(false);
      const result = await BrandService.index();
      setBrands(result.brands);
      setLoad(true);
    })();
  }, [reload]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const image = document.getElementById("image");
    const brand = new FormData();
    brand.append("name", name);
    brand.append("description", description);
    brand.append("sort_order", sort_order);
    brand.append("status", status);
    brand.append(
      "image",
      image.isDefaultNamespace.length === 0 ? "" : image.files[0]
    );
    (async () => {
      const result = await BrandService.store(brand);
      alert(result.message);
      setReLoad(result.brand.id);
    })();
  };
  // const handDelete = (id) => {
  //   (async () => {
  //     const result = await BrandService.destroy(id);
  //     alert(result.message);
  //     setReLoad(Date.now)
  //   })();
  // };
  const handDelete = (id) => {
    (async () => {
      const result = await BrandService.delete(id);
      alert(result.message);
      setReLoad(Date.now);
    })();
  };

  const handStatus = (id) => {
    (async () => {
      const result = await BrandService.status(id);
      alert(result.message);
      setReLoad(Date.now);
    })();
  };

  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thương hiệu</h1>
        <hr style={{ border: "none" }} />
      </section>
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>
                  <strong>Tên thương hiệu (*)</strong>
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Nhập tên danh mục"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả</strong>
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  rows="4"
                  className="form-control"
                  placeholder="Mô tả"
                ></textarea>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Sắp Xếp</strong>
                </label>
                <select
                  onChange={(e) => setSortOrder(e.target.value)}
                  value={sort_order}
                  rows="4"
                  className="form-select"
                  placeholder="Mô tả"
                >
                  {brands && brands.map((brand, index) => {
                    return (
                      <option key={index} value={brand.id}>Sau: {brand.name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Hình đại diện</strong>
                </label>
                <input type="file" id="image" className="form-control" />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trạng thái</strong>
                </label>
                <select onChange={(e) => setStatus(e.target.value)} value={status} className="form-select">
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div className="mb-3 text-end">
                <button type="submit" className="btn btn-success" name="THEM">
                  <i className="fa fa-save"></i> Lưu[Thêm]
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-8">
            <div className="row mt-3 align-items-center">
              <div className="col-12">
                <ul className="manager">
                  <li>
                    <Link to="brand_index.html">Tất cả {brands.length}</Link>
                  </li>
                  <li>
                    <Link to="#">Xuất bản {brands.length}</Link>
                  </li>
                  <li>
                    <Link to={"/admin/brand/trash"}>Rác (12)</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row my-2 align-items-center">
              <div className="col-md-6">
                <select name="" className="d-inline me-1">
                  <option value="">Hành động</option>
                  <option value="">Bỏ vào thùng rác</option>
                </select>
                <button className="btnapply">Áp dụng</button>
              </div>
              <div className="col-md-6 text-end">
                <input type="text" className="search d-inline" />
                <button className="btnsearch d-inline">Tìm kiếm</button>
              </div>
            </div>
            {(load === false) ? <LoadingSpinner /> : ""}
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center" style={{ width: 30 }}>
                    <input type="checkbox" id="checkboxAll" />
                  </th>
                  <th className="text-center" style={{ width: 30 }}>
                    ID
                  </th>
                  <th className="text-center" style={{ width: 90 }}>
                    Hình ảnh
                  </th>
                  <th>Tên thương hiệu</th>
                  <th>Tên slug</th>
                </tr>
              </thead>
              <tbody>
                {brands && brands.length > 0 && brands.map((brand, index) => {
                  return (
                    <tr className="datarow" key={index}>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">{brand.id}</td>
                      <td>
                        <img
                          className="img-fluid"
                          src={urlImage + "brand/" + brand.image}
                          alt={brand.image}
                        />
                      </td>
                      <td>
                        <div className="name">
                          <Link to="brand_index.html">{brand.name}</Link>
                        </div>
                        <div className="function_style">
                          <button onClick={() => handStatus(brand.id)}
                            className={brand.status === 1
                              ? "border-0 px-1 text-success"
                              : "border-0 px-1 text-danger"
                            }
                          >
                            {brand.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                          </button>
                          <Link to={"/admin/brand/edit/" + brand.id} className="px-1 text-primary">
                            <FaEdit />
                          </Link>
                          <Link to={"/admin/brand/show/" + brand.id} className="px-1 text-info">
                            <FaEye />
                          </Link>
                          <button
                            onClick={() => handDelete(brand.id)}
                            className="btn btn-sm btn-none text-danger">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                      <td>{brand.slug}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BrandIndex;