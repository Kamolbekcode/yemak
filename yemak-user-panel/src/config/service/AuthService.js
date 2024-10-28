import {toast} from "react-toastify";
import {BASE_CONFIG} from "../BaseConfig";
import {APP_API} from "../AppApi";
import {IS_SUCCESS} from "../Utils";

export const LoginHandler = async (data, navigate) => {
    if (data.username.trim().length === 0) {
        return toast.error("Username bo'lishi shart")
    }
    if (data.password.length === 0) {
        return toast.error("Parol bo'lishi shart")
    }
    try {
        const res = await BASE_CONFIG.doPost(APP_API.login, data);
        if (IS_SUCCESS(res.status)) {
            toast.success("Muvaffaqiyatli xisobga kirdingiz")
            sessionStorage.setItem("token", res.data.token)
            navigate(`/auth/dashboard`)
        }
    } catch (err) {
        console.log(err)
        toast.error(err.message)
    }
}