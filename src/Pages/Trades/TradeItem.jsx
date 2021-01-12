import React from 'react';
import { format } from 'date-fns';

const TradeItem = props => {
  const {symbol, amount, date} = props.data;

  // const { _id, symbol, outcome, amount, date, description, strategy, accountId, userId, createdAt} = props.data
  return (
    <div>
      <span>{symbol}</span>
      <span>{amount}</span>
      <span>{format(new Date(date), 'dd/M')}</span>
    </div>
  );
};

export default TradeItem;
