import {Link, useNavigate} from "react-router-dom";
import {CLIENT_URL} from "../../../config/Utils.js";
import {useState} from "react";
import {FileUpload, SaveCategory} from "../../../config/service/AppService.js";

export const CategoryAdd = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const saveCategory = async () => {
        const formData = new FormData()
        formData.append("photo", document.getElementById("photo").files[0])
        const photoId = await FileUpload(formData)
        const data = [name, photoId]
        await SaveCategory(data, navigate)
    }
    return (
        <div className={"card p-3"}>
            <h1 className={"text-center text-primary mb-4"}>Kategoriya saqlash</h1>
            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                       placeholder="kategoriya nomini kiriting" className={"form-control m-2"}/>
                <input type="file" id={"photo"} className={"form-control m-2"}/>
            </div>
            <div className={"d-flex justify-content-end"}>
                <Link className={"btn btn-danger m-2"} to={`${CLIENT_URL}/category`}>orqaga
                    qaytish</Link>
                <button className={"btn btn-primary m-2"} onClick={() => saveCategory}>Saqlash</button>
            </div>
        </div>
    )
}