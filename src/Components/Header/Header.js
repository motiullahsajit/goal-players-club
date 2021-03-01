import React from 'react';
import logo from '../../images/mainLogo.png'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg mb-3 py-3" style={{ backgroundColor: '#081F2C' }}>
            <div className="container">
                <a className="navbar-brand" href="true"><img src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-3">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="true">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="true">Transfers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="true">Live Sore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="true">Team</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;