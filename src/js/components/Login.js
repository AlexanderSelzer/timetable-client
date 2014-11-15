/*
  @jsx React.DOM
*/

var React = require("react")
var Router = require("react-router")
var api = require("../utils/api.js")

var Fluxxor = require("fluxxor")
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var LoginView = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("SessionStore")],
  getInitialState: function() {
    return {
      username: null,
      password: null
    }
  },
  getStateFromFlux: function() {
    return {session: this.getFlux().store("SessionStore").getState()}
  },
  render: function() {
    var css = {
      backgroundImage: "url(images/login-bg.jpg)"
    }
    return (
      <div className="login-view" style={css}>
        <div className="login-form">
          <div className="title">Timetable Login</div>
          <input type="text" value={this.state.username} id="username" placeholder="username" />
          <input type="password" value={this.state.username} id="password" placeholder="password" />

          <button onClick={this.login}>Login</button>
        </div>
      </div>
    )
  },
  login: function() {
    var login = this.getFlux().actions.login

    var user = this.state.username || "alex"
    var pass = this.state.password || "pass"

    login({username: user, password: pass})
  }
})

module.exports = LoginView
