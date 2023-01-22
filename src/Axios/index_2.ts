import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

request.interceptors.request.use(config=>{
    config.url = config.url + '&units=metric' + '&appid=' + process.env.REACT_APP_API_KEY + '&lang=ru'
    return config;
})

export default request