import React from 'react';

const TradeItem = props => {
  // const { _id, symbol, outcome, amount, date, description, strategy, accountId, userId, createdAt} = props.data
  return <div>{props.data.symbol}</div>;
};

export default TradeItem;
