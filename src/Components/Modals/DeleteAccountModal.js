import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAxios } from '../../Hooks/useAxios';

const DeleteTradeModal = (props) => {
    const { closeModal, token, accountId, user, accountName } = props;
    const [isChecked, setIsChecked] = useState(false);
    const { isLoading, sendRequest } = useAxios();
    const history = useHistory();

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

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
            history.replace(`/${user.userId}/accounts/`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>You are trying to delete your {accountName} account.</h1>
            <p>
                You are trying to delete this account. Once it is deleted, this
                action cannot be reversed. All trades associated with this
                account will be permanently deleted.
            </p>

            <form action=''>
                <label htmlFor='confirm-mistake'>
                    Yes, I am sure I want to delete this account. 
                </label>
                <input
                    type='checkbox'
                    id='confirm-mistake'
                    checked={isChecked}
                    onChange={handleChange}
                />
            </form>
            <button disabled={!isChecked} onClick={handleDelete}>
                Delete
            </button>
            <button onClick={closeModal}>Cancel</button>
        </div>
    );
};

export default DeleteTradeModal;
