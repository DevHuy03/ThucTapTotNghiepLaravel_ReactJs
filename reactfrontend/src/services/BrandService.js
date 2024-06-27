import httpAxios from "../httpAxios"

const BrandService = {
    index: () => {
        return httpAxios.get("brand/index");
    },
    trash: () => {
        return httpAxios.get("brand/trash");
    },
    delete: (id) => {
        return httpAxios.get(`brand/delete/${id}`);
    },
    restore: (id) => {
        return httpAxios.get(`brand/restore/${id}`);
    },
    destroy: (id) => {
        return httpAxios.delete(`brand/destroy/${id}`);
    },
    show: (id) => {
        return httpAxios.get(`brand/show/${id}`);
    },
    store: (data) => {
        return httpAxios.post(`brand/store`, data);
    },
    update: (data, id) => {
        return httpAxios.post(`brand/update/${id}`, data);
    },
    status: (id) => {
        return httpAxios.get(`brand/status/${id}`);
    },

    //frontend
    getById: (id) =>{
        return httpAxios.get(`brand/show/${id}`);
        
    }
}
export default BrandService;