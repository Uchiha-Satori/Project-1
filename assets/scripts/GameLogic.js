'use strict'
const x = 'x'
const o = 'o'
let turn = 0
let oWin = 0
let xWin = 0
const spot1 = $('.spot1')
const spot2 = $('.spot2')
const spot3 = $('.spot3')
const spot4 = $('.spot4')
const spot5 = $('.spot5')
const spot6 = $('.spot6')
const spot7 = $('.spot7')
const spot8 = $('.spot8')
const spot9 = $('.spot9')

const message = function (msg) {
  $('#message').text(msg)
}

$('.gameBoard .row .box').on('click', function (event) {
  const $box = $(event.currentTarget)
  $box.addClass('boxX boxO') // need to find a way to switch this to boxO
  if ((spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o')) ||
      (spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o')) ||
      (spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o')) ||
      (spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o')) ||
      (spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o')) ||
      (spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o')) ||
      (spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o')) ||
      (spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o'))
  ) {
    message('O Wins!')
    // $('.gameBoard').text('+')
    $('.gameBoard').removeClass('disable')
    $('.gameBoard').removeClass('o')
    $('.gameBoard').removeClass('x')
  } else if ((spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x')) ||
        (spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x')) ||
        (spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x')) ||
        (spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x')) ||
        (spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x')) ||
        (spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x')) ||
        (spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x')) ||
        (spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x'))
  ) {
    message('X Wins!')
    // $('.gameBoard').text('+')
    $('.gameBoard').removeClass('disable')
    $('.gameBoard').removeClass('o')
    $('.gameBoard').removeClass('x')
  } else if (turn === 8) { // maybe === should be == ???
    message('Tie Game!')
    // $('.gameBoard').text('+')
    $('.gameBoard').removeClass('disable')
    $('.gameBoard').removeClass('o')
    $('.gameBoard').removeClass('x')
    turn = 0
  } else if ($(this).hasClass('disable')) {
    message('This spot is already filled')
  } else if (turn % 2 === 0) {
    turn++
    $(this).text(x)
    $(this).addClass('disable x')
    if ((spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x')) ||
        (spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x')) ||
        (spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x')) ||
        (spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x')) ||
        (spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x')) ||
        (spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x')) ||
        (spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x')) ||
        (spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x'))
    ) {
      message('X Wins!')
      turn = 0
      xWin++
      $('#xWin').text(xWin)
    }
  } else {
    turn++
    $(this).text(o)
    $(this).addClass('disable o')
    if ((spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o')) ||
    (spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o')) ||
    (spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o')) ||
    (spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o')) ||
    (spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o')) ||
    (spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o')) ||
    (spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o')) ||
    (spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o'))
    ) {
      message('O Wins!')
      turn = 0
      oWin++
      $('#oWin').text(oWin)
    }
  }
})
$('#reset').on('click', function () {
  $(spot1).removeClass('boxO boxX disable o x')
  $(spot1).html('') // .html clears the content of box
  $(spot2).removeClass('boxO boxX disable o x')
  $(spot2).html('')
  $(spot3).removeClass('boxO boxX disable o x')
  $(spot3).html('')
  $(spot4).removeClass('boxO boxX disable o x')
  $(spot4).html('')
  $(spot5).removeClass('boxO boxX disable o x')
  $(spot5).html('')
  $(spot6).removeClass('boxO boxX disable o x')
  $(spot6).html('')
  $(spot7).removeClass('boxO boxX disable o x')
  $(spot7).html('')
  $(spot8).removeClass('boxO boxX disable o x')
  $(spot8).html('')
  $(spot9).removeClass('boxO boxX disable o x')
  $(spot9).html('')
  // $('message').removeClass('disable') find a way to reset message later
  turn = 0
})

module.export = true
