// 02 JAVASCRIPT STRING METHODS

console.log("String Methods opdracht")

let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen."
let upperCase = someKittens.toUpperCase()

const firstString = upperCase.slice(0,43)
const secondString = upperCase.slice(44)

console.log(firstString)
console.log(secondString)

console.log(someKittens.indexOf("kittens"))
console.log(someKittens.lastIndexOf("kittens"))
console.log(someKittens.charAt())

console.log(someKittens.substring(0, 20))
console.log(someKittens.slice(0, -15))

console.log(someKittens.split(" "))

