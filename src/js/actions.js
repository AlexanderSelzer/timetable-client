var C = require("./constants")
var api = require("./utils/api")

var actions = {
  login: function(credentials) {
    var a = this
    a.dispatch(C.LOGIN)
    api.login(credentials.username, credentials.password).then(function(token) {
      api.getProfile(token).then(function(user) {
        a.dispatch(C.LOGIN_DONE, {token: token, user: user})
      }).catch(function(err) {
        a.dispatch(C.LOGIN_FAIL, err)
      })
    }).catch(function(err) {
      a.dispatch(C.LOGIN_FAIL, err)
    })
  },
  logout: function() {
    this.dispatch(C.LOGOUT)
  }
}
module.exports = actions
