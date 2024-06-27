import httpAxios from "../httpAxios";
const PostService = {
    index:()=>{
        return httpAxios.get(`post/index`);
    },
    show:(id)=>{
        return httpAxios.get(`post/show/${id}`);
    },
    store:(data)=>{
        return httpAxios.post(`post/store`,data);
    },
    update:(data,id)=>{
        return httpAxios.post(`post/update/${id}`,data);
    },
    destroy:(id)=>{
        return httpAxios.delete(`post/destroy/${id}`);
    },
    trash: () => {
        return httpAxios.get("post/trash");
    },
    delete: (id) => {
        return httpAxios.get(`post/delete/${id}`);
    },
    restore: (id) => {
        return httpAxios.get(`post/restore/${id}`);
    },
    status: (id) => {
        return httpAxios.get(`post/status/${id}`);
    },
    //frontend
    lastpostnew: () => {
        return httpAxios.get("post/lastpostnew");
    },
    lastpostlikenew: () => {
        return httpAxios.get("post/lastpostlikenew");
    },
    postall: (limit) => {
        return httpAxios.get(`post/post_all/${limit}`);
    },
    ById: (id) => {
        return httpAxios.get("post/showslug/" + id);
    },
    PostByTopicId: (limit, topic_id) => {
        return httpAxios.get(`post/post_topic/${limit}/${topic_id}`);
    },
};
export default PostService;


