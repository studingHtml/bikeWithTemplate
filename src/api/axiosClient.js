import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://localhost:44321/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient