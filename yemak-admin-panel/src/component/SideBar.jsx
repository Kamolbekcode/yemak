import '../assets/sidebar.css'
import {SIDE_ARR} from "../config/Utils.js";
import {Link, useLocation} from "react-router-dom";
// import {COLOR_CHANGE_BG, COLOR_CHANGE_TEXT} from "./ColorMode.jsx";

export const SideBar = () => {
    const path = useLocation().pathname
    return (
        <nav id="sidebarMenu" className={"collapse d-lg-block sidebar collapse bg-white"}>
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    {SIDE_ARR.map(item => (
                        <Link
                            to={item.link}
                            className={path === item.link ? "list-group-item list-group-item-action py-2 ripple active" : "list-group-item list-group-item-action py-2 ripple"}
                            aria-current="true"
                        >
                            <i className={`${item.icon} fa-fw me-3`}></i><span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}