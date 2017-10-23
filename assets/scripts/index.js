'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const ui = require('./auth/ui.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const gameEvents = require('../scripts/auth/events.js')

$(() => {
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#change-password').on('submit', gameEvents.onChangePassword)
  $('#log-out').on('click', gameEvents.onLogOut)
  $('.gameBoard').hide()
  $('#reset').hide()
  $('#history').hide()
  $('#new-game').hide()
  $('#log-out').hide()
  $('#change-password').hide()
  $('#new-game').click(gameEvents.newGame)
  $('#new-game').click(ui.gameSuccess)
  $('#reset').click(gameEvents.newGame)
  $('#history').click(gameEvents.pastGames)
})
