import React from 'react';
import logo from './logo.png';
import './header.css';
import {Link} from 'react-router-dom'
import Search from './search'


function Header(){
    return (
    <div className='Header'>
        <Link to='/'><img src={logo} className='Header-logo' /></Link>
        <Search />
    </div>
    )
}

export default Header;