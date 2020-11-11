import React from 'react';

const Input = ({ name, label, ref, message }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} ref={ref} />
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </div>
    );
};

export default Input;
