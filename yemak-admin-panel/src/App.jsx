import 'primeicons/primeicons.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login.jsx";
import {DashboardLayout} from "./layout/DashboardLayout.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";
import {Category} from "./pages/SuperAdmin/category/Category.jsx";
import {CLIENT_URL} from "./config/Utils.js";
import {CategoryAdd} from "./pages/SuperAdmin/category/CategoryAdd.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={CLIENT_URL} element={<DashboardLayout/>}>
                        <Route index element={<Dashboard/>}/>

                        <Route path={`${CLIENT_URL}/category`} element={<Category/>}/>
                        <Route path={`${CLIENT_URL}/category/add`} element={<CategoryAdd/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
