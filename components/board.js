var React = require('react')

var RowComponent = require('./row')

module.exports = function (props) {
  return <div className="container">
    { props.board.grid().map(row =>
      <RowComponent row={row} board={props.board} />
    )}
  </div>
}
