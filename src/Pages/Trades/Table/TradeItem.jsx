import React from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import TradeColumn from './TradeColumn';
import { useHistory } from 'react-router-dom';
import { calcTradeGain } from '../../../Services/statService';
import { setItemColor } from '../../../Services/Requests/setColorService';
import { tableAnimation } from '../../../Services/Animations/tableTransition';


const TradeItem = ({ data }) => {
  
  const {
    symbol,
    amount,
    date,
    bias,
    outcome,
    trade_id,
    strategy_name,
    snapshot_balance,
    currency_symbol,
  } = data;


  const history = useHistory();


  const color = setItemColor(outcome);
  const formattedDate = format(new Date(date), 'dd/M/Y');
  const formattedAmount = (amount > 0 ? '+' : '') + amount + currency_symbol;
  const gainPercentage = calcTradeGain(snapshot_balance, amount) + '%';

  const linkToTrade = () => {
    history.push(`/trade/${trade_id}`);
  };

  return (
      <motion.tr
        className='trade-item'
        onClick={linkToTrade}
        {...tableAnimation}>
        <TradeColumn color={color} text={symbol} />
        <TradeColumn color={color} text={strategy_name} />
        <TradeColumn color={color} text={bias} />
        <TradeColumn color={color} text={outcome} variant='trade-item__column--hidden' />
        <TradeColumn color={color} text={gainPercentage} />
        <TradeColumn color={color} text={formattedAmount} />
        <TradeColumn color={color} text={formattedDate} />
      </motion.tr>
  );
};

export default TradeItem;
