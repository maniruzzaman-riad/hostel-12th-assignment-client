import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://hostel-12th-assignment-server.vercel.app'
})
const useMealsPublic = () => {
    return axiosPublic;
};

export default useMealsPublic;