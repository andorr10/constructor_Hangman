var inquirer = require("inquirer");
var RandWordInfo = require("./randWord.js");
var results = require('./winLossCounter.js');
var gameResult = false;

console.log(RandWordInfo);
var indexOfWord = 1;
var newWord = new module.RandWordInfo(indexOfWord);
//console.log(newWord.word);
//console.log(newWord.wordLength);
newWord.printWordInfo();
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
    selectWord(randWord);
    console.log("word is: " + );
    playGame(magicWord.module);
  }
  else{
    console.log("guess you're too scared to play the game of thrones");
  }
});
}

function playGame(passThroughWord){
  inquirer.prompt({
    type: "input",
    name: "guess",
    message: "Guess a letter"
  });
}


startGame();


exports.module = gameResult;
