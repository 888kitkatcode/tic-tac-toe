var parentBox = document.querySelector('.mainBoard')
var player_X = 'X'
var player_O = 'O'
var playerTurn = player_X

// Allowing 2 players to take it in turns
parentBox.addEventListener('click', function(event) {
    if (playerTurn == player_X && event.target.tagName === 'DIV' && event.target.textContent == '') {
        event.target.textContent = player_X
        playerTurn = player_O
    } else if (playerTurn == player_O && event.target.tagName === 'DIV' && event.target.textContent == '') {
        event.target.textContent = player_O
        playerTurn = player_X
    } else {
        playerTurn = false
    }
})

var boxOne = document.querySelector('#box1')
var boxTwo = document.querySelector('#box2')
var boxThree = document.querySelector('#box3')
var boxFour = document.querySelector('#box4')
var boxFive = document.querySelector('#box5')
var boxSix = document.querySelector('#box6')
var boxSeven = document.querySelector('#box7')
var boxEight = document.querySelector('#box8')
var boxNine = document.querySelector('#box9')

var winnerTag= document.querySelector('.winner')
var resetBtn = document.querySelector('#reset-button')

// Winning combinations
parentBox.addEventListener('click', function(event) {
    if (boxOne.textContent != '' && boxOne.textContent == boxTwo.textContent && boxTwo.textContent == boxThree.textContent && boxOne.textContent == boxThree.textContent) {
        boxOne.style.backgroundColor = 'red'
        boxTwo.style.backgroundColor = 'red'
        boxThree.style.backgroundColor = 'red'
        playerTurn = false
        winnerTag.textContent = 'PLAYER ' + boxOne.textContent + ' WINS!'
        resetBtn.textContent = 'PLAY AGAIN'
        // alert('PLAYER ' + boxOne.textContent + ' WINS')
    } else if (boxFour.textContent != '' && boxFour.textContent == boxFive.textContent && boxFive.textContent == boxSix.textContent && boxFour.textContent == boxSix.textContent) {
        boxFour.style.backgroundColor = 'red'
        boxFive.style.backgroundColor = 'red'
        boxSix.style.backgroundColor = 'red'
        playerTurn = false
        winnerTag.textContent = 'PLAYER ' + boxFour.textContent + ' WINS!'
        resetBtn.textContent = 'PLAY AGAIN'
        // alert('PLAYER ' + boxFour.textContent + ' WINS')
    } else if (boxSeven.textContent != '' && boxSeven.textContent == boxEight.textContent && boxEight.textContent == boxNine.textContent && boxSeven.textContent == boxNine.textContent) {
        boxSeven.style.backgroundColor = 'red'
        boxEight.style.backgroundColor = 'red'
        boxNine.style.backgroundColor = 'red'
        playerTurn = false
        winnerTag.textContent = 'PLAYER ' + boxSeven.textContent + ' WINS!'
        resetBtn.textContent = 'PLAY AGAIN'
        // alert('PLAYER ' + boxSeven.textContent + ' WINS')
    } else if (boxOne.textContent != '' && boxOne.textContent == boxFour.textContent && boxFour.textContent == boxSeven.textContent && boxOne.textContent == boxSeven.textContent) {
        boxOne.style.backgroundColor = 'red'
        boxFour.style.backgroundColor = 'red'
        boxSeven.style.backgroundColor = 'red'
        playerTurn = false
        winnerTag.textContent = 'PLAYER ' + boxOne.textContent + ' WINS!'
        resetBtn.textContent = 'PLAY AGAIN'
        // alert('PLAYER ' + boxOne.textContent + ' WINS')
    } else if (boxTwo.textContent != '' && boxTwo.textContent == boxFive.textContent && boxFive.textContent == boxEight.textContent && boxTwo.textContent == boxEight.textContent) {
        boxTwo.style.backgroundColor = 'red'
        boxFive.style.backgroundColor = 'red'
        boxEight.style.backgroundColor = 'red'
        playerTurn = false
        winnerTag.textContent = 'PLAYER ' + boxTwo.textContent + ' WINS!'
        resetBtn.textContent = 'PLAY AGAIN'
        // alert('PLAYER ' + boxTwo.textContent + ' WINS')
    } else if (boxThree.textContent != '' && boxThree.textContent == boxSix.textContent && boxSix.textContent == boxNine.textContent && boxThree.textContent == boxNine.textContent) {
        boxThree.style.backgroundColor = 'red'
        boxSix.style.backgroundColor = 'red'
        boxNine.style.backgroundColor = 'red'
        playerTurn = false
        winnerTag.textContent = 'PLAYER ' + boxThree.textContent + ' WINS!'
        resetBtn.textContent = 'PLAY AGAIN'
        // alert('PLAYER ' + boxThree.textContent + ' WINS')
    } else if (boxOne.textContent != '' && boxOne.textContent == boxFive.textContent && boxFive.textContent == boxNine.textContent && boxOne.textContent == boxNine.textContent) {
        boxOne.style.backgroundColor = 'red'
        boxFive.style.backgroundColor = 'red'
        boxNine.style.backgroundColor = 'red'
        playerTurn = false
        winnerTag.textContent = 'PLAYER ' + boxOne.textContent + ' WINS!'
        resetBtn.textContent = 'PLAY AGAIN'
        // alert('PLAYER ' + boxOne.textContent + ' WINS')
    } else if (boxThree.textContent != '' && boxThree.textContent == boxFive.textContent && boxFive.textContent == boxSeven.textContent && boxThree.textContent == boxSeven.textContent) {
        boxThree.style.backgroundColor = 'red'
        boxFive.style.backgroundColor = 'red'
        boxSeven.style.backgroundColor = 'red'
        playerTurn = false
        winnerTag.textContent = 'PLAYER ' + boxThree.textContent + ' WINS!'
        resetBtn.textContent = 'PLAY AGAIN'
        // alert('PLAYER ' + boxThree.textContent + ' WINS')
    } else if (boxOne.textContent != '' && boxTwo.textContent != '' && boxThree.textContent != '' && boxFour.textContent != '' && boxFive.textContent != '' && boxSix.textContent != '' && boxSeven.textContent != '' && boxEight.textContent != '' && boxNine.textContent != '') {
        boxOne.style.backgroundColor = 'blue'
        boxTwo.style.backgroundColor = 'blue'
        boxThree.style.backgroundColor = 'blue'
        boxFour.style.backgroundColor = 'blue'
        boxFive.style.backgroundColor = 'blue'
        boxSix.style.backgroundColor = 'blue'
        boxSeven.style.backgroundColor = 'blue'
        boxEight.style.backgroundColor = 'blue'
        boxNine.style.backgroundColor = 'blue'
        winnerTag.textContent = "IT'S A DRAW!"
        resetBtn.textContent = 'PLAY AGAIN'
    }
})

// Reset button
resetBtn.addEventListener('click', function(event) {
    boxOne.style.backgroundColor = 'purple'
    boxTwo.style.backgroundColor = 'purple'
    boxThree.style.backgroundColor = 'purple'
    boxFour.style.backgroundColor = 'purple'
    boxFive.style.backgroundColor = 'purple'
    boxSix.style.backgroundColor = 'purple'
    boxSeven.style.backgroundColor = 'purple'
    boxEight.style.backgroundColor = 'purple'
    boxNine.style.backgroundColor = 'purple'
    boxOne.textContent = ''
    boxTwo.textContent = ''
    boxThree.textContent = ''
    boxFour.textContent = ''
    boxFive.textContent = ''
    boxSix.textContent = ''
    boxSeven.textContent = ''
    boxEight.textContent = ''
    boxNine.textContent = ''
    resetBtn.textContent = 'RESET'
    playerTurn = player_X
    winnerTag.textContent = 'PLAYER X STARTS THE GAME! GO!'
  })

// Keep count of who has won


// var winningCombinations = [
//     {combo1: [box1, box2, box3]},
    // {combo2: [box4, box5, box6]},
//     {combo3: [box7, box8, box9]},
    // {combo4: [box1, box4, box7]},
    // {combo5: [box2, box5, box8]},
    // {combo6: [box3, box6, box9]},
    // {combo6: [box1, box5, box9]},
    // {combo7: [box3, box5, box7]}
// ]
