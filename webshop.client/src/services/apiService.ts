import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the port to match your backend setup

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
