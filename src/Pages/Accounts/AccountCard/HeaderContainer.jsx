import React from 'react';
import { Icon } from '@iconify/react';
import bxsUpArrowSquare from '@iconify/icons-bx/bxs-up-arrow-square';

//TODO: Add icons and extract green-red logic.

const CardHeader = ({ accountName, relativeGain }) => {

  const valueColor = relativeGain >= 0 ? 'green' : 'red';
  const arrowDirection = relativeGain >= 0 ? false : true;
  

  return (
    <div className='card-header'>

        <h2 className='card-header__title'>{accountName}</h2>
        <div className='card-header__value-group'>
          { relativeGain !== 0 && <Icon
            icon={bxsUpArrowSquare}
            className={`card-header__arrow-icon--${valueColor}`}
            style={{ fontSize: '18px' }}
            vFlip={arrowDirection}
          />}
          <span className={`card-header__value ${valueColor}`}>
            {relativeGain > 0 ? '+' : null}{relativeGain}%
          </span>
        </div>
    </div>
  );
};

export default CardHeader;
