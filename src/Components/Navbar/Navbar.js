import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/review'>All Review</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
        </nav>
    );
};

export default Navbar;