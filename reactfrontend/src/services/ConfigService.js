import httpAxios from "../httpAxios";
const ConfigService = {
    index:()=>{
        return httpAxios.get(`config/index`);
    },
    show:(id)=>{
        return httpAxios.get(`config/show/${id}`);
    },
    store:(data)=>{
        return httpAxios.post(`config/store`,data);
    },
    update:(data,id)=>{
        return httpAxios.post(`config/update/${id}`,data);
    },
    destroy:(id)=>{
        return httpAxios.delete(`config/destroy/${id}`);
    },
};
export default ConfigService;

