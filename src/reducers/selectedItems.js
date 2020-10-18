const selectedItems = (state = [], action) => {
	switch (action.type) {
		case 'SELECT_ALL':
			return [...action.items];
		default:
			return state
	}
};

export default selectedItems