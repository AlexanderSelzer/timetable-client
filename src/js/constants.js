function makeConstants(list) {
  var obj = {}
  list.forEach(function(item) {
    obj[item] = item
  })
  return obj
}

module.exports = makeConstants([
  "LOGIN",
  "LOGIN_DONE",
  "LOGIN_FAIL",
  "LOGOUT",

  "LOAD_TIMETABLE_DATA",
  "LOAD_TIMETABLE_DATA_DONE",

  "ADD_TIMETABLE",
  "DELETE_TIMETABLE"
  ])
