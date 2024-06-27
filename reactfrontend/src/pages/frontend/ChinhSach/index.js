import { useEffect, useState } from "react";
import PageService from "../../../services/PageService";

const ChinhSach = () => {
   const [pages, setPages] = useState([]);
   useEffect(() => {
      (async () => {
         const result = await PageService.Policy();
         setPages(result.pages);
      })();
   }, []);
   return (
      <section class="hdl-maincontent py-2">
         <div class="container">
            <div class="row">
               <div class="col-md-3 order-2 order-md-1">
                  {/* <ul class="list-group mb-3 list-page">
                     <li class="list-group-item bg-main py-3">Các trang khác</li>
                     <li class="list-group-item">
                        <a href="post_page.html">Chính sách mua hàng</a>
                     </li>
                     <li class="list-group-item">
                        <a href="post_page.html">Chính sách vận chuyển</a>
                     </li>
                     <li class="list-group-item">
                        <a href="post_page.html">Chính sách đổi trả</a>
                     </li>
                     <li class="list-group-item">
                        <a href="post_page.html">Chính sách bảo hành</a>
                     </li>
                  </ul> */}
               </div>
               {pages && pages.map((page, index) => {
                  return (
                     <div class="col-md-9 order-1 order-md-2" key={index}>

                        <h1 class="fs-2 text-main">{page.title}</h1>
                        <p>
                           {page.detail}
                        </p>
                        <p>

                        {page.description}
                        </p>

                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
export default ChinhSach;