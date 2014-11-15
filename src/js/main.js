/*
 * Copyright © (c) 2014 Alexander Selzer <aselzer3@gmail.com>
 * @jsx React.DOM
 */
var React = require("react")
var Fluxxor = require("fluxxor")
var Router = require("react-router")

var Route = Router.Route
var Routes = Router.Routes
var Link = Router.Link

var FluxMixin = Fluxxor.FluxMixin(React)
var StoreWatchMixin = Fluxxor.StoreWatchMixin

/* Components */
var Login = require("./components/Login.js")
var Main = require("./components/Main.js")

/* Actions */
var actions = require("./actions")

/* Stores */
var SessionStore = require("./stores/SessionStore")

var stores = {
  SessionStore: new SessionStore()
}

var flux = new Fluxxor.Flux(stores, actions)

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

var App = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("SessionStore")],
  getStateFromFlux: function() {
    return this.getFlux().store("SessionStore").getState()
  },
  render: function() {
    var Route = this.state.user && this.state.user.name ?
      Main : Login

    return (
      <Route flux={flux} />
    )
  }
})

var routes = (
  <Routes>
    <Route handler={App} location="hash">
      <Route name="login" handler={Login} />
      <Route handler={Main} />
    </Route>
  </Routes>
)

React.render(<App flux={flux}/>, document.getElementById("app"))
