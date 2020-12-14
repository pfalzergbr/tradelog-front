import React from 'react';
import Loading from '../Shared/Loading';
import { useSelector } from 'react-redux';
import { useRequest } from '../../Hooks/useRequest';

import TradeForm from './TradeForm'
const API = process.env.REACT_APP_API;



const NewTrade = (props) => {
    //TODO: Basic form, or extended?
    const { token } = useSelector((state) => state.auth);
    const { accounts } = useSelector((state) => state.account);
    const { isLoading, sendRequest } = useRequest();
  

    const onSubmit = async (data) => {
        try {
            const response = await sendRequest(
                `${API}/api/trades/`,
                'POST',
                JSON.stringify(data),
                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            );
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
                    <TradeForm onSubmit={onSubmit} accounts={accounts} />
                </div>
            )}
        </React.Fragment>
    );
};

export default NewTrade;
