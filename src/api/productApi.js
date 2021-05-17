import { getAllByAltText } from "@testing-library/dom";
import axiosClient from "./axiosClient";

const productApi = {
    async getAll() {


        // const productList = (await axiosClient.get('/products',{params: {_limit: 120}})).data;
        // const count = (await axiosClient.get('/products/count')).data;
        const productList = (await axiosClient.get('/api/products')).data;
        const count = 30;
        console.log(productList);
        return {
            data: productList,
            count: count,
        }
    },


    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

}

export default productApi;