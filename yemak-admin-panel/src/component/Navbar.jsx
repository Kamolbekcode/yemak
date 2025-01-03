import '../assets/sidebar.css'
export const Navbar = () => {
    return (
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"/>
                </button>

                <a className="navbar-brand" href="#">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                        height="25"
                        alt="MDB Logo"
                        loading="lazy"
                    />
                </a>
                <form className="d-none d-md-flex input-group w-auto my-auto">
                    <input
                        autoComplete="off"
                        type="search"
                        className="form-control rounded"
                        placeholder='Search (ctrl + "/" to focus)'
                        style={{minWidth: "225px"}}
                    />
                    <span className="input-group-text border-0"><i className="fas fa-search"/></span>
                </form>

                <ul className="navbar-nav ms-auto d-flex flex-row">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-bell"/>
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link me-3 me-lg-0" href="#">
                            <i className="fas fa-fill-drip"/>
                        </a>
                    </li>
                    <li className="nav-item me-3 me-lg-0">
                        <a className="nav-link" href="#">
                            <i className="fab fa-github"/>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="flag-united-kingdom flag m-0"/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                                <a className="dropdown-item" href="#"
                                ><i className="flag-united-kingdom flag"/>English
                                    <i className="fa fa-check text-success ms-2"/></a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i
                                    className="flag-poland flag"/>Polski</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-china flag"/>中文</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-japan flag"/>日本語</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-germany flag"/>Deutsch</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-france flag"/>Français</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i
                                    className="flag-spain flag"/>Español</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i
                                    className="flag-russia flag"/>Русский</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"><i className="flag-portugal flag"/>Português</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                className="rounded-circle"
                                height="22"
                                alt="Avatar"
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}