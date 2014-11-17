/*
  @jsx React.DOM
*/

var React = require("react")

var TimetableListItem = require("./TimetableListItem")

var TimetableList = React.createClass({
  render: function() {
    var self = this
    var props = this.props

    var list = []

    this.props.user.timetables.forEach(function(timetable) {
      list.push(
        <TimetableListItem ref={timetable.id} onTimetableSelect={self.onTimetableSelect} timetable={timetable}/>
      )
    })

    return (
      <div className="timetable-list">
      <div className="title">Timetables</div>
        {list}
      </div>
    )
  },
  onTimetableSelect: function(timetable) {
    this.props.onTimetableSelect(timetable)

    var refs = this.refs
    this.props.user.timetables.forEach(function(timetable) {
      refs[timetable.id].setSelected(false)
    })
  }
})

module.exports = TimetableList
