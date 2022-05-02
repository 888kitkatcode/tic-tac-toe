# TIC TAC TOE
<a href="https://kduong888.github.io/tic-tac-toe/">Click here to play the game</a>
## Summary of project
## Plan / approach you took to solving the problem
I started by creating a workflow diagram (a link to which can be found below) and prepared pseudocode prior to writing the code. Once I started writing the code, I continuously checked for bugs throughout by trialling the game in the browser.
#### Workflow diagram
<a href="https://lucid.app/lucidchart/dd978809-07c9-46cf-9348-ef2e0fe6c210/edit?invitationId=inv_326799b7-bbfd-4f88-b634-e5a16dff7d62"> Click here to access my draft workflow diagram</a>
#### Initial plan
1. HTML: Create 9 boxes each with no background to represent the tic-tac-toe board.
2. CSS: Arrange the boxes so that they are in a grid 3x3.
3. JS: Write if statement so that: 
- (a) player X can select 1 box and when a box is clicked, an X will appear on the selected box; 
- (b) if player X does not have 3 boxes consecutively selected (horizontally, vertically, or diagonally), player O who will be able to click on a box and the background colour or image of the box selected will change;
- (c) if player O does not have 3 boxes consecutively selected (horizontally, vertically, or diagonally), restart at step 3(a);
- (d) if player X or player O does achieve 3 boxes in a row, that player's selected boxes will all change to indicate that they are the winner.
7. CSS: Personalise look of the game.
##### Specific logic: How to switch players?
JS: Write an if statement so that: 
1. The game will begin with it being player 1's turn; 
2. If it is player X's turn to click and if the box that they have clicked has not already been selected, the text content of the selected box will change to 'X' and it will become player O's turn; and
3. If it is player X's turn to click and if the box that they have clicked has not already been selected, the text content of the selected box will change to 'O' and it will become player X's turn again. 
4. The above steps will continue until a winning or draw combination has been selected..
##### Specific logic: How to check for wins?
1. Each box has an ID and the IDs are numbered box 1-9 from left-to-right.
2. Write an if statement to check for one of the following winning combinations:
- (a) box1, box2, box3
- (b) box4, box5, box6
- (c) box7, box8, box9
- (d) box1, box4, box7
- (e) box2, box5, box8
- (f) box3, box6, box9
- (g) box1, box5, box9
- (h) box3, box5, box7
3. The winner will be the first player to select one of the winning combinations above.
## Cool tech you used (or code you're proud of)
1. The game starts by providing one line of instruction <i>'Be the first to place 3 markers in a row to make contact with us...'</i> and once a player either wins a game or there is a draw, the instructions turn into the scoreboard.
2. There is a 'RESET' button that turns into a 'PLAY AGAIN' button after the first win/draw. If it is pressed once while it says 'PLAY AGAIN', it will clear the tic-tac-toe board but the scoreboard will remain intact. If the button is clicked for a second time while it says 'RESET', the entire game (board and scoreboard) will be refreshed.
3. In keeping with the theme of the game, a pulsing hover effect has been used when a player hovers over a tile on the board or the reset/play again button.
## Lessons you learnt
1. Write a good plan.
2. Test frequently throughout.
3. Play the game many different ways to check for unanticipated bugs.
