import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <h4 className="navbar-brand" class="text-danger" >TextUtils</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <Link className="nav-link" to="/"><b>Home</b></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/About"><b>About</b></Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/AK-Baghel"><b>Github</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/ankit-kumar-2119781b4/"><b>Linkedin</b></a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.enable} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar