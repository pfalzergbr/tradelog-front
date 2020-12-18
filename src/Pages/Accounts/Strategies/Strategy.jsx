import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../../Redux/Actions/modalActions';
import Loading from '../../Shared/Loading';
import { selectStrategy } from '../../../Redux/Reducers/strategy';

const Strategy = () => {
    const { strategyId } = useParams();
    const { isLoading } = useSelector((state) => state.control);
    const { token } = useSelector((state) => state.auth);
    const strategy =
        useSelector((state) => selectStrategy(state, strategyId)) || {};
    const { strategy_name, description } = strategy;
    const dispatch = useDispatch();

    const openDeleteModal = () => {
        dispatch(openModal('deleteStrategy', { strategy, token }));
    };

    const openEditModal = () => {
        dispatch(openModal('editStrategy', { strategy, token }))
    }

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>{strategy_name}</h1>
                    <p>{description}</p>
                    <button onClick={openEditModal}>Edit Strategy</button>
                    <button onClick={openDeleteModal}>Delete Strategy</button>
                </div>
            )}
        </React.Fragment>
    );
};

export default Strategy;
