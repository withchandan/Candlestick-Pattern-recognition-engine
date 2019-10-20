const { csvParser } = require('./csvParser')
const { writeToCsv } = require('./writeToCsv')
const { getHammerCandles } = require('./getHammerCandles')

const filterHammerPattern = async () => {
  const { data, header, err } = await csvParser()
  if (err) {
    console.log(err)
    return
  }

  const hammerCandles = getHammerCandles(data)

  const write = await writeToCsv(header, hammerCandles)
  if (write) {
    console.log('File written successfully.')
  } else {
    console.log('An error occurred while writing the file.')
  }
}

filterHammerPattern()
