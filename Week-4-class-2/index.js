const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello Amith, How are you?</h1>')
})

app.listen(3000)