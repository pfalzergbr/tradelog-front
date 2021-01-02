export const calcWinPercentage = ( numOfWins, numOfLoss ) => {
    const totalTrades = parseFloat(numOfWins) + parseFloat(numOfLoss);
    return (parseFloat(numOfWins) / totalTrades) * 100;
}