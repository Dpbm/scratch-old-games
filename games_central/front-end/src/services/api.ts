import axios from 'axios';

const urls = ["https://backended.herokuapp.com/", "http://localhost:3333/"]


const api = axios.create({
    baseURL: urls[1],
})

export default api;