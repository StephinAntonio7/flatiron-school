/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 8, 2024
Created August 21, 2023

*/

// ~ Variables
// -> constants, variables, logging, annotations

// A one line comment
/* multiline comment


/**
* The name of our school.
*/
const schoolName= "Flatiron School";
// schoolName = "Horace Greely"
console.log (schoolName)
let firstName = "Sakib";
firstName = "Mark";
console.log(firstName);

// ~ Types
// -> undefined, null*, boolean, number, string
let lastName;
console.log (typeof(lastName))
let numStudents = null;
console.log (typeof (numStudents))
const sunny = true;
const rainy = false;
console.log (typeof(sunny));
const numBooks = 5;
// concatenation and interpolationS
const topic = "JavaScript";
const sentence = `We have ${numBooks} books.`
console.log(sentence)
console.log(sentence + " Isn't that great")

// ~ Objects
// -> definition, bracket/dot notation, stringify
const cube= {
    volume: 8,
    height: 2,
    width: 2,
    color: "blue",
    "full-name": "Bob"
}

// Dot notation
console.log(cube.volume)
cube.volume = 10
console.log (cube.volume)

// Bracket notation
console.log (cube ["full-name"]);
console.log (JSON.stringify(cube));

// ~ Arrays
// -> definition, access, modification
const numbers = [5,6,7,8];
console.log(numbers[3])
console.log(numbers.length)
console.log(numbers)
numbers[2]= 10
console.log (numbers); 

// ~ Conditionals
// if, if-else, if-else-if-else, ternary
const isItSunny = false;
const apples = 5;
const isItRainy = true;
if (apples === 5) {
    console.log("I have 5 apples!") 
}
if (isItSunny) {
    console.log("It's sunny today!")
} else if (isItRainy) {
    console.log("It's rainy.");
} else {
    console.log ("It isn't sunny today.")
}

//  ternary shorthand
isItSunny ? console.log ("It's sunny!") : console.log ("It's not sunny.");
const greeting = isItSunny ? "It's sunny!" : "Its not sunny.";
console.log (greeting);

// ~ Functions
// -> name, parameters, body, return, annotations

console.log ("Hello!")

/**
 * Greets someone and a mood
 * @param {string} name The person to greet
 * @param {string} mood The mood I'm in.
 * @returns A greeting, in string form
 */
function sayHello(name, mood) {
    return "Hello, " + name + ". I'm " + mood + "!";
}

console.log(sayHello("Stephin", "happy"));

function addOne (number) {
   return number +1;
}
console.log (addOne (5) + addOne (6));

// -> methods, forEach, callback functions, anonymous functions
console.log("Hello");
const names = [ "Sakib", "Zach", "Tiff", "Sarah" ]

// We're passing a callback function into the array method forEach
names.forEach((name , i) => {
    console.log ("Hello, " + name + " at the index" + i + "."); 
});

// ~ Scope
// -> global, local, closures, function hoisting
firstName = "Bob";

// hoisting: invocation
localScope();

// This closure includes localVariable and all global vars
function localScope() {
    const localVariable = "Hi, I'm local!";
    console.log(localVariable)
    console.log(firstName)
}

localScope();
// console.log (localVariable);

function localScope2() {
    console.log(localVariable)
    console.log(firstName) 
}

// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
// function sum(a, b){
//   console.log(a+b)
// }
// sum(1, 2);
    
// Start defining a function named sum that takes one parameter called num.
function sum(num){
// Define Total
    let total = 0
// For each element in num, add element to total.
    num.forEach(element => { total = element+total });
    return total
}


// total = 0
// num = [1, 2, 3]
// For each element in num, add element to total.
//          (total = element + total)
//          total = 1 + 0 = 1
//          total = 2 + 1 = 3
//          total = 3 + 3 = 6
// total = 6
// return 6

console.log( sum( [1, 2, 3] ) )

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.


// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.
