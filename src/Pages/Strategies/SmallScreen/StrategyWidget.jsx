import React from 'react';
import Button from '../../Shared/ui/Button';

const StrategyWidget = () => {
  return (
    <div className='widget widget--strategy'>
      <div className='widget__container'>
        <h4 className='widget__title'>Strategy</h4>
        <p className='widget__value'>250$</p>
      </div>
      <div className="widget__button-container">
        <Button buttonStyle='outline'>Details</Button>
      </div>
    </div>
  );
};

export default StrategyWidget;
