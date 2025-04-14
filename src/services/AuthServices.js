import axios from '../../src/lib/axios';
import Cookies from "js-cookie";

export const authService = {
    register: async (userData) => {
        try {
            const response = await axios.post('/register', userData);
            return response.data;
        } catch (error) {
            throw new Error('Failed to register');
        }
    },
    login: async (userData) => {
        try {
            const response = await axios.post('/login', userData);
            Cookies.set('token', response.data.token, {
                domain: 'localhost'
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to login');
        }
    },

    logout: async () => {
        try {
            const response = await axios.post('/logout', {}, {
                headers : {
                    'Authorization': `Bearer ${Cookies.get('token')}`
                }
            });
            Cookies.remove('token', {
                domain: 'localhost'
            });
            Cookies.remove('token');
            return response.data;
        } catch (error) {
            throw new Error('Failed to', error);
        }
    }
}

