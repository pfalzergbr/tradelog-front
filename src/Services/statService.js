export const calcWinPercentage = (numOfWins = 0, numOfLoss = 0) => {
  const totalTrades = parseFloat(numOfWins) + parseFloat(numOfLoss);
  const winPercentage = ((parseFloat(numOfWins) / totalTrades) * 100).toFixed(2);
  if (winPercentage === 'NaN'){
    return 0
  }
  return winPercentage
};


export const calcRelativeGain = (openingBalance = 0, currentBalance = 0) => {
  const pnl = parseFloat(currentBalance) - parseFloat(openingBalance);
  const relativeGain = ((pnl / parseFloat(openingBalance)) * 100).toFixed(2)
  if (relativeGain === 'NaN'){
    return 0
  }
  return relativeGain;
}