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

// const myArray = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// 	[[10, 11, 12], 13, 14],
// ];

// const myData = myArray[2][1];
// console.log(myData);

//! Push ["dog", 3] onto the end of the myArray variable.

// const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);
// console.log(myArray);

//!Use the .pop() function...

// const myArray = [["John", 23], ["cat", 2]];
// const removedFromMyArray = myArray.pop();
// console.log(myArray, removedFromMyArray);


//! //!Use the .shift() function...

// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift();
// console.log(myArray, removedFromMyArray);


//! //!Use the .unshift() function...

// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);
// console.log(myArray);


//! There should be at least 5 sub-arrays in the list.

// const myList = [];
// myList.push(['aaa', 10]);
// myList.push(['bbb', 20]);
// myList.push(['ccc', 30]);
// myList.push(['ddd', 40]);
// myList.push(['sss', 50]);
// console.log(myList);

//! function.....

// function functionWithArgs(a, b) {
// 	console.log(a + b);
// }
// functionWithArgs(2, 4);


//! Add the number to the end of the array, then remove the first element of the array.

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift();
    return item;
    // Only change code above this line
}

// Setup695
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log(nextInLine(testArr, 12));


//! Change the order of logic in the function so that it will return ......

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";

    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(0));


//! In the game of Golf, each hole has a par, meaning, the average...

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return 'Hole-in-one!';
    } else if (strokes <= par - 2) {
        return 'Eagle';
    } else if (strokes == par - 1) {
        return 'Birdie';
    } else if (strokes == par) {
        return 'Par';
    } else if (strokes == par + 1) {
        return 'Bogey';
    } else if (strokes == par + 2) {
        return 'Double Bogey';
    } else if (strokes >= par + 3) {
        return 'Go Home!';
    } else {
        return 'change me!';
    }

    return "Change Me";
    // Only change code above this line
}

golfScore(5, 4);


// Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            return 'alpha';
            break;
        case 2:
            return 'beta';
            break;
        case 3:
            return 'gamma';
            break;
        case 4:
            return 'delta';
            break;
    }


    // Only change code above this line
    return answer;
}

caseInSwitch(1);

//Adding a Default Option in Switch Statements

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);

//Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);


//Replacing If Else Chains with Switch
/*if (val === "bob") {
    answer = "Marley";
} else if (val === 42) {
    answer = "The Answer";
} else if (val === 1) {
    answer = "There is no #1";
} else if (val === 99) {
    answer = "Missed me by this much!";
} else if (val === 7) {
    answer = "Ate Nine";
}*/

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 'bob':
            answer = 'Marley';
            break;
        case 42:
            answer = 'The Answer';
            break;
        case 1:
            answer = 'There is no #1';
            break;
        case 99:
            answer = 'Missed me by this much!';
            break;
        case 7:
            answer = 'Ate Nine';
            break;
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);


// Returning Boolean Values from Functions

function isLess(a, b) {
    // Only change code below this line
    return a < b;

    // Only change code above this line
}

isLess(10, 15);

// Return Early Pattern for Functions

function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) return;
    // Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//Counting Cards

let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if (count > 0) {
        return count + ' Bet';
    } else {
        return count + ' Hold';
    }
    // Only change code above this line
}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));

// Build JavaScript Objects

/*const myDog = {
    // Only change code below this line
    name: 'Bobik',
    legs: 4,
    tails: 1,
    friends: ['Dogs', 'people'],
    // Only change code above this line
};*/

// Accessing Object Properties with Dot Notation

// Setup
/*const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// Accessing Object Properties with Bracket Notation*/

/*
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj['an entree'];   // Change this line
const drinkValue = testObj['the drink'];    // Change this line
*/

//Accessing Object Properties with Variables

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

//Updating Object Properties

// Setup
/*
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";*/

//Add New Properties to a JavaScript Object

/*
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";
*/


//Delete Properties from a JavaScript Object


// Setup
/*const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDog.tails;*/


//Using Objects for Lookups

// Setup
/*
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    let lookup = {
        alpha: 'Adams',
        bravo: 'Boston',
        charlie: 'Chicago',
        delta: 'Denver',
        echo: 'Easy',
        foxtrot: 'Frank',
    }
    result = lookup[val];
    /!*switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }*!/

    // Only change code above this line
    return result;
}

console.log(phoneticLookup("charlie"));*/


//Testing Objects for Properties

/*
function checkObj(obj, checkProp) {
    // Only change code below this line;
    if(obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    return "Not Found"
    // Only change code above this line
}
*/

//Manipulating Complex Objects

/*const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Bil Joe",
        "title": "Gitara Man",
        "release_year": 1974,
        "formats": [
            "CD",
            "8T",
            "LP"
        ]
    }
    console.log(myMusic);
]*/

//Accessing Nested Objects

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
