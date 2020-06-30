import { combineReducers } from 'redux';
import widgets from './widgetsSlice';

const reducer = combineReducers({
	widgets
});

export default reducer;
