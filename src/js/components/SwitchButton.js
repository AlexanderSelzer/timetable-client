/*
  @jsx React.DOM
*/

var React = require("react")

var Button = require("./Button")

var SwitchButton = React.createClass({
  propTypes: {
    labels: React.PropTypes.array,
    enabled: React.PropTypes.bool,
    onChange: React.PropTypes.func
  },
  getInitialState: function() {
    var enabled = true
    if (this.props.enabled === false)
      enabled = false

    return {
      labels: this.props.labels,
      enabled: enabled,
      labelIndex: 0,
      selectedLabel: this.props.labels[0]
    }
  },
  render: function() {
    return (
      <div className="switch-button">
        <Button label={this.state.selectedLabel} enabled={this.state.enabled} onClick={this.onClick} />
      </div>
    )
  },
  onClick: function() {
    this.setState({
      selectedLabel: this.state.labels[(this.state.labelIndex + 1) % this.state.labels.length],
      labelIndex: (this.state.labelIndex + 1) % this.state.labels.length
    })

    if (this.props.onSelect) {
      this.props.onSelect(this.state.selectedLabel)
    }
  }
})

module.exports = SwitchButton
