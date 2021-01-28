export const parseTrade = trade => {
  const currencyMap = {
    usd: '$',
    gbp: '£',
    eur: '€',
    jpy: '¥',
  };

  const parsedTrade = {
    ...trade,
    amount: parseFloat(trade.amount),
    date: new Date(trade.date),
    currency_symbol: currencyMap[trade.currency],
    snapshot_balance: parseFloat(trade.snapshot_balance),
    relative_gain: parseFloat(trade.relative_gain),
    created_at: new Date(trade.created_at),
  };
  return parsedTrade;
};