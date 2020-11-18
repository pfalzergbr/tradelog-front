import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Modal from 'react-modal';

import DeleteAccountModal from '../Components/Modals/DeleteAccountModal';
import EditAccount from '../Components/Modals/EditAccount';
import Loading from '../Components/Loading';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

const AccountDetails = (props) => {
    const { token, user, removeAccount } = useContext(AuthContext);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [account, setAccount] = useState({});
    const { isLoading, sendRequest } = useAxios();
    const { userId, accountId } = useParams();
    const { accountName, balance, description, strategies } = account;
    const history = useHistory();

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                const response = await sendRequest(
                    `http://localhost:3000/api/user/accounts/${accountId}`,
                    'GET',
                    {},
                    {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                );
                setAccount(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAccount();
    }, []);

    const openEditModal = () => {
        setEditModalIsOpen(true);
    };

    const closeEditModal = () => {
        setEditModalIsOpen(false);
    };

    const openDeleteModal = () => {
        setDeleteModalIsOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalIsOpen(false);
    };

    return (
        <React.Fragment>
            <Modal isOpen={editModalIsOpen} onRequestClose={closeEditModal}>
                <EditAccount data={account} closeModal={closeEditModal} />
            </Modal>
            <Modal isOpen={deleteModalIsOpen} onRequestClose={closeDeleteModal}>
                <DeleteAccountModal
                    closeModal={closeDeleteModal}
                    token={token}
                    accountId={accountId}
                    user={user}
                    accountName={accountName}
                    removeAccount={removeAccount}
                />
            </Modal>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <h1>{accountName}</h1>
                    <h2>${balance}</h2>
                    <p>{description}</p>
                    <ul>
                        {strategies && strategies.length !== 0
                            ? strategies.map((strategy) => (
                                  <li>{strategy.name}</li>
                              ))
                            : 'Cannot find any strategies for this account'}
                    </ul>
                    <button onClick={openEditModal}>Edit</button>
                    <button onClick={openDeleteModal}>Delete</button>
                </div>
            )}
        </React.Fragment>
    );
};

export default AccountDetails;
