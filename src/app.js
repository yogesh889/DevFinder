const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:userId/:name', (req, res) =>{
  console.log(req.params);
  res.send({firstName: "yogesh", lastName: "Sangeviya"});
})

app.use('/about', (req, res) => {
  res.send("about api requested")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
