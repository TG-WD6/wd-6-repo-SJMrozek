// 03 JAVASCRIPT CONDITIONS

// 3.1.3
let x = 4;
let y = 8;
if (x==4 && y==8) {
    console.log("AND Result!")
}

// 3.1.4   &   3.1.5
if (!(x==4 || y==8)) {
} else {
    console.log("OR else Result!")
}

// 3.1.6
if (!x==4 && !y==8) {
} else {
    console.log("OR else Result! (without '||')")
}

console.log("");

// 3.1.7   -   3.1.11
let a = 6;
if (a > 5 && a < 10) {
    console.log("The number", a,"is higher than 5 and lower than 10");
} if (a >= 11 && a <=20) {
    console.log("The number", a,"is 11 or higher and 20 or lower");
} if (a == 21 || a == 23) {
    console.log("The number", a,"is 21 or 23");
} if (a < 35 || (a >= 40 && a <= 45)) {
    console.log("The number", a,"is lower than 35 or between 40 and 45")
}

console.log("")

// 3.2.2
let b = 20;
if (b == 3) {
    console.log("b is equal to 3");
} else if (b > 4) {
    console.log("b is greater than 4");
} else if (b > 11) {
    console.log("b is greater than 11");
} else if (b < 3) {
    console.log("b is smaller than 3");
}

console.log("")

//3.2.3
var monthNumber = 12;
if (monthNumber === 1){
    console.log("Januari")
} else if (monthNumber === 2){
    console.log("Februari")
} else if (monthNumber === 3){
    console.log("Maart")
} else if (monthNumber === 4){
    console.log("April")
} else if (monthNumber === 5){
    console.log("Mei")
} else if (monthNumber === 6){
    console.log("Juni")
} else if (monthNumber === 7){
    console.log("Juli")
} else if (monthNumber === 8){
    console.log("Augustus")
} else if (monthNumber === 9){
    console.log("September")
} else if (monthNumber === 10){
    console.log("Oktober")
} else if (monthNumber === 11){
    console.log("November")
} else if (monthNumber === 12){
    console.log("December")
} else {
    console.log("Enter a number from 1 to 12")
}

console.log("")

// 3.2.4
monthNumber = 5;
switch (monthNumber) {
    case 1:
        console.log("Januari")
    case 2:
        console.log("Februari")
        break;
    case 3:
        console.log("Maart")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("Mei")
        break;
    case 6:
        console.log("Juni")
        break;
    case 7:
        console.log("Juli")
        break;
    case 8:
        console.log("Augustus")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("Oktober")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("Enter a number from 1 to 12")
}

console.log("")

// 3.2.5
let c = 3;
let results;
(c<=4 && c>=0) ? results = 2
: results = 5;
console.log(results)