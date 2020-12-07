import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Modal from 'react-modal';

import DeleteModal from '../Components/Modals/DeleteModal'
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

    //Data to pass in the Delete Modal
    const modalData = {
        header: `You are trying to delete your ${accountName} account.`,
        message:  'You are trying to delete this account. Once it is deleted, this action cannot be reversed. All trades associated with this account will be permanently deleted.',
        label: 'Yes, I am sure I want to delete this account.',
        button: 'Delete'
    }

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

    const handleDelete = async () => {
        try {
            const response = await sendRequest(
                `http://localhost:3000/api/user/accounts/${accountId}`,
                'DELETE',
                {},

                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            );
            console.log(response)
            removeAccount(response.data._id)
            closeDeleteModal()
            history.replace(`/${user.userId}/accounts/`);
        } catch (error) {
            console.log(error);
        }
    };


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
                <DeleteModal
                    closeModal={closeDeleteModal}
                    onDelete={handleDelete}
                    modalData={modalData}
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
