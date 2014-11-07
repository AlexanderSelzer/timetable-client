/*
  @jsx React.DOM
*/

var React = require("react")
var api = require("../utils/api.js")

var LoginView = React.createClass({
  getInitialState: function() {
    return {
      username: null,
      password: null
    }
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
    console.log("login")
    var user = this.state.username || "alex"
    var pass = this.state.password || "pass"
    api.login(user, pass).then(function(data) {
      console.log(data)
      var token = data.token

      api.getProfile(token).then(function(data) {
        console.log(data)
      })
    })
  }
})

module.exports = LoginView
