import axios from 'axios';

// TODO fix the baseURL to server
const api = axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: true
});

export default api

