import React from 'react';

const StatContainer = ({
  text,
  value = 0,
  type,
  variant = 'card-body',
  containerClass = 'stat-container',
  currency
}) => {
  const getResultColor = (type, value) => {
    if (type === 'amount') {
      return value < 0 ? 'red' : 'green';
    }
    return '';
  };
  const getUnit = (type, currency) => {
    const currencyMap = {
      usd: '$',
      gbp: '£',
      eur: '€',
      jpy: '¥'
    }
    if (type === 'amount') {
      return currencyMap[currency];
    } else if (type === 'percentage') {
      return '%';
    } else {
      return '';
    }
  };

  const resultColor = getResultColor(type, value);
  const unit = getUnit(type, currency);

  //TODO - Add currencies and +/- signs. Add a div around the span for styling
  // Todo - Fix nulls from server side, and remove edge case
  return (
    <div className={containerClass}>
      <h4 className={`${variant}__title`}>{text}</h4>
      <span
        className={`${variant}__value ${
          value !== 0 ? resultColor : null
        }`}>{`${unit}${Math.round(value) || 0}`}</span>
    </div>
  );
};

export default StatContainer;
