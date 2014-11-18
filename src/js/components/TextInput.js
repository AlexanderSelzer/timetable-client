/*
  @jsx React.DOM
*/

var React = require("react")

var TextInput = React.createClass({
  render: function() {
    var label = this.props.label
    var value = this.props.value

    return (
      <div className="text-input">
        <div className="label">{label}</div>
        <div onChange={this.props.onValueChange} className="value">{value}</div>
      </div>
    )
  }
})

module.exports = TextInput
