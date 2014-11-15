/*
  @jsx React.DOM
*/

var React = require("react")

var TimetableList = React.createClass({
  render: function() {

    var list = []

    this.props.user.timetables.forEach(function(timetable) {
      list.push(
        <div className="timetable">
          <span className="name">{timetable.name}</span>
        </div>
      )
    })

    return (
      <div className="timetable-list">
        {list}
      </div>
    )
  }
})

module.exports = TimetableList
