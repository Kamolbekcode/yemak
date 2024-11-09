import {SideBar} from "../component/SideBar.jsx";
import {Navbar} from "../component/Navbar.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import "../assets/sidebar.css"
import {NotFoundPage} from "../pages/NotFoundPage.jsx";
import {useEffect} from "react";

export const DashboardLayout = () => {
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate();
    useEffect(()=> {
        const validateSecure = () => {
            if (!token || sessionStorage.length === 0) return navigate("/")
        }
    })
    return (
        <div>
            {sessionStorage.length > 0 && token ? (
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
            ):(
                <NotFoundPage/>
            )}

        </div>
    )
}