var extend = require("extend")
var Fluxxor = require("fluxxor")
var C = require("../constants")
var storage = require("../lib/storage")

var SessionStore = Fluxxor.createStore({
  initialize: function() {
    this.data = {
      user: null,
      token: null,
      lastPull: null
    }

    this.data = extend(this.data, JSON.parse(storage.get("session")))

    this.bindActions(
      C.LOGIN, this.onLogin,
      C.LOGIN_DONE, this.onLoginSuccess,
      C.LOGIN_FAIL, this.onLoginFail,
      C.LOGOUT, this.onLogout
    )

    this.on("change", function() {
      storage.set("session", JSON.stringify(this.data))
    })
  },
  onLogin: function() {
    console.log("attempting login")
  },
  onLoginFail: function(err) {
    console.log("fail", err)
  },
  onLoginSuccess: function(data) {
    console.log("LOGIN_DONE", data)
    this.data.token = data.token
    this.data.user = data.user
    this.emit("change")
  },
  onLogout: function() {
    this.data.token = null
    this.data.user = null
    this.emit("change")
  },
  getState: function() {
    return this.data
  }
})

module.exports = SessionStore
