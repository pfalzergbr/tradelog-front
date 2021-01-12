import React from 'react';

const TradeColumn = ({text, color}) => {
  console.log(color)

  return <span className={`column ${color}`}>{text}</span>;
};

export default TradeColumn;
