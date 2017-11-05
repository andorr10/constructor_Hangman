// var wordList = ["dothraki", "dragon", "westeros", "winter", "cersei", "whitewalker", "citadel", "lanister", "kingslanding", "baratheon", "direwolf", "wildling", "danaerys", "valerian", "hodor", "nymeria", "littlefinger", "lordbaelish", "imp", "sandsnakes"];
//var guessesLeft = 10;
// var randWord = {
// wordArray: ["dothraki", "dragon", "westeros", "winter", "cersei", "whitewalker", "citadel", "lanister", "kingslanding", "baratheon", "direwolf", "wildling", "danaerys", "valerian", "hodor", "nymeria", "littlefinger", "lordbaelish", "imp"],
// randomWord: wordArray[Math.floor(Math.random() * wordArray.length)]
// };
// console.log(randWord);
var wordList = ["dothraki", "dragon", "westeros", "winter", "cersei", "whitewalker", "citadel", "lanister", "kingslanding", "baratheon", "direwolf", "wildling", "danaerys", "valerian", "hodor", "nymeria", "littlefinger", "lordbaelish", "imp"];
//var indexOfWord = Math.floor(Math.random() * wordList.length);
var indexOfWord = 1;
function RandWordInfo(indexOfWord){
  //console.log(indexOfWord);
  this.word = wordList[indexOfWord];
  this.wordLength = this.word.length;
  this.printWordInfo = function(){
    console.log("word: " + this.word);
    console.log("Length of " + this.word + "is " + this.wordLength);
    console.log("___________________");
  };
  this.guessesLeft = 8;
  this.incorrectGuesses = [];
  this.createBlanks = function(){
    console.log(this.word + " function works!");
    var emptyWord = "";
        for(var i = 0; i< this.wordLength; i++){
          emptyWord = emptyWord + "_ ";
        }
    console.log(emptyWord);
  };
  this.replaceBlanks = function(){
    
  };
}


//console.log(RandWordInfo);
//var newWord = new RandWordInfo(indexOfWord);
//console.log(newWord.word);
//console.log(newWord.wordLength);
//newWord.printWordInfo();
//newWord.createBlanks();


// function selectWord(){
//   return randWord;
// }
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
