import React from 'react';
import ErrorMessage from '../../ErrorMessage';

const TextArea = ({label, placeholder, name, register, errors }) => {
  const placeHolderText = placeholder ? placeholder : label;

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} ref={register} placeholder={placeHolderText}/>
      {errors && errors.symbol && <ErrorMessage message={errors.description.message} />}
    </div>
  );

};

export default TextArea;
