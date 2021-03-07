import React from 'react';
import {Link} from "react-router-dom";
import './NotFound.css';

const NotFound = (props) => {
console.log(props , "Not-Found")
    return (
        <div className="NotFound">
            <h1 className="NotFound-title">Oops! Page not found</h1>
            <Link to='/' className="NotFound-link">Go to Home page</Link>
        </div>
    );
};

export default NotFound;