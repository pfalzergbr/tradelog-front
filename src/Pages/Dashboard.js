import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = (props) => {
    const { userId } = useParams();

    return (
        <div>
            <h1>Dashboard!!</h1>
            <h2>{userId}</h2>
        </div>
    );
};

export default Dashboard;
