/*
  @jsx React.DOM
*/

var React = require("react")

var TimetableList = React.createClass({
  getInitialState: function() {
    return {
      selected: false
    }
  },
  render: function() {
    var css = {}
    if (this.state.selected) {
      css.backgroundColor = "rgb(156, 183, 206)"
      //css.color = "rgb(232, 236, 237)"
    }
    return (
      <div style={css} onClick={this.onTimetableClick} className="timetable">
        <span className="name">{this.props.timetable.name}</span>
      </div>
    )
  },
  setSelected: function(selected) {
    this.setState({
      selected: selected
    })
  },
  onTimetableClick: function() {
    // only call select when the timetable was deselected
    if (!this.state.selected) {
      this.props.onTimetableSelect(this.props.timetable)
    }
    // toggle timetable select
    this.setState({
      selected: !this.state.selected
    })
  }
})

module.exports = TimetableList
