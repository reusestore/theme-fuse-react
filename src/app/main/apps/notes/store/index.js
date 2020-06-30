import { combineReducers } from 'redux';
import labels from './labelsSlice';
import notes from './notesSlice';

const reducer = combineReducers({
	notes,
	labels
});

export default reducer;
