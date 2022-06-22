class Puzzle {
    A = []
    B = []
    C = []

    constructor(size) {
        this.size = size;
        if (typeof size !== 'number') return console.warn("Enter a numeric value as the argument when starting a new Puzzle");
        for (let index = size; index > 0; index--) {
            this.A.push(index)
        }
        console.log(`Generated ${size} disks on tower A. Use "this.solve()"`);
    }

    move(origin, target) {
        const itemToMove = origin.pop()
        if (itemToMove === undefined) return;
        if (target.find(item => item < itemToMove)) {
            origin.push(itemToMove)
            return
        }
        target.push(itemToMove)
    }

    solve() {
        if (isNaN(this.size)) return console.error(`Unable to solve - Puzzle not generated.`);
        let A = this.A;
        let B = this.B;
        let C = this.C;
        let start = A   // start position (First Move starts from A)
        let aux         // temporary position
        let end         // end position
        let prevStart       // last saved Start
        let prevAux         // last saved Auxiliary
        let prevEnd         // last saved End
        function saveAsPrevious() {   // saving function
            prevStart = start;
            prevAux = aux;
            prevEnd = end;
        }


        if (this.size % 2 === 0) {    // determine first move
            aux = B;
            end = C;
        } else {   
            aux = C;
            end = B;
        }

        // while (C.length !== this.size) {

        while (C.length !== this.size) {

            //========================= FIRST REDO ============================
            // if (A.length < this.size || A[0] === 1) {
            //     this.move(A, C)
            //     break
            // } else if (C[0] === this.size) {
            //     if (this.size % 2 === 0) {
            //         tmp = C;
            //         end = B;
            //     } else {   
            //         tmp = C;
            //         end = B;
            //     }
            //     break
            // } else {
            //     this.move(start, tmp)
            //     this.move(start, end)
            //     this.move(tmp, end)
            //     end = tmp
            // }
            //=======================================================

            if (A.length === 1) {
                this.move(A, C)
            } else {
                this.move(start, aux);
                this.move(start, end);
                this.move(aux, end);
                saveAsPrevious()
                end = prevAux              // this means that 'aux = null' now (aux is not needed to move one disk)
                this.move(start, end);
                aux = prevStart
                start = prevEnd         // using 'prevEnd' because 'end' was overwritten by aux
                this.move(start, aux);
                this.move(start, end);
                this.move(aux, end);
                saveAsPrevious()
                end = prevStart
                start = prevAux
                this.move(start, end);
                start = prevEnd
                aux = 
                
                console.log("Saved:         ","prevStart", prevStart, "prevAux", prevAux, "prevEnd", prevEnd);
                console.log("Next step:     ",start," >> ", aux," >> ", end);

            }
            break
        }
        
        // console.log("Saved Items:", "   start", start, "    aux",  aux, "   end", end);
        console.log("");
        console.log("  /-------------- Tower of Hanoi --------------/");
        console.log(`  A: [${A}]         B: [${B}]       C: [${C}]`);
        console.log("/--------------------------------------------/");
        if  (C.length === this.size) return console.log("Puzzle solved succesfully.");
    }
}

        //============================ FIRST WORKING PIECE OF CODE ========================
        // ---- Decided to start over after this because of "Eureca!" moment :D ----
        //
        // while (C.length !== this.size) {
        //     if (A.length === 1 && A[0] === this.size) {
        //         start
        //         this.move(A, C)
        //         // break
        //     } else if (C[0] === this.size && C.length === 1) {
        //         if (this.size % 2 === 0) {    // determine first move
        //             tmp = C;
        //             end = B;
        //         } else {   
        //             tmp = C;
        //             end = B;
        //         }
        //         break
        //     } else {
        //         this.move(start, tmp)
        //         this.move(start, end)
        //         this.move(tmp, end)
        //         end = tmp
        //     }
            // break
        //=========================
        
    


        // function Process(start, temp, end) {
        //     this.move(start, temp)
        //     move(start, end)
        //     move(temp, end)
        // }
        
        // ================= CORRECT MOVES ====================
        //  ---- started to recognize pattern after fully writing out moves! :) ----
        // this.move(A, C);
        // this.move(A, B);
        // this.move(C, B);

        // this.move(A, C);

        // this.move(B, A);
        // this.move(B, C);
        // this.move(A, C);

        
        // this.move(A, B);
        //==========================================

        
        
        // if (this.size % 2 === 0) {
        //     console.log("even");
        //     this.move(A, B);
        //     this.move(A, C);
        //     this.move(B, C)
        // } else {
        //     console.log("uneven");
        //     if (this.C.length !== this.size) console.log("solving in progress...");;
        //     while (this.C.length !== this.size) {
        //         if (A.length === 1) {
        //             this.move(A, C);
        //             this.move(B, A);
        //         } else {
        //             if (C.length > 0) break;
        //             this.move(A, C);
        //             this.move(A, B);
        //             this.move(C, B);
        //         }
        //     }
        // }


new Puzzle(3).solve();

