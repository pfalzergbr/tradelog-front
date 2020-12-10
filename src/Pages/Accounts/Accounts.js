import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import { fetchAccounts } from '../../Redux/Actions/accountActions'
import Loading from '../Shared/Loading';
import { useSelector, useDispatch } from 'react-redux';
import NewAccount from './NewAccount';
const API = process.env.REACT_APP_API;

const Accounts = () => {
    const dispatch = useDispatch();
    const { user, token } = useSelector(state => state.authReducer);
    const { accounts } = useSelector(state => state.accountReducer)
    const { isLoading } = useSelector((state) => state.requestReducer);
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    useEffect(() => {
        const getAccountsData = async (token) => {
            try {
                const response = await dispatch(fetchAccounts({url: `${API}/api/account`, auth: {Authorization: `Bearer ${token}`}}));
                return response;
            } catch (error) {
                console.log(error);
            }

        }
        if(!accounts){
            console.log(accounts)
            getAccountsData(token);
        }
    }, [ accounts, token, dispatch ]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>Accounts of {user.name}</h1>

                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <NewAccount closeModal={closeModal} />
                    </Modal>
                    <ul>
                        {accounts.map((account) => (
                            <Link
                                key={account.account_id}
                                to={`/${user.userId}/accounts/${account.account_id}`}>
                                {account.account_name}
                            </Link>
                        ))}
                    </ul>
                    <button onClick={openModal} closeModal={closeModal}>
                        Create Account
                    </button>
                </div>
            )}
        </React.Fragment>
    );
};

export default Accounts;
