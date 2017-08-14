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
  console.log(data)
}

const signUpFailure = (error) => {
  message('Sign Up Failure Username taken or incorrect matching password')
  console.log(error)
}

const signInSuccess = (data) => {
  message('Sign In Success, Click NEW GAME')
  app.user = data.user
  api.game()
    .then($('#new-game').show()) // gameSuccess used to be in here.
    .catch(function () {
      console.log('game failed to load')
    })
  // console.log(app.user.id) this shows user#

  console.log('this is working')
}

const signInFailure = (error) => {
  console.log(error)
  message('Incorrect Password or Username')
}

const changePasswordSuccess = (data) => {
  message('Password Changed')
  console.log(data)
}

const changePasswordFailure = (error) => {
  message('Error, Try Again, Password Not Changed')
  console.log(error)
}

const logoutSuccess = () => {
  app.user = null
  message('Log Out Success')
  $('.gameBoard').hide()
  console.log('it log off') // not working yet
}

const logoutFailure = (error) => {
  message('Log Out Fail')
  console.log(error)
}

const movesLogged = (data) => {
  console.log(data)
}

const movesNotLogged = (error) => {
  console.log(error)
}

const onNewGameSuccess = (data) => {
  $('#new-game').hide()
  app.game = data.game
  app.game.id = data.game.id
  console.log(data)
}

const onNewGameFailure = (data) => {
  console.log(data)
}

const getSuccess = function (data) {
  $('#message').html('Games Played:' + data.games.length)
  console.log(data)
}

const getFail = (error) => {
  console.error(error)
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
