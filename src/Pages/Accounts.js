import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import Loading from '../Components/Loading';
import { useAxios } from '../Hooks/useAxios';
import { AuthContext } from '../Context/MainContext';
import NewAccount from '../Components/Modals/NewAccount';

const Accounts = (props) => {
    const { user, token } = useContext(AuthContext);
    const { isLoading, sendRequest } = useAxios();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await sendRequest(
                    'http://localhost:3000/api/user/accounts',
                    'GET',
                    {},
                    { Authorization: `Bearer ${token}` },
                );
                setAccounts(response.data.accounts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAccounts();
    }, []);

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
                    <button onClick={openModal} closeModal={closeModal}>Create Account</button>
                </div>
            )}
        </React.Fragment>
    );
};

export default Accounts;
