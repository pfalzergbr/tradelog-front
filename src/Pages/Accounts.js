import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import Loading from '../Components/Loading';
import { useRequest } from '../Hooks/useRequest';
import { useSelector } from 'react-redux';
import NewAccount from '../Components/Modals/NewAccount';
const API = process.env.REACT_APP_API;

const Accounts = (props) => {
    const { user, token } = useSelector(state => state.authReducer);
    const { isLoading, sendRequest } = useRequest();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await sendRequest(
                    `${API}/api/user/accounts`,
                    'GET',
                    {},
                    { Authorization: `Bearer ${token}` },
                );
                console.log(response.data.accounts);
                setAccounts(response.data.accounts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAccounts();
    }, [sendRequest, token]);

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
                                key={account._id}
                                to={`/${user.userId}/accounts/${account._id}`}>
                                {account.accountName}
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
