const BoardData = {
	squares: [],
	getBoard() {
		return this.createSquares()
	},

	createSquares () {
		for (let row = 1; row <= 10; row++) {
			for (let column = 1; column <= 10; column++) {
	       BoardData.squares.push({x: row, y: column})
	     }
		}
		return BoardData.squares;
	}
}

export default BoardData
