import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import Loading from '../Shared/Loading';
import { useSelector } from 'react-redux';
import NewAccount from './NewAccount';

const Accounts = () => {
    const { user } = useSelector((state) => state.auth);
    const { accounts } = useSelector((state) => state.account);
    const { isLoading } = useSelector((state) => state.control);
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
                    <h1>Accounts of {user.userName}</h1>

                    <Modal
                        appElement={document.getElementById('app')}
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}>
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
