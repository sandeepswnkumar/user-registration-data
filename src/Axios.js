import axios from 'axios';


const axiosBase = axios.create({
    baseURL: 'https://user-registration-data.herokuapp.com/'
});



export default axiosBase;