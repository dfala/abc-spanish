var Exports       = module.exports = {};
var spanishWords  = require('an-array-of-spanish-words');
var silabify = require('silabify');

// Clean up data to be 3 syllables or less
// spanishWords = spanishWords.filter(function (word) {
//   var num = silabify(word).length
//   if (num > -1 && num <4) return true;
//   return false;
// })

Exports.getWords = function (req, res) {
  // Consist only letters in the array provided
  var checker = (arr, testWords) => testWords.every(v => arr.includes(v));

  // convert into array of letters
  var answer = spanishWords.filter(function (word) {
    var wordArray = word.split("");
    return checker(req.body.words, wordArray);
  })


  toReturn = [];
  answer = answer.map(function (word) {
    if (!word || word.length <1 || word === "") return;
    var num = silabify(word).length
    if(num<4) toReturn.push({
      word: word,
      syllableCount: num
    });
  })
  return res.json(toReturn);

};
