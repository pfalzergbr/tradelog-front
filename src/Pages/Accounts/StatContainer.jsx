import React from 'react';

const StatContainer = ({ text, value = 0, type }) => {
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
      <h4>{text}</h4>
      <span className={resultColor}>{`${value || 0}${unit}`}</span>
    </div>
  );
};

export default StatContainer;
