import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://hostel-12th-assignment-server.vercel.app'
})
const useMealsSecure = () => {
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config;
    },function(error){
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useMealsSecure;