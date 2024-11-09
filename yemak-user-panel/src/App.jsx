import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'react-multi-carousel/lib/styles.css'
import {Menu} from "./pages/Menu.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Menu/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App