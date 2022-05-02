var parentBox = document.querySelector('.mainBoard')
var player_X = 'X'
var player_O = 'O'
var playerTurn = player_X
var gameStatus = document.querySelector('h3')

// Allowing 2 players to take it in turns
parentBox.addEventListener('click', function(event) {
    if (playerTurn == player_X && event.target.tagName === 'DIV' && event.target.textContent == '') {
        event.target.textContent = player_X
        event.target.classList = 'player_X'
        playerTurn = player_O
        gameStatus.textContent = 'GAME ON!'
    } else if (playerTurn == player_O && event.target.tagName === 'DIV' && event.target.textContent == '') {
        event.target.textContent = player_O
        event.target.classList = 'player_O'
        playerTurn = player_X
        gameStatus.textContent = 'GAME ON!'
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

var winnerTag = document.querySelector('.winner')
var resetBtn = document.querySelector('#reset-button')
var playerXLabel = document.querySelector('.playerXLabel')
var playerXCounter = document.querySelector('.playerXScore')
var playerOLabel = document.querySelector('.playerOLabel')
var playerOCounter = document.querySelector('.playerOScore')
var instructionsTag = document.querySelector('.instructions')

// Winning combinations
parentBox.addEventListener('click', function(event) {
    if (boxOne.textContent != '' && boxOne.textContent == boxFour.textContent && boxFour.textContent == boxSeven.textContent && boxSeven.textContent == boxEight.textContent && boxEight.textContent == boxNine.textContent) {
        boxOne.className = 'box-1'
        boxFour.className = 'box-4'
        boxSeven.className = 'box-7'
        boxEight.className = 'box-8'
        boxNine.className = 'box-9'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxOne.textContent + '. YOU WIN TWO POINTS IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN TWO POINTS IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 2)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        }
        playerTurn = false
    } else if (boxOne.textContent != '' && boxOne.textContent == boxTwo.textContent && boxTwo.textContent == boxThree.textContent && boxThree.textContent == boxSix.textContent && boxSix.textContent == boxNine.textContent) {
        boxOne.className = 'box-1'
        boxTwo.className = 'box-2'
        boxThree.className = 'box-3'
        boxSix.className = 'box-6'
        boxNine.className = 'box-9'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxOne.textContent + '. YOU WIN TWO POINTS IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN TWO POINTS IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 2)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        }
        playerTurn = false
    } else if (boxOne.textContent != '' && boxOne.textContent == boxTwo.textContent && boxTwo.textContent == boxThree.textContent && boxOne.textContent == boxThree.textContent) {
        // boxOne.style.backgroundColor = 'red'
        // boxTwo.style.backgroundColor = 'red'
        // boxThree.style.backgroundColor = 'red'
        boxOne.className = 'box-1'
        boxTwo.className = 'box-2'
        boxThree.className = 'box-3'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxOne.textContent + '. YOU WIN ONE POINT IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 1)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        } 
        else if (winnerTag.textContent == 'GREETINGS, PLAYER O. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 0)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 1)
        }
        playerTurn = false
    } else if (boxFour.textContent != '' && boxFour.textContent == boxFive.textContent && boxFive.textContent == boxSix.textContent && boxFour.textContent == boxSix.textContent) {
        // boxFour.style.backgroundColor = 'red'
        // boxFive.style.backgroundColor = 'red'
        // boxSix.style.backgroundColor = 'red'
        boxFour.className = 'box-4'
        boxFive.className = 'box-5'
        boxSix.className = 'box-6'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxFour.textContent + '. YOU WIN ONE POINT IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 1)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        } 
        else if (winnerTag.textContent == 'GREETINGS, PLAYER O. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 0)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 1)
        }
        playerTurn = false
    } else if (boxSeven.textContent != '' && boxSeven.textContent == boxEight.textContent && boxEight.textContent == boxNine.textContent && boxSeven.textContent == boxNine.textContent) {
        // boxSeven.style.backgroundColor = 'red'
        // boxEight.style.backgroundColor = 'red'
        // boxNine.style.backgroundColor = 'red'
        boxSeven.className = 'box-7'
        boxEight.className = 'box-8'
        boxNine.className = 'box-9'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxSeven.textContent + '. YOU WIN ONE POINT IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 1)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        } 
        else if (winnerTag.textContent == 'GREETINGS, PLAYER O. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 0)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 1)
        }
        playerTurn = false
    } else if (boxOne.textContent != '' && boxOne.textContent == boxFour.textContent && boxFour.textContent == boxSeven.textContent && boxOne.textContent == boxSeven.textContent) {
        // boxOne.style.backgroundColor = 'red'
        // boxFour.style.backgroundColor = 'red'
        // boxSeven.style.backgroundColor = 'red'
        boxOne.className = 'box-1'
        boxFour.className = 'box-4'
        boxSeven.className = 'box-7'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxOne.textContent + '. YOU WIN ONE POINT IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 1)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        } 
        else if (winnerTag.textContent == 'GREETINGS, PLAYER O. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 0)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 1)
        }
        playerTurn = false
    } else if (boxTwo.textContent != '' && boxTwo.textContent == boxFive.textContent && boxFive.textContent == boxEight.textContent && boxTwo.textContent == boxEight.textContent) {
        // boxTwo.style.backgroundColor = 'red'
        // boxFive.style.backgroundColor = 'red'
        // boxEight.style.backgroundColor = 'red'
        boxTwo.className = 'box-2'
        boxFive.className = 'box-5'
        boxEight.className = 'box-8'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxTwo.textContent + '. YOU WIN ONE POINT IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 1)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        } 
        else if (winnerTag.textContent == 'GREETINGS, PLAYER O. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 0)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 1)
        }
        playerTurn = false
    } else if (boxThree.textContent != '' && boxThree.textContent == boxSix.textContent && boxSix.textContent == boxNine.textContent && boxThree.textContent == boxNine.textContent) {
        // boxThree.style.backgroundColor = 'red'
        // boxSix.style.backgroundColor = 'red'
        // boxNine.style.backgroundColor = 'red'
        boxThree.className = 'box-3'
        boxSix.className = 'box-6'
        boxNine.className = 'box-9'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxThree.textContent + '. YOU WIN ONE POINT IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 1)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        } 
        else if (winnerTag.textContent == 'GREETINGS, PLAYER O. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 0)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 1)
        }
        playerTurn = false
    } else if (boxOne.textContent != '' && boxOne.textContent == boxFive.textContent && boxFive.textContent == boxNine.textContent && boxOne.textContent == boxNine.textContent) {
        // boxOne.style.backgroundColor = 'red'
        // boxFive.style.backgroundColor = 'red'
        // boxNine.style.backgroundColor = 'red'
        boxOne.className = 'box-1'
        boxFive.className = 'box-5'
        boxNine.className = 'box-9'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxOne.textContent + '. YOU WIN ONE POINT IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 1)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        } 
        else if (winnerTag.textContent == 'GREETINGS, PLAYER O. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 0)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 1)
        }
        playerTurn = false
    } else if (boxThree.textContent != '' && boxThree.textContent == boxFive.textContent && boxFive.textContent == boxSeven.textContent && boxThree.textContent == boxSeven.textContent) {
        // boxThree.style.backgroundColor = 'red'
        // boxFive.style.backgroundColor = 'red'
        // boxSeven.style.backgroundColor = 'red'
        boxThree.className = 'box-3'
        boxFive.className = 'box-5'
        boxSeven.className = 'box-7'
        winnerTag.textContent = 'GREETINGS, PLAYER ' + boxThree.textContent + '. YOU WIN ONE POINT IN THIS ROUND.'
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == 'GREETINGS, PLAYER X. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 1)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        } 
        else if (winnerTag.textContent == 'GREETINGS, PLAYER O. YOU WIN ONE POINT IN THIS ROUND.' && playerTurn != false) {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 0)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 1)
        }
        playerTurn = false
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
        winnerTag.textContent = "Two losers. Better luck next time, earthlings."
        resetBtn.textContent = 'PLAY AGAIN'
        instructionsTag.textContent = 'SCOREBOARD'
        if (winnerTag.textContent == "Two losers. Better luck next time, earthlings.") {
            playerXLabel.textContent = 'PLAYER X: ' +
            (playerXCounter.textContent = Number(playerXCounter.textContent) + 0)
            playerOLabel.textContent = 'PLAYER O: ' + (playerOCounter.textContent = Number(playerOCounter.textContent) + 0)
        }
    } 
})

// Reset and play again button
resetBtn.addEventListener('click', function(event) {
    if (resetBtn.textContent == 'PLAY AGAIN') {
        boxOne.className = ('box')
        boxTwo.className = ('box')
        boxThree.className = ('box')
        boxFour.className = ('box')
        boxFive.className = ('box')
        boxSix.className = ('box')
        boxSeven.className = ('box')
        boxEight.className = ('box')
        boxNine.className = ('box')
        boxOne.style.backgroundColor = '#adff2f'
        boxTwo.style.backgroundColor = '#adff2f'
        boxThree.style.backgroundColor = '#adff2f'
        boxFour.style.backgroundColor = '#adff2f'
        boxFive.style.backgroundColor = '#adff2f'
        boxSix.style.backgroundColor = '#adff2f'
        boxSeven.style.backgroundColor = '#adff2f'
        boxEight.style.backgroundColor = '#adff2f'
        boxNine.style.backgroundColor = '#adff2f'
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
    }
    else if (resetBtn.textContent == 'RESET') {
        boxOne.className = ('box')
        boxTwo.className = ('box')
        boxThree.className = ('box')
        boxFour.className = ('box')
        boxFive.className = ('box')
        boxSix.className = ('box')
        boxSeven.className = ('box')
        boxEight.className = ('box')
        boxNine.className = ('box')
        boxOne.style.backgroundColor = '#adff2f'
        boxTwo.style.backgroundColor = '#adff2f'
        boxThree.style.backgroundColor = '#adff2f'
        boxFour.style.backgroundColor = '#adff2f'
        boxFive.style.backgroundColor = '#adff2f'
        boxSix.style.backgroundColor = '#adff2f'
        boxSeven.style.backgroundColor = '#adff2f'
        boxEight.style.backgroundColor = '#adff2f'
        boxNine.style.backgroundColor = '#adff2f'
        boxOne.textContent = ''
        boxTwo.textContent = ''
        boxThree.textContent = ''
        boxFour.textContent = ''
        boxFive.textContent = ''
        boxSix.textContent = ''
        boxSeven.textContent = ''
        boxEight.textContent = ''
        boxNine.textContent = ''
        playerTurn = player_X
        winnerTag.textContent = 'PLAYER X STARTS THE GAME! GO!'
        playerXLabel.textContent = ''
        playerOLabel.textContent = ''
        playerXCounter.textContent = ''
        playerOCounter.textContent = ''
        instructionsTag.textContent = 'Be the first to place 3 markers in a row to make contact with us...'
    }
  })