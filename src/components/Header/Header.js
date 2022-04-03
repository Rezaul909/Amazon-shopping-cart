import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-style'>
            <img src={logo} alt="Logo" />
            <div>
                <Link to="/Home">Home</Link>
                <Link to="/Order">Orders</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/About">About Us</Link>
            </div>
        </nav>
        
    );
};

export default Header;