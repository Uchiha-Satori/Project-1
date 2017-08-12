'use strict'
const app = require('./app.js')
const message = function (msg) {
  $('#message').text(msg)
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
  message('Sign In Success, Good Luck!!!')
  $('.gameBoard').show()
  app.user = data.user
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
  movesNotLogged
}
