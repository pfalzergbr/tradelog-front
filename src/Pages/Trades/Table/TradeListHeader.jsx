import React from 'react';

//TODO - implement a loop to build columns automatically.
//TODO - Build in Sorting
const TradeListHeader = () => {
  return (
    <thead>
      <tr className='table-header'>
        <th className='table-header__column'>Symbol</th>
        <th className='table-header__column'>Strategy</th>
        <th className='table-header__column'>Bias</th>
        <th className='table-header__column'>Profit/Loss</th>
        <th className='table-header__column'>Date</th>
      </tr>
    </thead>
  );
};

export default TradeListHeader;
