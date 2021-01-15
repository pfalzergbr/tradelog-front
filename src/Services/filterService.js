export const tradeFilter = (trades, filterType, filter) => {
  if (filter){
    return trades.filter(trade => trade[filterType] === filter)
  }
  return trades
}
