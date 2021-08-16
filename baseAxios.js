import axios from "axios"

const baseAxios = axios.create({
    baseURL: process.env.BASE_URL,
})

export default baseAxios