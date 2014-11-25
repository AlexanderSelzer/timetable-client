/*
  @jsx React.DOM
*/

var React = require("react")

var TextInput = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      label: this.props.label,
      value: this.props.value,
    }
  },
  render: function() {
    return (
      <div className="text-input">
        <div className="label">{this.state.label}</div>
        <input type="text" onChange={this.onChange} value={this.state.value} className="value"></input>
      </div>
    )
  },
  onChange: function(e) {
    this.setState({
      value: e.target.value
    })

    if (this.props.onChange) {
      this.props.onChange({
        label: this.state.label,
        value: this.state.value
      })
    }
  }
})

module.exports = TextInput

/**
Example:

React.createClass({
  getInitialState: function() {
    return {
      name: "alex",
      email: "aselzer3@gmail.com"
    }
  },
  render: function() {
    return (
      <TextInput label="name" value={this.state.name} onChange={this.onInputChange} />
      <TextInput label="email" value={this.state.email} onChange={this.onInputChange} />
    )
  },
  onInputChange: function(data) {
    console.log("label:", data.label, "value:", data.value)
    this.setState(data)
  }
})

*/
