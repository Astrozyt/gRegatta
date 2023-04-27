const express = require('express')
const app = express()
const simPort = 3000
// const steeringPort = 3001

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/simulation/index.html')
})

app.post('/', (req, res) => {
    res.send({rudder: 90})
})

app.listen(simPort, () => {
  console.log(`Example app listening on port ${simPort}`)
})