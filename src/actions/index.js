export const selectAll = items => ({
	type: 'SELECT_ALL',
	items
});

export const fetchUsers = () => dispatch => {
	fetch("/api/users")
		.then((res) => res.json())
		.then((json) => {
			dispatch({type: 'USERS_FETCHED', users: json.users});
		})
};

