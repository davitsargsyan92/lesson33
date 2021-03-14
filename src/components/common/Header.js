import React from 'react';
import logo from './logo.png';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {

    // const handleClick = (event) => {
    //     event.preventDefault();
        
    //     // window.location.pathname = event.currentTarget.pathname
        
    //     console.log(window.history);

    //     window.history.pushState(null , null ,event.currentTarget.pathname )

    //     // console.log(window.location)

    //     // console.log(event.currentTarget.pathname)
    // }

    return (
        <div className="Header">

            <Link to="/">
                <img  src={logo} alt="logo" className="Header-logo"/>
            </Link>            
              

            <Link to='/favorites'> 
                <div>
                    Favorites
                </div>
            </Link>
        </div>
    );
};

export default Header;