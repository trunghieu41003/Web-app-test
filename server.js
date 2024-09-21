const express = require('express')
const app = express()
const port = process.env
const hostname= 'localhost'
require('dotenv').config()

//khai báo route
app.get('/abc', (req, res) => {
  res.send('This is Hieu D')
})


app.get('/123', (req, res) => {
  res.send('<h1>This is Hieu DDDD</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})