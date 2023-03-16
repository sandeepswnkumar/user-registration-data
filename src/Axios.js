import axios from 'axios';


const axiosBase = axios.create({
    baseURL: 'https://user-management-backend-10lu.onrender.com/'
});



export default axiosBase;