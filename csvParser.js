const fs = require('fs')

const csvParser = () =>
  new Promise(res =>
    fs.readFile('./data.csv', { encoding: 'utf-8' }, (err, rows) => {
      if (err) {
        return res({
          data: [],
          err: 'An error occurred while reading the file.',
        })
      }

      const rowsInArray = rows.split('\n')
      const header = rowsInArray
        .shift()
        .split(',')
        .filter(h => h !== 'adj_close' && h !== 'volume')

      const data = rowsInArray.map(row =>
        row.split(',').reduce((acc, curr, index) => {
          const key = header[index]
          if (key) {
            acc[header[index]] = curr
          }

          return acc
        }, {}),
      )

      return res({ data, header, err: '' })
    }),
  )

module.exports = { csvParser }
