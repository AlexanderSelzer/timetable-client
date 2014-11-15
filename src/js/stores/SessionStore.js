var extend = require("extend")
var Fluxxor = require("fluxxor")
var C = require("../constants")
var storage = require("../lib/storage")

var SessionStore = Fluxxor.createStore({
  initialize: function() {
    this.user = null
    this.token = null
    this.lastPull = null

    this.user = extend(this.user, JSON.parse(storage.get("session")))

    this.bindActions(
      C.LOGIN, this.onLogin,
      C.LOGIN_DONE, this.onLoginSuccess,
      C.LOGIN_FAIL, this.onLoginFail,
      C.LOGOUT, this.onLogout
    )

    this.on("change", function() {
      storage.set("session", JSON.stringify(this.user))
    })
  },
  onLogin: function() {
    console.log("attempting login")
  },
  onLoginFail: function(err) {
    console.log("fail", err)
  },
  onLoginSuccess: function(data) {
    this.token = data.token
    this.user = data.user
    this.emit("change")
  },
  onLogout: function() {
    this.token = null
    this.user = null
    this.emit("change")
  },
  getState: function() {
    return {
      token: this.token,
      user: this.user,
      lastPull: this.lastPull
    }
  }
})

module.exports = SessionStore
