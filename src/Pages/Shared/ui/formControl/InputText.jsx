import React from 'react';
import ErrorMessage from '../../ErrorMessage';

const InputText = ({ label, type = 'text', placeholder, name, register, errors, step}) => {
  const placeHolderText = placeholder ? placeholder : label;

  return (
    <div className='form-control'>
      <label className='form__label' htmlFor={name}>
        {label}
      </label>
      <input
        className='form__input'
        type={type}
        name={name}
        placeholder={placeHolderText}
        ref={register}
      />
      {errors && errors[name] && <ErrorMessage message={errors[name].message} />}
    </div>
  );
};

export default InputText;
