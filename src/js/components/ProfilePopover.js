/*
  @jsx React.DOM
*/

var React = require("react")

var ProfilePopover = React.createClass({
  getInitialState: function() {
    return {
      hidden: true
    }
  },
  render: function() {
    var css = {}
    css.display = "block"
    css.position = "absolute"
    css.top = 62
    css.right = 6
    css.height = 180
    css.width = 240

    if (this.state.hidden) {
      css.display = "none"
    }

    var caretStyle = {
      position: "absolute",
      right: 52,
      top: -12
    }

    return (
      <div onClick={this.nothing} style={css} className="profile-popover">
        <div style={caretStyle} className="caret-up"></div>

        <div>{this.props.user.name}</div>

        <div>{this.props.user.email}</div>

        <button onClick={this.props.onLogout} className="logout">logout</button>

      </div>
    )
  },
  toggle: function() {
    this.setState({hidden: !this.state.hidden})
  },
  nothing: function(e) {
    e.stopPropagation()
  }
})

module.exports = ProfilePopover
