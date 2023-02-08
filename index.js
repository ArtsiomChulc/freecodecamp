//! Use bracket notation to find the second-to-last character in the lastName string.

const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

//! In this challenge, we provide you with a noun......

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "I love " + myNoun + ', ' + "she is a " + myAdjective + " and " + myAdverb + '. ' + "She is " + myVerb + " in the home!";
console.log(wordBlanks);