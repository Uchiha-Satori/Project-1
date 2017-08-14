'use strict'
const app = require('./app.js')
const config = require('../config.js')

const signUp = (data) => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data /* {
      'passwords': {
        'old': data.passwords.old,
        'new': data.passwords.new
      }
    } */
  })
}

const userLogout = () => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

const game = () => {
  console.log(config.apiOrigin)
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com/games/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST'
  })
}

const userMoves = function (index, value, over) {
  console.log(app.game.id)
  console.log(app.user.token)
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com//games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token // store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

module.exports = {
  signIn,
  signUp,
  changePassword,
  userLogout,
  userMoves,
  game
}
