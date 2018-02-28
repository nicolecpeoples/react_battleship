import React from 'react'
import BoardData from '../data/BoardData'
import Square from './Square'

class Board extends React.Component {
	state = {
		PlayerSquares: []
	}

	componentWillMount() {
		this.renderSquare();
	}

	renderSquare() {
		let column = [];
		for (let column = 1; column <= 10; column++) {
			this.renderRows(column);
		}
	}

	renderRows = (columnCount) => {
		let rows = [];
		for (let row = 1; row <= 10; row++) {
			rows.push(
				<Square
					xAxis= {columnCount}
					yAxis= {row}
				/>
			)
		}
		return this.state.PlayerSquares.push(rows);
	}

	render () {
		console.log(this.state.PlayerSquares)
		return (
			<div>
				{this.state.PlayerSquares.map(item => (
					<div>

					</div>
				))}
			</div>
		)
	}
}

export default Board
