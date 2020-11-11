import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Context/MainContext';

const Nav = (props) => {
    const links = props.data;
    const { isAuth, userId, login, logout } = useContext(AuthContext);


    return (
        <div>
            {links.map((link) => (
                <Link key={link.to} exact to={link.to}>
                    {link.name}
                </Link>
            ))}

        </div>
    );
};

export default Nav;
