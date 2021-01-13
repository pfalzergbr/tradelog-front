import React from 'react';

const TradeColumn = ({text, color}) => {
  return <td className={`trade-item__column ${color}`}>{text}</td>;
};

export default TradeColumn;
