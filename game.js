var inquirer = require("inquirer");
var RandWordInfo = require("./randWord.js");
var results = require('./winLossCounter.js');
var gameResult = false;

var newWord = new RandWordInfo(Math.floor(Math.random()*5));
  var playersGuess;
//newWord.printWordInfo;
//var indexOfWord = 1;
//var newWord = new module.RandWordInfo(indexOfWord);
//console.log(newWord.word);
//console.log(newWord.wordLength);
//newWord.printWordInfo();
//newWord.createBlanks();

function startGame(){
inquirer.prompt({
  type: "list",
  name: "usersChoice",
  message: "Do you want to play Game of Thrones Hang Man",
  choices: ["yes", "no"]
}).then(function(response){
  //console.log("You chose: " + response.usersChoice);
  if (response.usersChoice === "yes"){
    //console.log("word is: "+ newWord.word);
    playGame(newWord.word);
  }
  else{
    console.log("guess you're too scared to play the game of thrones");
  }
});
}
//______________________________________
//the function below will run all of logic for the game, it will take the constructor from randWord.js and pass it on to the newWord;
//
//______________________________________
//** need to comment back in the formula later

// function playGame(){
//   var magicWord = newWord.word;
//   var wordSplitUp = magicWord.split("");
//   var blanks = newWord.createBlanks();
//   if(newWord.guessesLeft > 0) {
//
//
//     console.log("array for word: " + wordSplitUp);
//     console.log("Magic Word: " + blanks);
//
//     inquirer.prompt({
//       type: "input",
//       name: "guess",
//       message: "Guess a letter"
//     }).then(function(response){
//       //console.log(response.guess);
//
//       if (wordSplitUp.indexOf(response.guess) > -1) {
//           for (var i = 0; i < wordSplitUp.length; i++) {
//               if (wordSplitUp[i] === response.guess) {
//                   wordSplitUp[i] = response.guess;
//                   //console.log(wordSplitUp);
//               }
//           }
//         }
//     });
//   }
//   else{
//     console.log("when you play the game of thrones, you win or you die. And you died.  Play again?");
//     startGame();
//   }
// }


startGame();



function playGame(){
  var magicWord = newWord.word;
  var wordSplitUp = magicWord.split("");
  var blanks = newWord.createBlanks();
  console.log(wordSplitUp);
  console.log(blanks);
  askForLetter();

  function gameLogic(input){
    if(magicWord.indexOf(input) > -1){
      for (var i = 0; i < wordSplitUp.length; i++) {
          if (wordSplitUp[i] === input) {
            console.log("You guess right!");
              blanks[i] = input;
              console.log("updated word info: " + blanks);
              askForLetter();
          }
      }
      if(blanks.indexOf("_") === -1){
        console.log("Chaos is a ladder, and you have used it to find a way to sit on the Iron throne. Play again?");
        startGame();
      }
    }
    else{
      console.log("sorry, you guessed incorrectly");
      newWord.incorrectGuesses.push(input);
      console.log("Incorrect Guesses: " + newWord.incorrectGuesses);
      newWord.guessesLeft--;

      // if(newWord.guessesLeft > 0) {
      //   console.log("array for word: " + wordSplitUp);
      //   console.log("Magic Word: " + blanks);
      // }
      if(newWord.guessesLeft<1){
        console.log("when you play the game of thrones, you win or you die. And you died.  Play again?");
        startGame();
      }
      askForLetter();
    }
  }

  function askForLetter() {
    inquirer.prompt({
    type: "input",
    name: "guess",
    message: "Guess a letter"
  }).then(function(response){
    //console.log(response.guess);
    var playersGuess = response.guess;
    console.log("you selected: " + playersGuess);
    gameLogic(playersGuess);
  });
  }
}

// function askForLetter() {
//   inquirer.prompt({
//   type: "input",
//   name: "guess",
//   message: "Guess a letter"
// }).then(function(response){
//   //console.log(response.guess);
//   var playersGuess = response.guess;
//   console.log("you selected: " + playersGuess);
//   return playersGuess;
// });
// }


  // if (wordSplitUp.indexOf(response.guess) > -1) {
  //     for (var i = 0; i < wordSplitUp.length; i++) {
  //         if (wordSplitUp[i] === response.guess) {
  //             wordSplitUp[i] = response.guess;
  //             //console.log(wordSplitUp);
  //         }
  //     }
  //   }




module.exports = gameResult;
