import React from 'react';
import { format } from 'date-fns';
import TradeColumn from './TradeColumn';
import { useHistory } from 'react-router-dom';

const TradeItem = ({data, currency}) => {
  const { symbol, amount, date, bias, outcome, trade_id, strategy_name } = data;
  const history = useHistory()


  const setItemColor = outcome => {
    switch (outcome) {
      case 'loss':
        return 'red';
      case 'profit':
        return 'green';
      case 'breakeven':
        return '';
      default:
        return '';
    }
  };
  const color = setItemColor(outcome);
  const formattedDate = format(new Date(date), 'dd/M/Y');
  const formattedAmount = (amount >= 0 ? '+' : '') + amount + '$';

  const linkToTrade = () => {
    history.push(`/trade/${trade_id}`);
  }

  return (
    <tr className='trade-item' onClick={linkToTrade}>
        <TradeColumn color={color} text={symbol} />
        <TradeColumn color={color} text={strategy_name} />
        <TradeColumn color={color} text={bias} />
        <TradeColumn color={color} text={outcome} />
        <TradeColumn color={color} text={formattedAmount} />
        <TradeColumn color={color} text={formattedDate} />
    </tr>
  );
};

export default TradeItem;
