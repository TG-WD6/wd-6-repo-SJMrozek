# Fibonacci code bug

De volgende code, geschreven door een groepsgenoot, moet de eerste 50 getallen van de Fibonaccie getallenreeks tonen. Het enige probleem is dat de laatste twee getallen hetzelfde zijn.








Hoe los jij dit op? Probeer de code te 'repareren' en niet helemaal van de grond af op te bouwen.

```js
let arr = [0, 1];

for (let i = 2; i <= 48; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
    arr.push(arr[i]);
}
console.log(arr);
```

- console:

        (50) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 4807526976]