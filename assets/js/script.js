let scoreHome = 0
let scoreGuest = 0

//Increments Home
function incrementOneHome() {
  scoreHome += 1
  document.getElementById("score-home").textContent = scoreHome
}
function incrementTwoHome() {
  scoreHome += 2
  document.getElementById("score-home").textContent = scoreHome
}
function incrementThreeHome() {
  scoreHome += 3
  document.getElementById("score-home").textContent = scoreHome
}

//Increments Guest
function incrementOneGuest() {
  scoreGuest += 1
  document.getElementById("score-guest").textContent = scoreGuest
}
function incrementTwoGuest() {
  scoreGuest += 2
  document.getElementById("score-guest").textContent = scoreGuest
}
function incrementThreeGuest() {
  scoreGuest += 3
  document.getElementById("score-guest").textContent = scoreGuest
}

//New game reset
function resetCounter() {
  scoreHome = 0
  document.getElementById("score-home").textContent = scoreHome
  scoreGuest = 0
  document.getElementById("score-guest").textContent = scoreGuest
}