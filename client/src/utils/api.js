import axios from "axios";
import { interceptorRequest } from "../config/interceptors";
const BASE_URL = "http://localhost:8000/api/";


export const apiInstance = axios.create({
    baseURL: BASE_URL,
});

apiInstance.interceptors.request.use(interceptorRequest)