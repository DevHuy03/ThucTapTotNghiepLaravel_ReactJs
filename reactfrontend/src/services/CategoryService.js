import httpAxios from "../httpAxios";
const CategoryService = {
    index: () => {
        return httpAxios.get(`category/index`);
    },
    show: (id) => {
        return httpAxios.get(`category/show/${id}`);
    },
    store: (data) => {
        return httpAxios.post(`category/store`, data);
    },
    update: (data, id) => {
        return httpAxios.post(`category/update/${id}`, data);
    },
    destroy: (id) => {
        return httpAxios.delete(`category/destroy/${id}`);
    },
    trash: () => {
        return httpAxios.get("category/trash");
    },
    delete: (id) => {
        return httpAxios.get(`category/delete/${id}`);
    },
    restore: (id) => {
        return httpAxios.get(`category/restore/${id}`);
    },
    status: (id) => {
        return httpAxios.get(`category/status/${id}`);
    },
    //frontend
    getBySlug: (slug) => {
        return httpAxios.get("category/show/" + slug);
    },
    getCategoryByParentId: (parent_id) => {
        return httpAxios.get(`category/category_list/${parent_id}`);
    },
    getCategoryAll: (limit,page=1) =>{
        return httpAxios.get(`category/category_all/${limit}/${page}`);
    },
};

export default CategoryService;

