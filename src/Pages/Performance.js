import React from 'react';
import { useParams } from 'react-router-dom';

const Performance = (props) => {
    const { userId } = useParams();

    return (
        <div>
            <h1>Performance!</h1>
            <h2>{userId}</h2>
        </div>
    );
};

export default Performance;