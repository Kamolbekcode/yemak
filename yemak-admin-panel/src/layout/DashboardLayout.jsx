import {SideBar} from "../component/SideBar.jsx";
import {Navbar} from "../component/Navbar.jsx";
import {Outlet} from "react-router-dom";
import "../assets/sidebar.css"

export const DashboardLayout = () => {
    return (
        <div>
            <header>
                <SideBar/>
                <Navbar/>
            </header>

            <main style={{marginTop: "58px"}}>
                <div className="container pt-4">
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}