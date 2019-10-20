const fs = require('fs')

const writeToCsv = (header, body) => {
  const data = `${header.join(',')}\n${body
    .map(e => Object.values(e).join(','))
    .join('\n')}`

  return new Promise(res =>
    fs.writeFile('hammerCandle.csv', data, (err, data) => {
      if (err) {
        return res(false)
      }

      return res(true)
    }),
  )
}

module.exports = { writeToCsv }
