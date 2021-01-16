import React, { useRef } from 'react';

const InputText = ({ label, placeholder, name, register }) => {
  const placeHolderText = placeholder ? placeholder : label;
  // const registerRef = useRef();

  return (
    <div className='form-control'>
      <label className='form__label' htmlFor={name}>
        {label}
      </label>
      <input
        className='form__input'
        name={name}
        placeholder={placeHolderText}
        ref={register}
      />
    </div>
  );
};

export default InputText;
