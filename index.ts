const express = require('express')
const app = express()
const PF = require('pathfinding');
const simPort = 3000
app.use(express.static(__dirname + '/simulation'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    res.send({rudder: 90})
})

app.post('/astar', (req, res) => {
  res.send({path: AStarPath})
})

app.listen(simPort, () => {
  console.log(`Example app listening on port ${simPort}`)
})

const grid = new PF.Grid(1900, 200); 

const finder = new PF.AStarFinder({
    allowDiagonal: true,
    dontCrossCorners: true
});

const AStarPath = finder.findPath(1800, 100, 100, 50, grid);

console.log('PATH: '+AStarPath);