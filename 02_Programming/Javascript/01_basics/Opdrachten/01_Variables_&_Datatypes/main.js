// 01 JAVASCRIPT VARIABLES & DATATYPES

// 1.1.a
let letOefening = "Let Tekst";
// let letOefening = "Let Tekst Twee!"      je kan niet twee keer hetzelfde variabel aanmaken
console.log(letOefening);


// 1.1.b
let letOefeningTwee = "Let Tekst";
console.log(letOefeningTwee);
letOefeningTwee = "Let Tekst 2!";
console.log(letOefeningTwee);

// 1.1.c
const constOefening = "Const Tekst";
console.log(constOefening);

// 1.1.d
varOefening = "Var Tekst";
console.log(varOefening);

var varOefening = "Var Tekst 2";
console.log(varOefening);

var varOefening ="Var Tekst 3!";
console.log(varOefening);




// 1.2.2
let typeQuestion = "number";
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = true;
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = false;
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = undefined;
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = 22;
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = 22n;
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = Symbol;
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = null;
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = {};
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = new Object("newObject");
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);

typeQuestion = function calculateSomething(){};
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion);




// 1.3.1
let someNumber = 5;
let anotherNumber = "5";
console.log(someNumber + anotherNumber);

// 1.3.2
someNumber = 5;
anotherNumber = 5;
console.log(someNumber + anotherNumber);

// 1.3.3
console.log(someNumber == anotherNumber);
console.log(someNumber ==+ anotherNumber);
console.log(someNumber != anotherNumber);
console.log(someNumber !== anotherNumber);




// 1.4.1
let increment = 1;
console.log(++increment);
console.log(increment++);

// 1.4.2
console.log(increment++);
console.log(++increment);



// 1.4.3
let modulo = 24 % 10;
console.log(modulo);

let division = 24 / 10;
console.log(division);



// 1.4.4
someNumber = "Tekst";
console.log(!someNumber);

// 1.4.5
someNumber = 5;
console.log(!someNumber);

someNumber = Boolean;
console.log(!someNumber);

someNumber = false;
console.log(!someNumber);

someNumber = "false";
console.log(!someNumber);

someNumber = true;
console.log(!someNumber);

someNumber = "true";
console.log(!someNumber);

someNumber = null;
console.log(!someNumber);

someNumber = undefined;
console.log(!someNumber);

console.log("");

