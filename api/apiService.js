import axios from "axios";
const API_BASE_URL = "https://fakestoreapi.com";

const apiService = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  },

  
  

  
};

export default apiService;
