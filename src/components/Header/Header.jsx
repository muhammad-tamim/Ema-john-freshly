import React from 'react';
import './Header.css'
import logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="nav">
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="inventory">Manage Inventory</Link>
                <Link to="login">Login</Link>
            </div>
        </div>
    );
};

export default Header;