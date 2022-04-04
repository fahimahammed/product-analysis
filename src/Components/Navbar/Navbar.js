import React from 'react';
import './Navbar.css';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div className="navbar-style p-5">
            <nav className='flex flex-wrap justify-center'>
                <CustomLink className='mx-4' to='/'>Home</CustomLink>
                <CustomLink className='mx-4' to='/review'>All Review</CustomLink>
                <CustomLink className='mx-4' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='mx-4' to='/blog'>Blog</CustomLink>
            </nav>
        </div>
    );
};

export default Navbar;