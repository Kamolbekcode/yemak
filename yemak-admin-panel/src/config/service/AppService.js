import {toast} from "react-toastify";
import {BASE_CONFIG} from "../BaseConfig.js";
import {APP_API} from "../AppApi.js";
import {CLIENT_URL, IS_SUCCESS} from "../Utils.js";

export const FileUpload = async (data) => {
    try {
        const res = await BASE_CONFIG.doPost(APP_API.upload, data)
        return res.data
    } catch (err) {
        toast.error("rasm saqlashda hatolik")
    }
}

export const SaveCategory = async (data, navigate) => {
    if (data.name.trim().length === 0) {
        return toast.error("Kategoriyaning nimi bo'lishi shart")
    }
    if (!data.photoId) {
        return toast.error("Kategiriyaning rasmi bo'lishi shart")
    }
    try {
        const res = await BASE_CONFIG.doPost(APP_API.category, data)
        if (IS_SUCCESS(res.status)) {
            toast.success("Muvafaqqiyatli saqlandi")
            navigate(`${CLIENT_URL}/category`)
        }
    } catch (err) {
        toast.error("Kategoriya saqlashda hatolik")
    }
}

export const GetCategory = async () => {
    try {
        const res = await BASE_CONFIG.doGet(APP_API.category)
        return res.data._embedded.list
    } catch (err) {
    }
}