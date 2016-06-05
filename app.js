/* app goes here */
var pin = require('linchpin')
var minesweeper = require('minesweeper')

var React = require('react')
var ReactDOM = require('react-dom')

var NavComponent = require('./components/nav')
var BoardComponent = require('./components/board')

var title = 'CodeCamp Minesweeper 2'

var board = null

pin.on('new_game', _ => {
  ma = minesweeper.generateMineArray({
    rows: 10,
    cols: 10,
    mines: 15
  })
  board = new minesweeper.Board(ma)
  render()
})

pin.on('repaint', render)

pin.emit('new_game')

function render() {
  ReactDOM.render(
    <div className="container">
      <NavComponent title={title} board={board} />
      <BoardComponent board={board} />
    </div>,
    document.getElementById('app')
  )
}

render()
