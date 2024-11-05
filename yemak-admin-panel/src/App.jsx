import 'primeicons/primeicons.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
