const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! bye!')
})

app.get('/home', (req, res) => {
  res.send('This is A Home!')
})

app.get('/cart', (req, res) => {
  res.send('This is A Cart!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})