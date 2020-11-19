import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAxios } from '../../Hooks/useAxios';

const DeleteTradeModal = (props) => {
    const { closeModal, token, tradeId, user } = props;
    const [ isChecked, setIsChecked ] = useState(false);
    const { isLoading, sendRequest } = useAxios();
    const history = useHistory();

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleDelete = async () => {
        try {
            const response = await sendRequest(
                `http://localhost:3000/api/trades/${tradeId}`,
                'DELETE',
                {},

                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            );
            history.replace(`/${user.userId}/trades/`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={closeModal}>X</button>
            <h1>Warning!</h1>
            <p>
                Please only delete the trade if you had an input mistake.
                Deleting trades from your record changes your statistics, and
                distorts your real performance.{' '}
            </p>
            <p>
                Note: You cannot reverse this action once you deleted the trade
            </p>
            <form action=''>
                <label htmlFor='confirm-mistake'>
                    Yes, I want to delete this trade
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
