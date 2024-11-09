import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ToastContainer/>
        <App/>
    </StrictMode>,
)