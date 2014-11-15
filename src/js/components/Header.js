/*
  @jsx React.DOM
*/

var React = require("react")

var ProfilePopover = require("./ProfilePopover")

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <div onClick={this.showProfile} className="profile">
          <span className="name">{this.props.user.name}</span>
          <ProfilePopover onLogout={this.props.onLogout} user={this.props.user} ref="popover"/>
        </div>
      </div>
    )
  },
  showProfile: function() {
    this.refs.popover.toggle()
  }
})

module.exports = Header
