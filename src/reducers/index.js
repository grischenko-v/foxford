import {combineReducers} from 'redux';
import selectedItems from './selectedItems';
import users from './users';

export default combineReducers({
	selectedItems,
	users,
})