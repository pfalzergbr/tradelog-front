import React from 'react';

const Select = ({name, label, optionsArray, register, optionValue, optionName}) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <select name={name} ref={register}>
        {optionsArray &&
          optionsArray.map(option => (
            <option key={option[optionValue]} value={option[optionValue]}>
              {option[optionName]}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
