import axios from "axios";

export const api = axios.create({
    baseUrl: 'http://110.74.194.124:9999/api/'
})
