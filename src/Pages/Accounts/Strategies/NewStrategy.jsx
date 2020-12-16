import React from 'react';
import StrategyForm from './StrategyForm';
import { addNewStrategy } from '../../../Redux/Actions/strategyActions';

import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../Shared/Loading';
const API = process.env.REACT_APP_API;

const NewStrategy = (props) => {
    const { token } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.control);

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        try {
            const response = await dispatch(
                addNewStrategy({
                    method: 'post',
                    url: `${API}/api/strategy`,
                    data,
                    auth: { Authorization: `Bearer ${token}` },
                }),
            );
            //Swap this for strategy route
            // history.push(
            //     `/${response.user_id}/accounts/${response.account_id}`,
            // );
            // props.closeModal();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <button onClick={props.closeModal}>X</button>
                    <StrategyForm onSubmit={onSubmit} />
                </div>
            )}
        </React.Fragment>
    );
};

export default NewStrategy;
