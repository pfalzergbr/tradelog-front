export const tradeFilter = (trades, filterType, filter) => {
  trades.filter(trade => trade[filterType] === filter)
}
