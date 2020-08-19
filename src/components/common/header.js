import React from 'react';
import logo from './logo.png';
import './header.css';
import {Link} from 'react-router-dom'


function Header(){
    return (
    <div className='Header'>
        <Link to='/'><img src={logo} className='Header-logo' /></Link>
    </div>
    )
}

export default Header;