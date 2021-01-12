import React from 'react';


//TODO - implement a loop to build columns automatically.
//TODO - Build in Sorting
const TradeListHeader = (props) => {
  return ( <div>
      <span className="column">Symbol</span>
      <span className="column">Strategy</span>
      <span className="column">Bias</span>
      <span className="column">Profit/Loss</span>
      <span className="column">Date</span>
    </div> );
}
 
export default TradeListHeader;