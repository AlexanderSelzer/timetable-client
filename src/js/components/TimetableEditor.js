/*
  @jsx React.DOM
*/

var React = require("react")

var TimetableList = React.createClass({
  render: function() {
    var tt = this.props.timetable

    if (!tt) {
      return (
        <div className="timetable-editor">
        </div>
      )
    }

    return (
      <div className="timetable-editor">
        <div className="title">Editor</div>
        <div>Name: {tt.name}</div>
        <div>Id: {tt.id}</div>
        <div>Data: {tt.data}</div>
      </div>
    )
  }
})

module.exports = TimetableList
