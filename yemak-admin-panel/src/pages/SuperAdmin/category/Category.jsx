import {Link} from "react-router-dom";
import {CLIENT_URL} from "../../../config/Utils.js";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {GetCategory} from "../../../config/service/AppService.js";
import {APP_API} from "../../../config/AppApi.js";

export const Category = () => {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const getAll = async () => {
        try {
            const res = await GetCategory
            setCategories(res)
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <div className={"p-3 card"}>
            {loading ? (
                <>
                    <h1 className={"text-center text-primary"}>Kategoriyalar Sahifasi</h1>
                    <div className={"w-100 d-flex align-items-center justify-content-end"}>
                        <Link to={`${CLIENT_URL}/category/add`} className={"btn btn-primary"}>+add</Link>
                    </div>
                    <div className={"row"}>
                        {/*{categories.map(item => {*/}
                        {/*    <div className={"card col-6 col-md-2 col-sm-3"} style={{height: '200px'}}>*/}
                        {/*        <img src={`${APP_API.download}${item.photoId}`}></img>*/}
                        {/*        {item.name}*/}
                        {/*    </div>*/}
                        {/*})}*/}
                    </div>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}