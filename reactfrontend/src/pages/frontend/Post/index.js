import { Link } from "react-router-dom";
import PostService from "../../../services/PostService";
import { urlImage } from "../../../Config";
import { useEffect, useState } from "react";

const Post = () => {
   const [postalls, setPostAlls] = useState([]);
   const [limit, setLimit] = useState(3);
   useEffect(() => {
      (async () => {
         const result = await PostService.postall(limit);
         setPostAlls(result.posts);
      })();
   }, [limit]);
   return (
      <section class="hdl-maincontent py-2">
         <div class="container">
            <div class="row">
               {/* <div class="col-md-3 order-2 order-md-1">
                 <ul class="list-group mb-3 list-category">
                    <li class="list-group-item bg-main py-3">Danh mục sản phẩm</li>
                    <li class="list-group-item">
                       <Link to="product_category.html">Thời trang nam</Link>
                    </li>
                    <li class="list-group-item">
                       <Link to="product_category.html">Thời trang nữ</Link>
                    </li>
                    <li class="list-group-item">
                       <Link to="product_category.html">Thời trang trẻ em</Link>
                    </li>
                    <li class="list-group-item">
                       <Link to="product_category.html">Thời trang thể thao</Link>
                    </li>
                 </ul>
                 <ul class="list-group mb-3 list-brand">
                    <li class="list-group-item bg-main py-3">Thương hiệu</li>
                    <li class="list-group-item">
                       <Link to="product_brand.html">Việt Nam</Link>
                    </li>
                    <li class="list-group-item">
                       <Link to="product_brand.html">Hàn Quốc</Link>
                    </li>
                    <li class="list-group-item">
                       <Link to="product_brand.html">Thái Lan</Link>
                    </li>
                    <li class="list-group-item">
                       <Link to="product_brand.html">Quản Châu</Link>
                    </li>
                 </ul>
                 <ul class="list-group mb-3 list-product-new">
                    <li class="list-group-item bg-main py-3">Sản phẩm mới</li>
                    <li class="list-group-item">
                       <div class="product-item border">
                          <div class="product-item-image">
                             <Link to="product_detail.html">
                                <img src="../public/images/product/thoi-trang-the-thao-1.webp" class="img-fluid" alt=""/>
                             </Link>
                          </div>
                          <h2 class="product-item-name text-main text-center fs-5 py-1">
                             <Link to="product_detail.html">Thời trang thể thao 1</Link>
                          </h2>
                          <h3 class="product-item-price fs-6 p-2 d-flex">
                             <div class="flex-fill"><del>200.000đ</del></div>
                             <div class="flex-fill text-end text-main">190.000đ</div>
                          </h3>
                       </div>
                    </li>
                    <li class="list-group-item">
                       <div class="product-item border">
                          <div class="product-item-image">
                             <Link to="product_detail.html">
                                <img src="../public/images/product/thoi-trang-the-thao-2.webp" class="img-fluid" alt=""/>
                             </Link>
                          </div>
                          <h2 class="product-item-name text-main text-center fs-5 py-1">
                             <Link to="product_detail.html">Thời trang thể thao 2</Link>
                          </h2>
                          <h3 class="product-item-price fs-6 p-2 d-flex">
                             <div class="flex-fill"><del>200.000đ</del></div>
                             <div class="flex-fill text-end text-main">190.000đ</div>
                          </h3>
                       </div>
                    </li>
                    <li class="list-group-item">
                       <div class="product-item border">
                          <div class="product-item-image">
                             <Link to="product_detail.html">
                                <img src="../public/images/product/thoi-trang-the-thao-1.webp" class="img-fluid" alt=""/>
                             </Link>
                          </div>
                          <h2 class="product-item-name text-main text-center fs-5 py-1">
                             <Link to="product_detail.html">Thời trang thể thao 3</Link>
                          </h2>
                          <h3 class="product-item-price fs-6 p-2 d-flex">
                             <div class="flex-fill"><del>200.000đ</del></div>
                             <div class="flex-fill text-end text-main">190.000đ</div>
                          </h3>
                       </div>
                    </li>
                 </ul>
              </div> */}
               <div class="order-1 order-md-2"> {/* col-md-9 order-1 order-md-2 */}
                  <div class="post-topic-title bg-main">
                     <h3 class="fs-5 py-3 text-center">TIN TỨC</h3>
                  </div>
                  <div class="post-topic mt-3">
                     {postalls && postalls.map((post, index) => {
                        return (
                           <div class="row post-item mb-4">
                              <div class="col-4 col-md-4">
                                 <div class="post-item-image">
                                    <Link to={"/chi-tiet-bai-viet/" + post.slug}>
                                       <img
                                          className="img-fluid"
                                          src={urlImage + "post/" + post.image}
                                          alt={post.image}
                                       />
                                    </Link>
                                 </div>
                              </div>
                              <div class="col-8 col-md-8">
                                 <h2 class="post-item-title fs-5 py-1">
                                    <Link to="post_detail.html">
                                       {post.title}
                                    </Link>
                                 </h2>
                                 <p>{post.detail}</p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
                  <div className='row'>
                     <div className='col-12 text-center mb-2'>
                        <button className='btn btn-success' onClick={() => setLimit(limit + 2)}>Xem thêm</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default Post;