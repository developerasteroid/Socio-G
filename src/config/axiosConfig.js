import axios from "axios";
import { IP_ADDRESS, PORT } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reset } from "../utils/NavigationUtils";
import { logout } from "../utils/Functions";


const axiosInstance = axios.create({
    baseURL:`http://${IP_ADDRESS}:${PORT}`,
    timeout:15000,
});

axiosInstance.interceptors.request.use(
    async(config)=>{
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
      // Return the response data if the request was successful
      return response;
    },
    async(error) => {
        if (error.response && error.response.status === 401) {
            // Handle 401 error (Unauthorized)
            // Redirect to login screen using your navigation function
            await logout();
        }

      // Return the error if the request failed
      return Promise.reject(error);
    }
);

export default axiosInstance;