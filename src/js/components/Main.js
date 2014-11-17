/*
  @jsx React.DOM
*/

var React = require("react")
var Router = require("react-router")
var api = require("../utils/api.js")

var Header = require("./Header")
var TimetableList = require("./TimetableList")
var TimetableEditor = require("./TimetableEditor")

var Fluxxor = require("fluxxor")
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var MainView = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("SessionStore")],
  getInitialState: function() {
    return {
      currentSelected: null
    }
  },
  getStateFromFlux: function() {
    return {
      session: this.getFlux().store("SessionStore").getState()
    }
  },
  componentWillMount: function() {
    if (!this.state.currentSelected && this.state.session.user.timetables.length > 0) {
      this.setState({
        currentSelected: this.state.session.user.timetables[0]
      })
    }
  },
  render: function() {
    console.log(this.state)
    return (
      <div className="app-view">
        <Header onLogout={this.onLogout} user={this.state.session.user} />
        <div className="container">
          <TimetableList user={this.state.session.user} onTimetableSelect={this.onTimetableSelect} />
          <TimetableEditor timetable={this.state.currentSelected}/>
        </div>
      </div>
    )
  },
  onTimetableSelect: function(timetable) {
    this.setState({
      currentSelected: timetable
    })
  },
  onLogout: function() {
    this.getFlux().actions.logout()
  }
})

module.exports = MainView
