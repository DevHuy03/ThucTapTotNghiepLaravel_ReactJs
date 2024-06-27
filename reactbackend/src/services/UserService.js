import httpAxios from "../httpAxios";
const UserService = {
    index:()=>{
        return httpAxios.get(`user/index`);
    },
    show:(id)=>{
        return httpAxios.get(`user/show/${id}`);
    },
    store:(data)=>{
        return httpAxios.post(`user/store`,data);
    },
    update:(data,id)=>{
        return httpAxios.post(`user/update/${id}`,data);
    },
    destroy:(id)=>{
        return httpAxios.delete(`user/destroy/${id}`);
    },
    trash: () => {
        return httpAxios.get("user/trash");
    },
    delete: (id) => {
        return httpAxios.get(`user/delete/${id}`);
    },
    restore: (id) => {
        return httpAxios.get(`user/restore/${id}`);
    },
    status: (id) => {
        return httpAxios.get(`user/status/${id}`);
    },
    login:(data)=>{
        return httpAxios.post(`user/login`,data);
    },
};
export default UserService;



