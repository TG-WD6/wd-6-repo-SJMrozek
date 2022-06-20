# [Tower of Hanoi](https://www.mathsisfun.com/games/towerofhanoi.html)

In deze challenge is het de bedoeling dat je de Tower of Hanoi oplost met code. Gebruik hiervoor recursion.

De onderstaande code is de basis voor de puzzel.
```js
class Puzzle {
    firstPile = []
    secondPile = []
    thirdPile = []
​
    constructor(size) {
        this.size = size;
​
        for (let index = size; index > 0; index--) {
            this.firstPile.push(index)
        }
​
    }
​
    move(origin, target) {
        const itemToMove = origin.pop()
        if (target.find(item => item < itemToMove)) {
            origin.push(itemToMove)
            return
        }
        target.push(itemToMove)
    }
​
    solve() {
        
    }
}
```