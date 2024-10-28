export const BASE_URL = "http://localhost/api/v1"

export const IS_SUCCESS = (status) => {
    return status === 200 || status === 201 || status === 204;
}

export const ROLES = [
    {SUPER_ADMIN: "SUPER_ADMIN"},
    {ADMIN: "ADMIN"},
    {RESTAURANT_SUPER_ADMIN: "RESTAURANT_SUPER_ADMIN"},
    {RESTAURANT_ADMIN: "RESTAURANT_ADMIN"},
    {USER: "USER"}
]
