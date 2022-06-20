let arr = [0, 1];
// loop door 50 getallen
for (let i = 2; i <= 48; i++) {
// tel bij iedere iteratie de laatste indices op bij total
    arr[i] = arr[i - 2] + arr[i - 1];
    // push het resultaat in de array
    arr.push(arr[i]);
}
console.log(arr);
