var p1R = 0
var p1G = 255
var p1B = 0

var p2R = 0
var p2G = 0
var p2B = 255

var p1Width = 50
var p2Width = 50


function tug() {
  p1G -= 15
  p1R += 15

  p2B -= 15
  p2G += 15

  p1Width -= 3
  p2Width += 3

  document.getElementById("player1").style.width = Math.max(p1Width, 0) + "vw"
  document.getElementById("player2").style.width = Math.min(p2Width, 100) + "vw"
  document.getElementById("player1").style.backgroundColor = 'rgb(' + p1R + ',' + p1G + ',' + p1B + ')'
  document.getElementById("player2").style.backgroundColor = 'rgb(' + p2R + ',' + p2G + ',' + p2B + ')'
}

setInterval(function () {
  if (p1Width < 100) {
    var min = 1;
    var max = 8;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;

    p1Width += random
    p2Width -= random

    p1G += random * 5
    p1R -= random * 5

    p2B += random * 5
    p2G -= random * 5

    document.getElementById("player1").style.width = Math.min(p1Width, 100) + "vw"
    document.getElementById("player2").style.width = Math.max(p2Width, 0) + "vw"
    document.getElementById("player1").style.backgroundColor = 'rgb(' + p1R + ',' + p1G + ',' + p1B + ')'
    document.getElementById("player2").style.backgroundColor = 'rgb(' + p2R + ',' + p2G + ',' + p2B + ')'
  }
  else {
    document.getElementById("player1").innerHTML = "You Lose!"
    var tugB = document.getElementById("tug-btn")
    tugB.setAttribute('disabled', "")
  }
}, 400)