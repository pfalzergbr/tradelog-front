import React from 'react';

const TradeColumn = ({ text, color, variant = '' }) => {
  return <td className={`trade-item__column ${color} ${variant}`}>{text}</td>;
};

export default TradeColumn;
