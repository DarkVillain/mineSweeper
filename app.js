document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector
    let width = 10
    let squares = []

    //Create Board
    function createBoard() {
        for(let i = 0; i <= width*width) {
            const square = document.createElement('div')
            square.setAttribute('id', i)
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()

})