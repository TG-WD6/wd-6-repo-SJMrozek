class Puzzle {
    firstPile = []
    secondPile = []
    thirdPile = []

    constructor(size) {
        this.size = size;

        for (let index = size; index > 0; index--) {
            this.firstPile.push(index)
        }

    }

    move(origin, target) {
        const itemToMove = origin.pop()
        if (target.find(item => item < itemToMove)) {
            origin.push(itemToMove)
            return
        }
        target.push(itemToMove)
    }

    solve() {
        
    }
}