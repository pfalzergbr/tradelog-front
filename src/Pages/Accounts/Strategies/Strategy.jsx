import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loading from '../../Shared/Loading';
import { selectStrategy } from '../../../Redux/Reducers/strategy';

const Strategy = () => {
    const { strategyId } = useParams();
    const { isLoading } = useSelector((state) => state.control);
    const strategy = useSelector((state) => selectStrategy(state, strategyId)) || {};
    const { strategy_name, description } = strategy; 
    console.log(strategy);

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>{strategy_name}</h1>
                    <p>{description}</p>
                </div>
            )}
        </React.Fragment>
    );
};

export default Strategy;
