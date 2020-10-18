const users = (state = [], action) => {
	switch (action.type) {
		case 'USERS_FETCHED':
			return action.users;
		default:
			return state
	}
};

export default users