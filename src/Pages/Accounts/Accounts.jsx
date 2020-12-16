import React from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Shared/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions'

const Accounts = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { accounts } = useSelector((state) => state.account);
    const { isLoading } = useSelector((state) => state.control);

    const openNewAccountModal = () => {
        dispatch(openModal('newAccount', { } ))
    };

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>Accounts of {user.userName}</h1>
                    <ul>
                        {accounts.map((account) => (
                            <Link
                                key={account.account_id}
                                to={`/${user.userId}/accounts/${account.account_id}`}>
                                {account.account_name}
                            </Link>
                        ))}
                    </ul>
                    <button onClick={openNewAccountModal} >
                        Create Account
                    </button>
                </div>
            )}
        </React.Fragment>
    );
};

export default Accounts;
