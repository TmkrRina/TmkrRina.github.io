window.onload = function () {
    let matrix = [];


    let puzzleArea = document.getElementById("puzzlearea");
    let puzzlepieces = document.getElementsByClassName("puzzlepiece");

    let index = 0;
    let emptyTile = [3, 3];

    function removeHoverEffect() {
        for(let i = 0; i < puzzlepieces.length; i++){
            puzzlepieces[i].classList.remove("movablepiece");
        }
    }

    function addHoverEffect(){
        // Add hover effect css class to the neighbors of the empty
        let [row, col] = emptyTile;

        // Set the row and columns of the top, bottom, left and right only if the elements are not at the edge of the puzzlearea
        let top = row > 0 ? [row-1, col] : null;
        let bottom = row < 3 ? [row+1, col] : null;
        let left = col > 0 ? [row, col-1] : null;
        let right = col < 3 ? [row, col+1] : null;

        
        if(top) {
            [row, col] = top;
            matrix[row][col].classList.add('movablepiece')
        };

        if(bottom) {
            [row, col] = bottom;
            matrix[row][col].classList.add('movablepiece');
        }

        if(left) {
            [row, col] = left;
            matrix[row][col].classList.add('movablepiece');
        }

        if(right) {
            [row, col] = right;
            matrix[row][col].classList.add('movablepiece');
        }
    }

    function checkNeighboringTile() {
        // Remove all hover class style
        removeHoverEffect();

        // Parse the row and column of the clicked element to integer
        let row =  parseInt(this.dataset.row);
        let column =  parseInt(this.dataset.column)

        // get the position of the top element from the clicked element
        let top = [
            row - 1,
            column
        ];

        // get the position of the bottom element from the clicked element
        let bottom = [
            row + 1,
            column
        ];

        // get the position of the right element from the clicked element
        let right = [
            row,
            column + 1
        ];

        // get the position of the left element from the clicked element
        let left = [
            row,
            column - 1
        ];


        // Flag for deciding whether to move the clicked element or not
        let shouldMove = false;

        // Check if the top position from the clicked element is empty
        if (top[0] == emptyTile[0] && top[1] == emptyTile[1]) {
            this.style.top = emptyTile[0]*100 + "px";
            this.style.left = emptyTile[1]*100 + "px";
            shouldMove = true;
        }

        // Check if the bottom position from the clicked element is empty
        if (bottom[0] == emptyTile[0] && bottom[1] == emptyTile[1]) {
            this.style.top = emptyTile[0]*100 + "px";
            this.style.left = emptyTile[1]*100 + "px";
            shouldMove = true;
        }

        // Check if the right position from the clicked element is empty
        if (right[0] == emptyTile[0] && right[1] == emptyTile[1]) {
            this.style.top = emptyTile[0]*100 + "px";
            this.style.left = emptyTile[1]*100 + "px";
            shouldMove = true;
        }

        // Check if the left position from the clicked element is empty
        if (left[0] == emptyTile[0] && left[1] == emptyTile[1]) {
            this.style.top = emptyTile[0]*100 + "px";
            this.style.left = emptyTile[1]*100 + "px";
            shouldMove = true;
        }

        // if either top, bottom, left or right is empty it means the clicked element can move
        if(shouldMove) {
            // Save the current elements position for use to change the value of the matrix
            const old = [parseInt(this.dataset.row), parseInt(this.dataset.column)]

            // Set the row and column dataset to the emptyTile row and column
            this.dataset.row = emptyTile[0];
            this.dataset.column = emptyTile[1];

            // Change the value of the empty position in the matrix to the clicked element
            matrix[emptyTile[0]][emptyTile[1]] = this;

            // Change the value of the element position in the matrix to null which means empty
            matrix[old[0]][old[1]] = null;

            // Set the value of the emptyTile to the clicked element
            emptyTile = [row, column];
        }

        addHoverEffect()
    }

    for (let i = 0; i < (Math.ceil(puzzlepieces.length / 4)); i++) {
        let row = [];
        for (let j = 0; j < 4; j++) {
            if (puzzlepieces[index]) {
                puzzlepieces[index].dataset.row = i;
                puzzlepieces[index].dataset.column = j;
                puzzlepieces[index].addEventListener("click", checkNeighboringTile);
                row.push(puzzlepieces[index])
            }
            index++;
        }
        matrix.push(row);
    }
    
    addHoverEffect()

};
