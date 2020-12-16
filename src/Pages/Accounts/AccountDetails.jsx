import React from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../Shared/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions'

const AccountDetails = () => {
    const { accountId } = useParams();
    //Selectors
    const { token } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.control);
    const { strategies } = useSelector((state) => state.strategy);
    //Finds the account for the current page
    const account =
        useSelector((state) => state.account.accounts).find(
            (account) => account.account_id === accountId,
        ) || [];
    const { account_name: accountName, balance, description } = account;
    const currentStrategies = strategies.filter(
        (strategy) => strategy.account_id === account.account_id,
    );
    const dispatch = useDispatch();
    //Data to pass in the Delete Modal

    const openEditModal = () => {
        dispatch(openModal('editAccount', { account } ))
    };

    const openStrategyModal = () => {
        dispatch(openModal('newAccount', {}))
    } 
    
    const openDeleteModal = () => {
        dispatch(openModal('deleteAccount', {account, token }))
    };



    return (
        <React.Fragment>

            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>{accountName}</h1>
                    <h2>${balance}</h2>
                    <p>{description}</p>
                    <ul>
                        {currentStrategies && currentStrategies.length !== 0
                            ? currentStrategies.map((strategy) => (
                                  <li key={strategy.strategy_id}>
                                      {strategy.strategy_name}
                                  </li>
                              ))
                            : 'Cannot find any strategies for this account'}
                    </ul>
                    <button onClick={openStrategyModal}>New Strategy</button>
                    <button onClick={openEditModal}>Edit</button>
                    <button onClick={openDeleteModal}>Delete</button>
                </div>
            )}
        </React.Fragment>
    );
};

export default AccountDetails;
