'use strict'
const app = require('./app.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  app.user = data.user
  // console.log(app.user.id) this shows user#
  console.log('this is working')
}

const signInFailure = (error) => {
  console.log(error)
}

const changePasswordSuccess = (data) => {
  console.log('data')
}

const changePasswordFailure = (error) => {
  console.log(error)
}

const logoutSuccess = () => {
  app.user = null
  console.log('it log off') // not working yet
}

const logoutFailure = (error) => {
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
  logoutFailure
}
