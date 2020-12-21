import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Shared/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions';
import { fetchAccountStats } from '../../Redux/Actions/accountActions';
import AccountCard from './AccountCard';
const API = process.env.REACT_APP_API;

const Accounts = () => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);
    const { accounts, accountStats } = useSelector((state) => state.account);
    const { isLoading } = useSelector((state) => state.control);
    console.log(accountStats);
    const openNewAccountModal = () => {
        dispatch(openModal('newAccount', {}));
    };

    useEffect(() => {
        const loadAccountStats = async (token) => {
            try {
                const response = await dispatch(
                    fetchAccountStats({
                        url: `${API}/api/account/stats`,
                        auth: { Authorization: `Bearer ${token}` },
                    }),
                );
                return response;
            } catch (error) {
                console.log(error);
            }
        };
        loadAccountStats(token);
    }, [fetchAccountStats, token, API]);

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>Accounts of {user.userName}</h1>
                    <ul>
                        {accountStats.map((account) => (
                            <Link
                                key={account.account_id}
                                to={`/${user.userId}/accounts/${account.account_id}`}>
                                <AccountCard accountData={account} />
                            </Link>
                        ))}
                    </ul>
                    <button onClick={openNewAccountModal}>
                        Create Account
                    </button>
                </div>
            )}
        </React.Fragment>
    );
};

export default Accounts;
