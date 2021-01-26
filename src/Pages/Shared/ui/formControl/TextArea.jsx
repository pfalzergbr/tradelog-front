import React from 'react';
import ErrorMessage from '../../ErrorMessage';

const TextArea = ({ label, placeholder, name, register, errors }) => {
  const placeHolderText = placeholder ? placeholder : label;

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <textarea
        className={`form__input form__input--textarea ${errors[name] && 'form__input--error'}`}
        name={name}
        ref={register}
        placeholder={placeHolderText}
      />
      {errors && errors[name] && (
        <ErrorMessage message={errors[name].message} />
      )}
    </div>
  );
};

export default TextArea;
