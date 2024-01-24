import axios from "axios";

const baseUrl = "https://designdata.onrender.com/api/" 
const instance =axios.create({
    baseURL:baseUrl,
})

export default instance