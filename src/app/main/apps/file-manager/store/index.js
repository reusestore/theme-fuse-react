import { combineReducers } from 'redux';
import files from './filesSlice';

const reducer = combineReducers({
	files
});

export default reducer;
