//EXERCISE 1

function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo)


//EXERCISE 2

function yell(word) {
  var uppercaseWord = word.toUpperCase();
  console.log(uppercaseWord);
}
var stringWord = "Hello";

yell(stringWord)

//PART 2
function yell10(word) {
  for (var i = 0; i < 10; i = i + 1) {
    console.log(word);
  }
}

var stringWord = "Bye";

yell10(stringWord)


//EXERCISE 3

var myArray = ["word", "longword"]

var longest = myArray.sort(function (a, b) {
  return b.length - a.length;
})[0];

console.log(longest)


//EXERCISE 4

var isVowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){
        if(letter.toLowerCase() === vowels[i]){
            return true;
         }
    }
    return false
};

console.log(isVowel("E"))
console.log(isVowel("t"))
