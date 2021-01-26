import React from 'react';

const CheckBox = ({label, name, register}) => {
  return (
    <div className='form-control form-control--checkbox'>
      <input 
      className={`form__input form__input--checkbox`}
      name={name} type='checkbox' ref={register} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckBox;
