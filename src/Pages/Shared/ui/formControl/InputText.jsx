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
        className={`form__input ${errors && errors[name] && 'form__input--error'}`}
        type={type}
        name={name}
        placeholder={placeHolderText}
        ref={register}
        step="0.01"
      />
      {errors && errors[name] && <ErrorMessage message={errors[name].message} />}
    </div>
  );
};

export default InputText;
