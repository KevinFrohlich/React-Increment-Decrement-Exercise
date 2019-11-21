const initialState = {
	count: 0,
	countClicks: 0
};

function counterReducer(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
				countClicks: state.countClicks + 1
			};
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1,
				countClicks: state.countClicks + 1
			};
		case 'SWITCHNUMBERS':
			return {
				...state,
				searchInput: action.number
			};
		case 'RESET':
			return {
				...state,
				count: (state.count = parseInt(state.searchInput)),
				countClicks: (state.countClicks = 0)
			};

		default:
			return state;
	}
}

export default counterReducer;
