import React, { useState } from 'react';

const DeleteTradeModal = (props) => {
    const { closeModal, modalData, onDelete} = props;
    const { header, message, note, label, button } = modalData
    const [ isChecked, setIsChecked ] = useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div>
        <button onClick={closeModal}>X</button>
            <h1>{header}</h1>
            <p> {message}</p>
            <p>{note}</p>
            <form action=''>
                <label htmlFor='confirm-delete'>
                    {label}
                </label>
                <input
                    type='checkbox'
                    id='confirm-delete'
                    checked={isChecked}
                    onChange={handleChange}
                />
            </form>
            <button disabled={!isChecked} onClick={onDelete}>
                {button}
            </button>
            <button onClick={closeModal}>Cancel</button>
        </div>
    );
};

export default DeleteTradeModal;
