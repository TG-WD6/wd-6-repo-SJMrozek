// 02 JAVASCRIPT STRING METHODS


// 2.1
let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen."
let upperCase = someKittens.toUpperCase()

// 2.1.1   &   2.1.2
const firstString = upperCase.slice(0,43)
const secondString = upperCase.slice(44)

console.log(firstString)
console.log(secondString)

// 2.1.3
console.log(someKittens.indexOf("kittens"))
console.log(someKittens.lastIndexOf("kittens"))

// 2.1.4 
console.log(someKittens.charAt())



// 2.2.3   -   2.2.4    (Experiment code)
console.log(someKittens.substring(0, 20))
console.log(someKittens.slice(0, -15))



// 2.3
console.log(someKittens.split(" "))

