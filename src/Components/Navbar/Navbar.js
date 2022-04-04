import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/review'>AllReview</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
        </nav>
    );
};

export default Navbar;