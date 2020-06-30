import { combineReducers } from 'redux';
import auth from 'app/auth/store';
import fuse from './fuse';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,
		...asyncReducers
	});

export default createReducer;
