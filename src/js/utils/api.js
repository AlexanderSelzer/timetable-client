require('es6-promise').polyfill();
require('fetch');

var DEBUG = true
var BASE = "http://localhost:8131"

module.exports = {
  /**
  * returns one token
  */
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
      return res.json().then(function(data) {
        return data.token
      })
    }).catch(function(err) {
      console.log(err)
    })
  },
  /**
  * Returns a user object
  */
  getProfile: function(token) {
    if (DEBUG) console.log("POST /profile")
    return fetch(BASE + "/user", {
      headers: {
        "Authorization": "Bearer" + " " + token
      }
    }).then(function(res) {
      if (res.status !== 200) {
        return Promise.reject(res)
      }
      return res.json().then(function(body) {
        if (body.status !== "success") {
          return Promise.reject(body.msg)
        }
        return body.data
      })
    }).catch(function(err) {
      console.log(err)
    })
  }
}
