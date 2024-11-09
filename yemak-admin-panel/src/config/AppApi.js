import {BASE_URL} from "./Utils.js";

export const APP_API = {
    login: '/auth/login',
    upload: "/attachment/upload",
    download: `${BASE_URL}/attachment/download?id=`,
    category: "/category"
}