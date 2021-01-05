export const calcWinPercentage = (numOfWins = 0, numOfLoss = 0) => {
  const totalTrades = parseFloat(numOfWins) + parseFloat(numOfLoss);
  return ((parseFloat(numOfWins) / totalTrades) * 100).toFixed(2);
};
