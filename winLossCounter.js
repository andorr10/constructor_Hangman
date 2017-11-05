var totalWins = require("./game.js");

// var gamesWon;
// var gamesLost;

var wins_losses = {
  gamesWon: 2,
  gamesLost: 4,
  totalgames: function(){
    return (this.gamesWon + this.gamesLost);
  }
};
//console.log("total games played: " + wins_losses.totalgames);
//console.log("game result from game.js export: " + totalWins.module);
// if (gameResult === true){
//   gamesWon++;
// }
// if (gameResult ===false){
//   gamesLost++;
// }
// console.log("Wins: " + gamesWon);
// console.log("Losses: " + gamesLost);
