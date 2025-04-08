import axios from 'axios';
import Cookies from "js-cookie";

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.withCredentials = false;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const authService = {
    register: async (userData) => {
        try {
             //await axios.get('/sanctum/csrf-cookie');

            // Then proceed with the registration
            const response = await axios.post('/api/register', userData);
            return response.data;
        } catch (error) {
            throw new Error('Failed to register');
        }
    },
    login: async (userData) => {
        try {
            const response = await axios.post('/api/login', userData);
            return response.data;
        } catch (error) {
            throw new Error('Failed to login');
        }
    },

    logout: async () => {
        try {
            const response = await axios.post('/api/logout', {}, {
                headers : {
                    'Authorization': `Bearer ${Cookies.get('token')}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to logout');
        }
    }
}

