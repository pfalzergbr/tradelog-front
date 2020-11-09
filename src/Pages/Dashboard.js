import React from 'react';
import { Link, useParams } from 'react-router-dom';


const Dashboard = (props) => {
    const { userId } = useParams();

    return (
        <div>
            <h1>Dashboard!!</h1>
            <h2>{userId}</h2>

            <Link to={`/${userId}/profile`}>Profile</Link>
            <Link to={`/${userId}/accounts`}>Accounts</Link>
            <Link to={`/${userId}/strategies`}>Strategies</Link>
            <Link to={`/${userId}/trades`}>Trades</Link>
            <Link to={`/${userId}/performance`}>Performance</Link>
            <Link to={`/${userId}/trades`}>Trades</Link>
        </div>
    );
};

export default Dashboard;
