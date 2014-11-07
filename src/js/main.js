/*
 * Copyright © (c) 2014 Alexander Selzer <aselzer3@gmail.com>
 * @jsx React.DOM
 */
var React = require("react")

/* Components */
var LoginView = require("./components/LoginView.js")

var App = React.createClass({
  getInitialState: function() {
    return {}
  },

  render: function() {
    if (false) {

    }
    else {
      return <LoginView />
    }
  }
})


React.render(<App />, document.getElementById("app"))
