import React, {useContext} from 'react';
import { Link, useParams } from 'react-router-dom';

import {AuthContext} from '../Context/MainContext';


const Dashboard = (props) => {
    const auth = useContext(AuthContext);
    const { userId } = useParams();

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome, {auth.user.userName}!</h2>


            <Link to={`/${userId}/profile`}>Profile</Link>
            <Link to={`/${userId}/accounts`}>Accounts</Link>
            <Link to={`/${userId}/trades`}>Trades</Link>
            {// <Link to={`/${userId}/performance`}>Performance</Link>}
            }<Link to={`/${userId}/trades`}>Trades</Link>
        </div>
    );
};

export default Dashboard;
