import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{ color: match ? 'white': 'black', textDecoration:"none", borderBottom: match ? '2px solid white' : '1px solid gray'}}
                to={to}
                {...props}
            >
                {children}
            </Link>
           
        </div>
    );
};

export default CustomLink;