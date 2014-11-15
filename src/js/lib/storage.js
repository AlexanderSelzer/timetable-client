/* sessionStorage alternative that doesn't fail in FF without cookies */

var storage = {}

storage.getItem = function(key) {
  var res
  try {
    console.log("[Storage] using sessionStorage")
    res = window.sessionStorage.getItem(key)
  }
  catch (err) {
    try {
      console.log("[Storage] using localStorage")
      res = window.localStorage.getItem(key)
    }
    catch (err2) {
      console.log("[Storage] using variables")
      res = this[key]
    }
  }
  return res
}
storage.get = storage.getItem

storage.setItem = function(key, value) {
  try {
    sessionStorage.setItem(key, value)
  }
  catch (err) {
    try {
      window.localStorage.setItem(key, value)
    }
    catch (err2) {
      this[key] = value
    }
  }
}
storage.set = storage.setItem

module.exports = storage
