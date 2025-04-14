import axios from '../../src/lib/axios';
import Cookies from "js-cookie";

axios.interceptors.request.use(request => {
    console.log('Request Details:', {
        method: request.method,
        url: request.url,
        baseURL: request.baseURL,
        headers: request.headers,
        data: request.data,
        params: request.params,
        withCredentials: request.withCredentials
    });
    return request;
}, error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
});

export const categoryService = {
    create: async (data) => {
        try {
            const response = await axios.post('/categories', data, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                }
            });

            return response.data;
        } catch (error) {
            console.log("From Service: ", error);
            throw new Error('Failed to add new Category');
        }
    },
    update: async () => {},
    delete: async (id) => {
        try {
            const response = await axios.delete(`categories/${id}`, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`
                },
            })
            return response.data;
        } catch (error) {
            console.error("From Service:", error);
            throw  new Error('Failed to delete a category');
        }
    },
    all: async (page = 1, limit = 10) => {
        try {
            const response = await axios.get('/categories', {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                },
            })
            return response.data;
        } catch (error) {
            console.error("From Service: ", error);
            throw new Error('Failed to display category list');
        }
    }

}