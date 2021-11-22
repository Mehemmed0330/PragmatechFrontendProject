function birthdayCakeCandles(candles) {
    // Write your code here
    const max = Math.max(...candles)
    const result = candles.filter(candle => candle == max);
    return result.length


}
console.log(birthdayCakeCandles([3, 3, 2, 1]))