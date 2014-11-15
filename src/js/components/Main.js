/*
  @jsx React.DOM
*/

var React = require("react")
var Router = require("react-router")
var api = require("../utils/api.js")

var Header = require("./Header")
var TimetableList = require("./TimetableList")

var Fluxxor = require("fluxxor")
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var MainView = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("SessionStore")],
  getStateFromFlux: function() {
    return this.getFlux().store("SessionStore").getState()
  },
  render: function() {
    console.log(this.state)
    return (
      <div className="app-view">
        <Header onLogout={this.onLogout} user={this.state.user} />
        <TimetableList user={this.state.user} />
      </div>
    )
  },
  onLogout: function() {
    this.getFlux().actions.logout()
  }
})

module.exports = MainView
