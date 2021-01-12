import React from 'react';
import { format } from 'date-fns';
import TradeColumn from './TradeColumn';

const TradeItem = props => {
  const {symbol, amount, date, bias, outcome} = props.data;

  const setItemColor = (outcome) => {
    switch (outcome) {
      case 'loss':
        return 'red'
      case 'profit':
        return 'green';
      case 'breakeven':
        return ''
      default: 
        return ''
    }
  }
  const color = setItemColor(outcome);
  const formattedDate = format(new Date(date), 'dd/M');
  const formattedAmount = (amount >= 0 ? '+' : '') + amount + '$' 

  // const { _id, symbol, outcome, amount, date, description, strategy, accountId, userId, createdAt} = props.data
  return (
    <div className="trade-item">
      <TradeColumn color={color} text={symbol}/>
      <TradeColumn color={color} text='strategy'/>
      <TradeColumn color={color} text={bias}/>
      <TradeColumn color={color} text={formattedAmount}/>
      <TradeColumn color={color} text={formattedDate}/>
    </div>
  );
};

export default TradeItem;
