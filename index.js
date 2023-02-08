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


//! Create a nested array called myArray.

// const myArray = [['hello', 33], ['bye', 34]];


//! Create a variable called myData and set it to equal the first value of myArray using bracket notation.

// const myArray = [50, 60, 70];
// const myData = myArray[0];

//! Modify the data stored at index 0 of myArray to a value of 45.

// const myArray = [18, 64, 99];
// myArray[0] = 45;

//! Using bracket notation select an element from myArray such that myData is equal to 8.

const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log(myData);