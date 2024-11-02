import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {Dashboard} from "./pages/Dashboard.jsx";
import {Login} from "./pages/Login.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Login/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App