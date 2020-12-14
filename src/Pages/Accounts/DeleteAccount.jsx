import React, { useState } from 'react';
import { removeAccount } from '../../Redux/Actions/accountActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

const DeleteAccount = (props) => {
    const { closeModal, data } = props;
    const { account_id, user_id, account_name } = data.account;
    const { token } = data;
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const API = process.env.REACT_APP_API;

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleDelete = async () => {
        try {
            history.replace(`/${user_id}/accounts/`);
            const response = await dispatch(
                removeAccount({
                    method: 'delete',
                    url: `${API}/api/account/${account_id}`,
                    auth: { Authorization: `Bearer ${token}` },
                }),
            );
            dispatch(closeModal);
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={closeModal}>X</button>
            <h1>{`You are trying to delete your ${account_name} account.`}</h1>
            <p>
                You are trying to delete this account. Once it is deleted, this
                action cannot be reversed. All trades associated with this
                account will be permanently deleted.
            </p>
            <form action=''>
                <label htmlFor='confirm-delete'>
                    Yes, I am sure I want to delete this account
                </label>
                <input
                    type='checkbox'
                    id='confirm-delete'
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

export default DeleteAccount;
