# TIC TAC TOE
<a href="https://kduong888.github.io/tic-tac-toe/">Click here to play the game</a>
## Summary of project
## Plan / approach you took to solving the problem
#### Workflow diagram
<a href="https://lucid.app/lucidchart/dd978809-07c9-46cf-9348-ef2e0fe6c210/view?page=XlBbtYGhxJeP&invitationId=inv_326799b7-bbfd-4f88-b634-e5a16dff7d62#"> Click here to access my draft workflow diagram</a>
#### Initial plan
1. HTML: Create 9 boxes each with no background to represent the tic-tac-toe board.
2. CSS: Arrange the boxes so that they are in a grid 3x3.
3. JS: Write for loop so that: 
- (a) player 1 can select 1 box and when a box is clicked, the background colour or image will change; 
- (b) if player 1 does not have 3 boxes in a row selected (horizontally, vertically, or diagonally), player 2 who will be able to click on a box and the background colour or image of the box selected will change;
- (c) if player 2 does not have 3 boxes in a row selected (horizontally, vertically, or diagonally), restart at step 3(a);
- (d) if player 1 or player 2 does achieve 3 boxes in a row, that player's boxes selected will all change to indicate that they are the winner.
7. CSS: Personalise look of the game.
##### How to switch players?
1. HTML: When the game is first opened, there will be a section under a heading called 'Whose Turn Is It?' that says 'PLAYER 1' indicating that it is Player 1's turn.
2. JS: 
- (a) Create an event listener so that, immediately after Player 1 clicks on a box and the box changes colour, if the box selected IS NOT the 3rd box in a winning combination for Player 1, the text under the 'Whose Turn Is It?' heading will change to "PLAYER 2". If the box selected is a winning combination for Player 1, the text will not change OR it will change to 'PLAYER 1 IS THE WINNER'.
- (b) JS: Similarly, create an event listener so that, immediately after Player 2 clicks on a box and the box changes colour, if the box selected IS NOT the 3rd box in a winning combination for Player 2, the text under the 'Whose Turn Is It?' heading will change to "PLAYER 1". If the box selected is a winning combination for Player 2, the text will not change OR it will change to 'PLAYER 2 IS THE WINNER'.
##### How to check for wins?
1. Each box has an ID and the IDs are numbered box 1-9 from left-to-right, left-to-right and left-to-right.
2. The winning combinations would contain:
- (a) box1, box2, box3
- (b) box4, box5, box6
- (c) box7, box8, box9
- (d) box1, box4, box7
- (e) box2, box5, box8
- (f) box3, box6, box9
- (g) box1, box5, box9
- (h) box3, box5, box9
3. The winner will be the first player to select one of the winning combinations from 2(a)-(h) above.
## Cool tech you used (or code you're proud of)
## Lessons you learnt
