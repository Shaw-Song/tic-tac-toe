const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    for (let i = 0; i < 3; i++) {
      if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
        if (grid[i][0] !== " ") {
          return grid[i][0];
         } 
      }
    }
    for (let i = 0; i < 3; i++) {
      if (grid[0][i] === grid[1][i] && grid[2][i] === grid[1][i]) {
        if (grid[0][i] !== " ") {
          return grid[0][i];
         } 
      }
    }
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] || grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
      if (grid[1][1] !== " ") {
        return grid[1][1];
      }
    }

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (grid[r][c] === " ") {
          return false;
        }
      }
    }

    return "T";
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

  }


  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
