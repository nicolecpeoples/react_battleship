import React from 'react'

let styles = {
	display: 'inline-block',
	background: 'blue',
	height: '50px',
	width: '50px',
	border: '1px solid gray'
}

const Square = (props) => {
	return (
		<span className="Square"
			style={styles}
			onClick={(e) => console.log(props.xAxis, props.yAxis)}
		>
		</span>
	)
}

export default Square
