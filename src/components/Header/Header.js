import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-style'>
            <img src={logo} alt="Logo" />
            <div>
                <a href="/Home">Home</a>
                <a href="/Order">Orders</a>
                <a href="/Contact">Contact</a>
                <a href="/About">About Us</a>
            </div>
        </nav>
        
    );
};

export default Header;