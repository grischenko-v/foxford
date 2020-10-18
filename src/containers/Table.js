import {connect} from 'react-redux';
import {selectAll, fetchUsers} from '../actions';
import UsersTable from '../components/Table';

const mapStateToProps = state => ({
	items: state.selectedItems,
	users: state.users
});

const mapDispatchToProps = dispatch => ({
	selectAll: items => dispatch(selectAll(items)),
	fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable)