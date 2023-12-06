import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://hostel-12th-assignment-server.vercel.app'
})
const useMealsSecure = () => {
    return axiosSecure;
};

export default useMealsSecure;