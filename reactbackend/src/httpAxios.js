import axios from "axios";
import { urlAPI } from "./Config";
const httpAxios = axios.create({
    baseURL: urlAPI,
    headers: { "X-Custom-Header": "foobar" },
});
httpAxios.interceptors.response.use((response) => {
    // const { data } = response;
    return response.data;
});
export default httpAxios;