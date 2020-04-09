import markdownlint from '../lib/markdownlint.js'
import * as fs from 'fs'
import JSON5 from 'json5'

const options = {
  files: [
    // './temp.md'
    'README.md'
  ]
}

options.config = markdownlint.readConfig('./markdownlint.json', [JSON5.parse], (err, res) => {
  if (err) console.log(err)
  options.config = res
  markdownlint(options, (err, result) => {
    // console.log(options.config)
    if (err) throw err
    console.log(result.toString())
    fs.writeFile('./tempres', JSON.stringify(result, null, 2), (err) => {
      if (err) throw err
    })
  })
})
