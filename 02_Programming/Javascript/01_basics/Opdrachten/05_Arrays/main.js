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
for (let i=1; i <= 3; i++) {
    for (let num=1; num <= 10; num++) {
        console.log(num * i);
    }
}

// 5.2.6 
const fibonacci = [0, 1];

for (let i = fibonacci.length - 1; i < 49; i++) {
    fibonacci[i + 1] = fibonacci[i - 1] + fibonacci[i];
}
console.log(fibonacci);

// 5.2.7
const numbers = [6, 5, 3, 1, 8, 7, 2, 4]

function bubbleSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len ; i++) {
        for (let j = 0 ; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(numbers));



// 5.3.1
const dutchSportsAll = ["Voetbal", "Hockey", "Schaatsen"]
dutchSportsAll.push("Zeilen", "Zwemmen")

// 5.3.2
dutchSportsAll.unshift("Volleybal")

// 5.3.3
const ballSports = dutchSportsAll.slice(0, 2);

// 5.3.4
dutchSportsAll.splice(0, 2);

// 5.3.5
dutchSportsAll.sort();

// 5.3.6
console.log(dutchSportsAll);

// 5.3.7
const sportsLength = dutchSportsAll.map(sport => sport.length)



// 5.4.1
let arrayLike = document.querySelectorAll("div")
console.log(arrayLike); // Toont een nodeList! dat is een soort DOM object!

// 5.4.2
// filter()
    {
    const array = [11, 26, 32, 43, 58, 61, 70];

    const result = array.filter(element => element > 50);

    console.log(result);
    }

// find()
    {
    const array = [11, 26, 32, 43, 58, 61, 70];
    
    const result = array.find(element => element > 50);
    
    console.log(result);
    }

// some()
    {
    const array = [1, 2, 3, 4, 5];
    
    const even = (element) => element % 2 === 0;

    console.log(array.some(even));
    }

// every()
    {
    const isBelowThreshold = (currentValue) => currentValue < 40;

    const array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));
// expected output: true

    }