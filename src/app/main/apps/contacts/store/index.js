import { combineReducers } from 'redux';
import contacts from './contactsSlice';
import user from './userSlice';

const reducer = combineReducers({
	contacts,
	user
});

export default reducer;
