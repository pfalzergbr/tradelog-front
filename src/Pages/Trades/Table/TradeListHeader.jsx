import React, { useState } from 'react';
import TradeListHeaderColumn from './TradeListHeaderColumn';

const TradeListHeader = ({ handleSort }) => {
  const [activeColumn, setActiveColumn] = useState('');

  return (
    <thead className='table-header'>
      <tr className='table-header__row'>
        <TradeListHeaderColumn value='symbol' text='Symbol' />
        <TradeListHeaderColumn value='strategy' text='Strategy' />
        <TradeListHeaderColumn value='bias' text='Bias' />
        <TradeListHeaderColumn value='outcome' text='Outcome' variant='table-header__column--hidden'/>
        <TradeListHeaderColumn
          setActiveColumn={setActiveColumn}
          activeColumn={activeColumn}
          handleSort={handleSort}
          value='relative_gain'
          text='Relative Gain'
        />
        <TradeListHeaderColumn
          setActiveColumn={setActiveColumn}
          activeColumn={activeColumn}
          handleSort={handleSort}
          value='amount'
          text='Profit/Loss'
        />
        <TradeListHeaderColumn
          setActiveColumn={setActiveColumn}
          activeColumn={activeColumn}
          handleSort={handleSort}
          value='date'
          text='Date'
        />
      </tr>
    </thead>
  );
};

export default TradeListHeader;
