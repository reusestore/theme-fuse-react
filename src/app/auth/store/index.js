import { combineReducers } from 'redux';
import login from './loginSlice';
import register from './registerSlice';
import user from './userSlice';

const authReducers = combineReducers({
	user,
	login,
	register
});

export default authReducers;
