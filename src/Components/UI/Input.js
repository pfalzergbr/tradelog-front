import React from 'react';

const Input = (props) => {
    const { name, label, ref, message, onBlur } = props
    console.log(props)
    return (
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <input name={name} ref={ref} onBlur={onBlur}/>
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </React.Fragment>
    );
};

export default Input;
