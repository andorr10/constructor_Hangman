var wordList = ["dothraki", "dragon", "westeros", "winter", "cersei", "whitewalker", "citadel", "lanister", "kingslanding", "baratheon", "direwolf", "wildling", "danaerys", "valerian", "hodor", "nymeria", "littlefinger", "lordbaelish", "imp", "sandsankes"];
var guessesLeft = 10;
var magicWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(magicWord);

exports.module = magicWord;
