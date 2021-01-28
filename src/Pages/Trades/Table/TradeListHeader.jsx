import React from 'react';
import TradeListHeaderColumn from './TradeListHeaderColumn';

//TODO - implement a loop to build columns automatically.
//TODO - Build in Sorting
const TradeListHeader = ({ handleSort }) => {
  return (
    <thead className='table-header'>
      <tr className='table-header__row'>
        <TradeListHeaderColumn value='symbol' text='Symbol' />
        <TradeListHeaderColumn value='strategy' text='Strategy' />
        <TradeListHeaderColumn value='bias' text='Bias' />
        <TradeListHeaderColumn value='outcome' text='Outcome' />
        <TradeListHeaderColumn
          handleSort={handleSort}
          value='relative_gain'
          text='Relative Gain'
        />
        <TradeListHeaderColumn
          handleSort={handleSort}
          value='amount'
          text='Profit/Loss'
        />
        <TradeListHeaderColumn
          handleSort={handleSort}
          value='date'
          text='Date'
        />
      </tr>
    </thead>
  );
};

export default TradeListHeader;
