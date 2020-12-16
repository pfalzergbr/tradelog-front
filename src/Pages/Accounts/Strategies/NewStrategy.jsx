import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StrategyForm from './StrategyForm';
import { addNewStrategy } from '../../../Redux/Actions/strategyActions';
import Loading from '../../Shared/Loading';
const API = process.env.REACT_APP_API;

const NewStrategy = (props) => {
    const { accountId } = props.data
    const { token } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.control);
    const dispatch = useDispatch();

    console.log(accountId)
    const onSubmit = async (data) => {
        try {
            const newStrategyData = {
                ...data,
                accountId,
            };
            const response = await dispatch(
                addNewStrategy({
                    method: 'post',
                    url: `${API}/api/strategy`,
                    data: newStrategyData,
                    auth: { Authorization: `Bearer ${token}` },
                }),
            );
            console.log(response)
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
