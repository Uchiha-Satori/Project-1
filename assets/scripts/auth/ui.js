'use strict'
const app = require('./app.js')
const api = require('./api.js')
// api.name // stephen
const message = function (msg) {
  $('#message').text(msg)
}

const gameSuccess = () => {
  $('.gameBoard').show()
  $('#reset').show()
  $('#history').show()
}

const signUpSuccess = (data) => {
  message('Sign Up Success')
  $('#change-password').show()
}

const signUpFailure = () => {
  message('Sign Up Failure Username taken or incorrect matching password')
}

const signInSuccess = (data) => {
  message('Sign In Success, Click NEW GAME')
  app.user = data.user
  api.game()
  $('#new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#log-out').show()
}

const signInFailure = () => {
  message('Incorrect Password or Username')
}

const changePasswordSuccess = (data) => {
  message('Password Changed')
}

const changePasswordFailure = () => {
  message('Error, Try Again, Password Not Changed')
}

const logoutSuccess = () => {
  app.user = null
  message('Log Out Success')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#log-out').hide()
  $('.gameBoard').hide()
  $('#reset').hide()
  $('#history').hide()
}

const logoutFailure = () => {
  message('Log Out Fail')
}

const movesLogged = (data) => {
}

const movesNotLogged = () => {
}

const onNewGameSuccess = (data) => {
  $('#new-game').hide()
  app.game = data.game
  app.game.id = data.game.id
}

const onNewGameFailure = (data) => {
}

const getSuccess = function (data) {
  $('#message').html('Games Played:' + data.games.length)
}

const getFail = () => {
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  logoutSuccess,
  logoutFailure,
  movesLogged,
  movesNotLogged,
  onNewGameSuccess,
  onNewGameFailure,
  gameSuccess,
  getFail,
  getSuccess
}
