import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const links = props.data;

    return (
        <div>
            {links.map((link) => (
                <Link exact to={link.to}>
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default Nav;
