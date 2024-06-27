import httpAxios from "../httpAxios";
const PageService = {
    index:()=>{
        return httpAxios.get(`page/index`);
    },
    show:(id)=>{
        return httpAxios.get(`page/show/${id}`);
    },
    store:(data)=>{
        return httpAxios.post(`page/store`,data);
    },
    update:(data,id)=>{
        return httpAxios.post(`page/update/${id}`,data);
    },
    destroy:(id)=>{
        return httpAxios.delete(`page/destroy/${id}`);
    },
    trash: () => {
        return httpAxios.get("page/trash");
    },
    delete: (id) => {
        return httpAxios.get(`page/delete/${id}`);
    },
    restore: (id) => {
        return httpAxios.get(`page/restore/${id}`);
    },
    status: (id) => {
        return httpAxios.get(`page/status/${id}`);
    },
    Introduce: ()=>{
        return httpAxios.get(`page/Introduce`);
    },
    Policy: ()=>{
        return httpAxios.get(`page/Policy`);
    },
};
export default PageService;


