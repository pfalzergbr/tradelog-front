import React from 'react';

const CardHeader = ({accountName, relativeGain}) => {
  return (
    <div className='card__header'>
      <h2 className='card-title'>{accountName}</h2>
      <div>
        <span
          className={`card__relative-gain ${
            relativeGain >= 0 ? 'green' : 'red'
          }`}>
          {relativeGain}%
        </span>
      </div>
    </div>
  );
};

export default CardHeader;
