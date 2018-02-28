import React from 'react'
import BoardData from './data/BoardData'
import Square from './Square'

class Board extends React.Component {
	state = {
		PlayerSquares = []
	}

	componentWillMount() {
	 	PlayerSquares = BoardData.getBoard();
	}

	 Board = () => {
		return (
			<div>
				<Square/>
			</div>
		)
	}
}

export default Board
