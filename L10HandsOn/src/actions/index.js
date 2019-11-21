export const increment = () => ({
	type: 'INCREMENT'
});

export const decrement = () => ({
	type: 'DECREMENT'
});

export const switchNumbers = (number) => ({
	type: 'SWITCHNUMBERS',
	number
});

export const countClicksReset = () => ({
	type: 'RESET'
});
