var React = require('react')
var pin = require('linchpin')
var minesweeper = require('minesweeper')

// Enums
var CellStateEnum = minesweeper.CellStateEnum
var CellFlagEnum = minesweeper.CellFlagEnum

function cellState(cell) {
  if (cell.state === CellStateEnum.CLOSED) {
    if (cell.flag === CellFlagEnum.NONE) {
        return 'X'
    } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
        return '!'
    } else if (cell.flag === CellFlagEnum.QUESTION) {
        return '?'
    }
  } else if (cell.state === CellStateEnum.OPEN) {
     if (cell.isMine) {
       return '*'
     } else {
       return cell.numAdjacentMines === 0 ?
         ' ' :
         cell.numAdjacentMines.toString()
     }
  }
}

module.exports = React.createClass({
    handleClick() {
        var cell = this.props.cell
        var board = this.props.board
        board.openCell(cell.x, cell.y)
        pin.emit('repaint')
    },
    render() {
      return  <div className="col-md-1" onClick={this.handleClick}>
            {  cellState(this.props.cell) }
        </div>
    }
})
