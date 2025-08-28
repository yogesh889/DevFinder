const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/user', (req, res) =>{
  res.send("user API Requested");
})

app.use('/about', (req, res) => {
  res.send("about api requested")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
