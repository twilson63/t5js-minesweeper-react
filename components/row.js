var React = require('react')

var CellComponent = require('./cell')

module.exports = function (props) {
  return <div className="row">
    { props.row.map(cell =>
      <CellComponent cell={cell} board={props.board} />
    )}
  </div>
}
