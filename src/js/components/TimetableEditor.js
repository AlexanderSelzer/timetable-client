/*
  @jsx React.DOM
*/

var React = require("react")

var TextInput = require("./TextInput")

var TimetableEditor = React.createClass({
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
        <TextInput label="name" value={tt.name} />
        <TextInput label="id" value={tt.id} />
        <TextInput label="data" value={tt.data} />
      </div>
    )
  }
})

module.exports = TimetableEditor
