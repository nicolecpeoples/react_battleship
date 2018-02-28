export BoardData = {
	squares: getBoard()
}

getBoard = () => {
	BoardData.squares = createSquares()
}

createSquares = () => {
	for (let row = 0; row < 10; row++) {
		for (let column = 0; column < 10; column++) {
       BoardData.squares.push({x: row, y: column})
     }
	}
}
