import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler ml-auto "
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navigation">
                        <li className="nav-item">
                            <a href="/">Home</a>
                            {/* <a className="nav-link">
                                <Link to="/Home" className="nav-link">Home
                                </Link>
                            </a> */}
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/Register" className="nav-link">Register
                                </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/Login" className="nav-link">Login
                                </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/" className="nav-link">Logout
                                </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/Search" className="nav-link">Search
                                </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/MyCal" className="nav-link">Calendar
                                </Link>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;