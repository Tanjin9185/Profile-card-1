import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink to="/" className="navbar-brand ml-5 animation-fade" style={{ marginLeft: '90px' }}>
                    <h3>Wisetr Technology</h3>
                </NavLink>
                <button className="navbar-toggler toggleBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto mono-text">
                        <NavLink activeClassName="active" to="/home" className="nav-NavLink navigation-item px-3 home">Home</NavLink>
                        <NavLink activeClassName="active" to="/about" className="nav-NavLink navigation-item px-3">About</NavLink>
                        <NavLink activeClassName="active" to="/contact" className="nav-NavLink navigation-item  px-3">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;