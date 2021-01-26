import React from 'react';
import ErrorMessage from '../../ErrorMessage';

const Select = ({
  name,
  label,
  optionsArray,
  register,
  optionValue = 'optionValue',
  optionName = 'optionName',
  errors,
}) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <select className='form__input' name={name} ref={register}>
        {optionsArray &&
          optionsArray.map(option => (
            <option key={option[optionValue]} value={option[optionValue]}>
              {option[optionName]}
            </option>
          ))}
      </select>
      {errors && errors[name] && (
        <ErrorMessage message={errors[name].message} />
      )}
    </div>
  );
};

export default Select;
