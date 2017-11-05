var wordList = ["dothraki", "dragon", "westeros", "winter", "cersei", "whitewalker", "citadel", "lanister", "kingslanding", "baratheon", "direwolf", "wildling", "danaerys", "valerian", "hodor", "nymeria", "littlefinger", "lordbaelish", "imp", "sandsnakes"];
var guessesLeft = 10;
var randWord = wordList[Math.floor(Math.random() * wordList.length)];
var RandWordInfo = function(randWord){
  word = randWord;
  WordLength = randWord.length;
};

function selectWord(){
  return randWord;
}
// var RandWordInfo = function(input){
//   this.wordsArray = ["dothraki", "dragon", "westeros", "winter", "cersei", "whitewalker", "citadel", "lanister", "kingslanding", "baratheon", "direwolf", "wildling", "danaerys", "valerian", "hodor", "nymeria", "littlefinger", "lordbaelish", "imp", "sandsankes"];
//   this.wordSelected = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
//   this.wordSelectedLength = this.wordSelected.length;
//   this.userGuesses = 8;
//   this.incorrectGuesses = [];
//   // this.createBlanks = function(this.wordSelcted){
//   //   var emptyWord = "";
//   //   for(var i = 0; i< this.wordsSelectedLength; i++){
//   //     emptyWord = emptyWord + "_.";
//   //   }
//   //
//   // }
//   // this.replaceBlanks = function(){
//   //
//   // };
// };

//console.log(RandWordInfo.wordSelected);
//console.log(randWord);
//console.log("word: " + RandWordInfo.word);

exports.module = RandWordInfo;
