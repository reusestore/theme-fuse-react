import { combineReducers } from 'redux';
import data from './dataSlice';
import state from './stateSlice';

const reducer = combineReducers({
	data,
	state
});
export default reducer;
