import httpAxios from "../httpAxios";
const CustomerService = {
    index:()=>{
        return httpAxios.get(`customer/index`);
    },
    show:(id)=>{
        return httpAxios.get(`customer/show/${id}`);
    },
    store:(data)=>{
        return httpAxios.post(`customer/store`,data);
    },
    login:(data)=>{
        return httpAxios.post(`customer/login`,data);
    },
    update:(data,id)=>{
        return httpAxios.post(`customer/update/${id}`,data);
    },
    destroy:(id)=>{
        return httpAxios.delete(`customer/destroy/${id}`);
    },
    trash: () => {
        return httpAxios.get("customer/trash");
    },
    delete: (id) => {
        return httpAxios.get(`customer/delete/${id}`);
    },
    restore: (id) => {
        return httpAxios.get(`customer/restore/${id}`);
    },
    status: (id) => {
        return httpAxios.get(`customer/status/${id}`);
    },
    getById:(id)=>{
        return httpAxios.get(`customer/show/${id}`);
    },
};
export default CustomerService;


