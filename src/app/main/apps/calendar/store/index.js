import { combineReducers } from 'redux';
import events from './eventsSlice';

const reducer = combineReducers({
	events
});

export default reducer;
