import React from 'react';
import TradeColumn from './TradeColumn';

const TradeItemPlaceholder = () => {
  const color = ''
  const text = ''
  return ( 
    <tr className='trade-item trade-item--empty'>
    <TradeColumn color={color} text={text} />
    <TradeColumn color={color} text={text} />
    <TradeColumn color={color} text={text} />
    <TradeColumn color={color} text={text} />
    <TradeColumn color={color} text={text} />
    <TradeColumn color={color} text={text} />
    <TradeColumn color={color} text={text} />
</tr>
   );
}
 
export default TradeItemPlaceholder;