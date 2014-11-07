require('es6-promise').polyfill();
require('fetch');

var DEBUG = true
var BASE = "http://localhost:8131"

module.exports = {
  login: function(name, password) {
    if (DEBUG) console.log("POST /login")
    return fetch(BASE + "/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": name,
        "password": password
      })
    }).then(function(res) {
      if (res.status !== 200) {
        return Promise.reject(res)
      }
      return res.json()
    }).catch(function(err) {
      console.log(err)
    })
  },
  getProfile: function(token) {
    if (DEBUG) console.log("POST /login")
    return fetch(BASE + "/user", {
      headers: {
        "Authorization": "Bearer" + " " + token
      }
    }).then(function(res) {
      if (res.status !== 200) {
        return Promise.reject(res)
      }
      return res.json()
    }).catch(function(err) {
      console.log(err)
    })
  }
}
