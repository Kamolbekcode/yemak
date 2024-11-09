export const BASE_URL = "http://localhost:8080/api/v1"

export const IS_SUCCESS = (status) => {
    return status === 200 || status === 201 || status === 204;
}

export const CLIENT_URL = "/auth/dashboard"

export const SIDE_ARR = [
    {name: "Asosiy Bo'lim", link: CLIENT_URL, logo: ""},
    {name: "Mahsulotlar", link: `${CLIENT_URL}/category`, logo: ""}
]

export const ROLES= [
    {SUPER_ADMIN: "SUPER_ADMIN"},
    {ADMIN: "ADMIN"},
    {RESTAURANT_SUPER_ADMIN: "RESTAURANT_SUPER_ADMIN"},
    {RESTAURANT_ADMIN: "RESTAURANT_ADMIN"},
    {USER: "USER"}
]
