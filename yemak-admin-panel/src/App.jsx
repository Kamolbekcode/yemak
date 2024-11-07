import 'primeicons/primeicons.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={"/auth/dashboard"} element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
