import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
// import 'axios/dist/axios.min.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ToastContainer/>
        <App/>
    </StrictMode>,
)
