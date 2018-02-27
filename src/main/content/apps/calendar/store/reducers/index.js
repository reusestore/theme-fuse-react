import {combineReducers} from 'redux';
import events from './events.reducer';

const calendarAppReducers = combineReducers({
    events
});

export default calendarAppReducers;