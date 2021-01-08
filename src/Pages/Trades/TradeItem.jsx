import React from 'react';

const TradeItem = props => {
  // const { _id, symbol, outcome, amount, date, description, strategy, accountId, userId, createdAt} = props.data
  return (
    <div>
      <span>{props.data.symbol}</span>
      <span>{props.data.amount}</span>
    </div>
  );
};

export default TradeItem;
