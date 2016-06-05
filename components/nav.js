var React = require('react')

var minesweeper = require('minesweeper')
var BoardStateEnum = minesweeper.BoardStateEnum

function description (boardState) {
    if (boardState === BoardStateEnum.PRISTINE) {
        return 'Ready'
    } else if (boardState === BoardStateEnum.IN_PROGRESS) {
        return 'In Progress'
    } else if (boardState === BoardStateEnum.LOST) {
        return 'You Lose'
    } else if (boardState === BoardStateEnum.WON) {
        return 'You Won'
    }
}

module.exports = function (props) {
  return <div className="navbar navbar-light bg-faded">
    <a className="navbar-brand" href="#">{props.title}</a>
    <div className="pull-xs-right">
      <div className="label label-success">
        { description(props.board.state())}
      </div>
    </div>
  </div>
}
