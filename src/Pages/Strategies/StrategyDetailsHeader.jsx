import React from 'react';

const StrategyDetailsHeader = () => {
  return (
    <div className='page-header page-header--details'>
      <div className='page-header__title-container'>
        <h3 className='page-header__title'>All trades</h3>
        <h4 className='page-header__value'>No strategy selected</h4>
      </div>
      <p className='page-header__paragraph'>Select a strategy on the side menu to filter your trades.</p>
      <div className='page-header__button-container'>
        <button className='btn btn--primary'>
          New Trade
        </button>
        <button className='btn btn--secondary'>
          Edit Strategy
        </button>
        <button className='btn btn--secondary'>
          Delete Strategy
        </button>
      </div>
    </div>
  );
};

export default StrategyDetailsHeader;
