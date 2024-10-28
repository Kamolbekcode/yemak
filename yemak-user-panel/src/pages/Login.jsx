import '../assets/login.css'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {LoginHandler} from "../config/service/AuthService";

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const loginHandler = async () => {
        const data = {
            username, password
        }
        await LoginHandler(data, navigate)
    }

    return (
        <div>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                 className="img-fluid" alt="Sample image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="form-outline mb-4">
                                    <input value={username}
                                           onChange={e => setUsername(e.target.value)}
                                           type="text" id="form3Example3"
                                           className="form-control form-control-lg"
                                           placeholder="Usernamengizni kiriting"/>
                                    <label className="form-label" htmlFor="form3Example3">Username</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input value={password}
                                           onChange={e => setPassword(e.target.value)}
                                           type="password" id="form3Example4" className="form-control form-control-lg"
                                           placeholder="Parolingizni kiriting"/>
                                    <label className="form-label" htmlFor="form3Example4">Parol</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value=""
                                               id="form2Example3"/>
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to={"/forgot-password"} className="text-body">Parolingizni
                                        unutdingizmi?</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                                            onClick={() => loginHandler()}>Xisobga kirish
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div className="text-white mb-3 mb-md-0">
                        WEB-7 © 2024. Birinchi bizda keyin boshqalarda (Dux bor pul bor).
                    </div>

                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}