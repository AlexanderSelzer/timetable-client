/*
  @jsx React.DOM
*/

var React = require("react")

var Button = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },
  render: function() {
    var enabled = true
    if (this.props.enabled === false)
      enabled = false

    var label = this.props.label || ""

    var classes = ""
    if (!enabled) {
      classes += " button-disabled"
    }

    return (
      <button className={classes} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
})

module.exports = Button

/**
Example:

React.createClass({
  render: function() {
    return (
      <Button label="yes?" onClick={this.saidYes} />
    )
  },
  saidYes: function() {
    alert("thanks")
  }
})

*/
