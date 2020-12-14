import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Modal from 'react-modal';

import { removeAccount } from '../../Redux/Actions/accountActions';
import DeleteModal from '../Shared/DeleteModal';
import EditAccount from './EditAccount';
import Loading from '../Shared/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Actions/modalActions'
const API = process.env.REACT_APP_API;

const AccountDetails = () => {
    const { accountId } = useParams();
    const history = useHistory();
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [strategyModalIsOpen, setStrategyModalIsOpen] = useState(false);
    //Selectors
    const { token, user } = useSelector((state) => state.auth);
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
    const modalData = {
        header: `You are trying to delete your ${accountName} account.`,
        message:
            'You are trying to delete this account. Once it is deleted, this action cannot be reversed. All trades associated with this account will be permanently deleted.',
        label: 'Yes, I am sure I want to delete this account.',
        button: 'Delete',
    };
    console.log('WE ARE ON ACCOUNT DETAILS');

    const handleDelete = async () => {
        try {
            history.replace(`/${user.userId}/accounts/`);
            const response = await dispatch(
                removeAccount({
                    method: 'delete',
                    url: `${API}/api/account/${accountId}`,
                    auth: { Authorization: `Bearer ${token}` },
                }),
            );
            closeDeleteModal();
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    const openEditModal = () => {
        dispatch(openModal('editAccount', { account } ))
        // setEditModalIsOpen(true);
    };

    // const closeEditModal = () => {
    //     setStrategyModalIsOpen(false);
    // };
    const openStrategyModal = () => {
        setStrategyModalIsOpen(true);
    };

    const closeStrategyModal = () => {
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
            {// <Modal
            //     appElement={document.getElementById('app')}
            //     isOpen={editModalIsOpen}
            //     onRequestClose={closeEditModal}>
            //     <EditAccount data={account} closeModal={closeEditModal} />
            // </Modal>
            }<Modal
                appElement={document.getElementById('app')}
                isOpen={strategyModalIsOpen}
                onRequestClose={closeStrategyModal}>

            </Modal>
            <Modal
                appElement={document.getElementById('app')}
                isOpen={deleteModalIsOpen}
                onRequestClose={closeDeleteModal}>
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
