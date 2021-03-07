import React from 'react';
import logo from './logo.png';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to='/'>
                <img src={logo} alt="logo" className="Header-logo"/>
            </Link>
        </div>
    );
};

export default Header;