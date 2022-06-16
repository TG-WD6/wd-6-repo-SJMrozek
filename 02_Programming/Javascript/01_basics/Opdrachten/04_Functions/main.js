// 04 JAVASCRIPT FUNCTIONS

// 4.1.1
function helloWorld() {
    console.log("Hello World")
}

// 4.1.2
const textInputElement = document.getElementById("textInput");

// 4.1.3 
function logParam(anything) {
    console.log(anything)
}


// 4.1.4 
function timesTwo(num) {
    return num * 2
}
let result = timesTwo(7); // vul als argument een nummer in. Deze value is voor de 'num' parameter
console.log(result);


console.log("");

// 4.2.1
const highlight = document.getElementsByClassName("highlight");
const spanText = document.getElementsByTagName("span");
const firstParagraph = document.querySelector("p");
const allParagraphs = document.querySelectorAll("p");

console.log(highlight);
console.log(spanText);
console.log(firstParagraph, firstParagraph.innerHTML);
console.log(allParagraphs, allParagraphs[0].innerText, allParagraphs[1].innerText);


// 4.2.2
function logValue(anything) {
    console.log(anything.value);
}

// 4.3.1
// function randomNumber() {
//     console.log(Math.random())
// }

// 4.3.2
function randomNumber(x) {
    console.log(Math.floor(Math.random() * x))
}


console.log("")

// 4.4.1   &   4.4.2
function isMember(name){
    let result;
    switch (name.toLowerCase()) {
        case "bart":
        case "junier":
        case "marko":
        case "sander":
        case "szymon":
            return true;
        default:
            return false;
    }
}

const resultDisplay = document.getElementById("memberResult");

function checkMember(name) {
    if (isMember(name)) {
        resultDisplay.innerText = name + " Is a Member";
    } else if ((!isMember(name) && !name == "")) {
        resultDisplay.innerText = name + " Is NOT a Member";
    } else {
        resultDisplay.innerText = null;
    }
}

// 4.4.3
let isMemberArrow = name => {
    name = name.toLowerCase();
    return name == "bart" ? true
    : name == "junier" ? true
    : name == "marko" ? true
    : name == "sander" ? true
    : name == "szymon" ? true
    : name == null ? null 
    : false;
}

let checkMemberArrow = name => {
    name = name.toLowerCase();
    return isMemberArrow(name) ? (resultDisplay.style.color = "green", resultDisplay.innerText = name + " is a member")
    : !isMember(name) && !name == "" ?(resultDisplay.style.color = "red", resultDisplay.innerText = name + " is not a member")
    : resultDisplay.innerText = null;
}