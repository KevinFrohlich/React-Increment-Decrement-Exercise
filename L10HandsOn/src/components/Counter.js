import React from 'react';

const Counter = ({
	count,
	onDecrement,
	onIncrement,
	countClicks,
	onSwitchNumbers,
	onCountClicksReset,
	searchNumber
}) => {
	return (
		<div>
			<div>
				<button onClick={onDecrement}>-</button>
				<span>{count}</span>
				<button onClick={onIncrement}>+</button>
				<br />
				<div>
					<h3>Times the increment/decrement buttons have been clicked: {countClicks}</h3>
					<input onChange={(event) => onSwitchNumbers(event.target.value)} type="number" />
					<button onClick={() => onCountClicksReset(searchNumber)}>Change Count Number</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
