import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Context/MainContext';

const Nav = (props) => {
    const links = props.data;
    const { token, logout } = useContext(AuthContext);

    console.log(token);

    return (
        <div>
            {links.map((link) => (
                <Link key={link.to} exact to={link.to}>
                    {link.name}
                </Link>
                ))}
            {token && <span>Welcome, {props.user && props.user.userName}</span>}
            {/* Logout button for the time being*/}
            {token && <button onClick={logout}>Logout</button>}
        </div>
    );
};

export default Nav;
