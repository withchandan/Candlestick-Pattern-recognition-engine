const getHammerCandles = data =>
  data.filter(e => {
    const high = +e.high
    const low = +e.low
    const open = +e.open
    const close = +e.close

    if (high && low && open && close) {
      if (high === close && open !== close) {
        const candle = high - low
        const body = high - open
        const candleThirtyPercent = (candle * 30) / 100
        const candleFivePercent = (candle * 5) / 100

        return (
          (body < candleThirtyPercent && body > candleFivePercent) ||
          body === candleThirtyPercent
        )
      }

      if (high === open && open !== close) {
        const candle = high - low
        const body = high - close
        const candleThirtyPercent = (candle * 30) / 100
        const candleFivePercent = (candle * 5) / 100

        return (
          (body < candleThirtyPercent && body > candleFivePercent) ||
          body === candleThirtyPercent
        )
      }
    }

    return false
  })

module.exports = { getHammerCandles }
