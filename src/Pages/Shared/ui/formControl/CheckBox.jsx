import React from 'react';

const CheckBox = ({label, name, register}) => {
  return (
    <div className='form-control form-control--checkbox'>
      <input name={name} type='checkbox' ref={register} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckBox;
