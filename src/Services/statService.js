export const calcWinPercentage = (numOfWins = 0, numOfLoss = 0) => {
  const totalTrades = numOfWins + numOfLoss;
  const winPercentage = ((numOfWins / totalTrades) * 100).toFixed(0);
  if (winPercentage === 'NaN'){
    return 0
  }
  return winPercentage
};


export const calcRelativeGain = (openingBalance = 0, currentBalance = 0) => {
  const pnl = currentBalance - openingBalance;
  const relativeGain = ((pnl / openingBalance) * 100).toFixed(2)
  if (relativeGain === 'NaN'){
    return 0
  }
  return relativeGain;
}

export const calcTradeGain = (snapshotBalance, tradeAmount) => {
  const relativeGain = ((tradeAmount / snapshotBalance) * 100).toFixed(2)
  if (relativeGain === 'NaN'){
    return 0
  }
  return relativeGain;
}