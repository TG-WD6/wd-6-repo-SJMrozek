// 05 JAVASCRIPT Arrays & Loops

// 5.1.1
let numberArray = [9, 8, 3, 7, 2, 4, 10, 1, 6, 5];
console.log(numberArray);

// 5.1.2
let fruitArray = ["Appel", "Aardbei", "Banaan", "Ananas", "Kiwi"];
console.log(fruitArray);

// 5.1.3
console.log(fruitArray[0]);


// 5.1.4
let randomNumber = Math.floor(Math.random() * numberArray.length);
console.log(fruitArray[numberArray[randomNumber]]);

// 5.1.5
console.log(fruitArray.length);

// 5.1.6
console.log(fruitArray[numberArray[randomNumber] % fruitArray.length]); // X % Y --- Modulo operator
// 5.1.7
fruitArray[0] = "Peer";

// 5.1.8    
// Zonder Array method
[fruitArray[0], fruitArray[1]] = [fruitArray[1], fruitArray[0]]

    // kan ook met een temporary item: (verwisselt "ananas" met "kiwi")
    const tmp = fruitArray[4]
    fruitArray[4] = fruitArray[3]
    fruitArray[3] = tmp

// Met Array method
fruitArray.splice(0, 2, "Aardbei", "Peer")


// 5.2.1
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]

for (let i=0; i < dutchSports.length; i++) {
    console.log(dutchSports[i]);
}

// 5.2.2
for (const item of dutchSports) {
    console.log(item);
}

// 5.2.3
const numbers = []
for (let i=0; i < 20; i++) {
    console.log(i + 1);
}

// 5.2.4
for (let i=0; i < 3; i++) {
    for (let i=0; i < 10; i++) {
        console.log(i + 1);
    }
}

// 5.2.5
    // eerste poging (eerste 'for' draait maar 1 keer)
    // for (let i=0; i < 1; i++) {
    //     for (let i=0; i < 10; i++) {
    //         console.log(i + 1);
    //     }
    //     for (let i=0; i < 10; i++) {
    //         console.log((i + 1) * 2);
    //     }
    //     for (let i=0; i < 10; i++) {
    //         console.log((i + 1) * 3);
    //     }
    // }

// Tweede poging >> meer efficient
for (let num=0; num < 3; num++) {
    for (let i=0; i < 10; i++) {
        console.log((i + 1) * (num + 1));
    }
}

// 5.2.6
const fibonacci = [0, 1];
for (let i = fibonacci.length - 1; i < 50; i++) {
    fibonacci[fibonacci.length] = fibonacci[i] + fibonacci[i - 1];
}
console.log(fibonacci);