// import React from 'react';
import './Header.css'
import logo from '../img/Logo.svg';
const Header = () => {
    return (
        <div className="nav">
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Order">Order Review</a>
                <a href="Inventory">Manage Inventory</a>
                <a href="Login">Login</a>
            </div>
        </div>
    );
};

export default Header;