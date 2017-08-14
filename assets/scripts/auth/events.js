const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onLogOut = function (event) {
  event.preventDefault()
  api.userLogout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFailure)
}

const updateGame = function (index, value, over) {
  api.userMoves(index, value, over)
    .then(ui.movesLogged)
    .catch(ui.movesNotLogged)
}

const newGame = function () {
  event.preventDefault()
  api.game()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onLogOut,
  updateGame,
  newGame
}
