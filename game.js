var inquirer = require("inquirer");
var RandWordInfo = require("./randWord.js");
var results = require('./winLossCounter.js');
var gameResult = false;

var newWord = new RandWordInfo(Math.floor(Math.random()*7));

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

function playGame(passThroughWord){
  var magicWord = newWord.word;
  var wordSplitUp = magicWord.split("");
  console.log(wordSplitUp);
  newWord.createBlanks();
  //console.log(wordSplitUp);
  inquirer.prompt({
    type: "input",
    name: "guess",
    message: "Guess a letter"
  }).then(function(response){
    console.log(response.guess);
    if (wordSplitUp.indexOf(response.guess) > -1) {
        for (var i = 0; i < magicWord.length; i++) {
            if (wordSplitUp[i] === response.guess) {
                wordSplitUp[i] = response.guess;
                console.log(wordSplitUp);
            }
        }
      }
  });
}


startGame();


module.exports = gameResult;
