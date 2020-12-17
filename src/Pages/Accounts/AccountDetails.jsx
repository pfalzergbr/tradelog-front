import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Loading from '../Shared/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions';
import { selectAccount } from '../../Redux/Reducers/account'
import { selectAccountStrategies } from '../../Redux/Reducers/strategy'


const AccountDetails = () => {
    const { accountId } = useParams();
    //Selectors
    const { user, token } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.control);
    //Finds the account for the current page
    const account =
        useSelector((state) => selectAccount(state, accountId)
        ) || [];
    const { account_name: accountName, balance, description } = account;
    const currentStrategies = useSelector(state => selectAccountStrategies(state, accountId))
    const dispatch = useDispatch();
    //Data to pass in the Delete Modal

    const openEditModal = () => {
        dispatch(openModal('editAccount', { account }));
    };

    const openStrategyModal = () => {
        dispatch(openModal('newStrategy', { accountId }));
    };

    const openDeleteModal = () => {
        dispatch(openModal('deleteAccount', { account, token }));
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
                                  <Link to={`/${user.userId}/strategies/${strategy.strategy_id}`}><li key={strategy.strategy_id}>
                                      {strategy.strategy_name}
                                  </li></Link>
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
