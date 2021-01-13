import React from 'react';

const CardStatContainer = ({ text, value = 0, type }) => {
  const getResultColor = (type, value) => {
    if (type === 'amount') {
      return value < 0 ? 'red' : 'green';
    }
    return '';
  };

  const getUnit = type => {
    if (type === 'amount') {
      return '$';
    } else if (type === 'percentage') {
      return '%';
    } else {
      return '';
    }
  };

  const resultColor = getResultColor(type, value);
  const unit = getUnit(type);

  //TODO - Add currencies and +/- signs. Add a div around the span for styling
  // Todo - Fix nulls from server side, and remove edge case
  return (
    <div className='stat-container'>
      <h4 className='card-body__title'>{text}</h4>
      <span className={`card-body__value ${resultColor}`}>{`${unit}${
        Math.round(value) || 0
      }`}</span>
    </div>
  );
};

export default CardStatContainer;
