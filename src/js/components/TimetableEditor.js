/*
  @jsx React.DOM
*/

var React = require("react")

var Button = require("./Button")
var TextInput = require("./TextInput")
var SwitchButton = require("./SwitchButton")

var TimetableEditor = React.createClass({
  getInitialState: function() {
    if (this.props.timetable) {
      return {
        timetable: this.props.timetable
      }
    }
    else {
      return {timetable: null}
    }
  },
  render: function() {
    console.log(this.state)
    var timetable = this.state.timetable
    if (!timetable) {
      return (
        <div className="timetable-editor">
        </div>
      )
    }

    return (
      <div className="timetable-editor">
        <SwitchButton labels={["this", "that"]} />
        {/*}<div className="title">Editor</div>*/}
        <TextInput label="name" value={timetable.name} onChange={this.onValuesChange} />
        {/*}<TextInput label="id" value={timetable.id} onChange={this.onValuesChange} />
        <TextInput label="data" value={timetable.data} onChange={this.onValuesChange} />*/}

        <Button label="Save" onClick={this.saveData} />
      </div>
    )
  },
  onValuesChange: function(data) {
    var timetable = this.state.timetable
    timetable[data.label] = data.value
    this.setState({timetable: timetable})
  },
  saveData: function() {

  }
})

module.exports = TimetableEditor
