import {easyFrontend} from "./axiosClient";


const accountApi = {
   
    register(data) {
        const url = `/auth/local/register`;
        return easyFrontend.post(url, data);
    },
    login(data) {
        const url = `/auth/local`;
        return easyFrontend.post(url, data);
    },

    
};


export default accountApi;