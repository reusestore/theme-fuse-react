import {combineReducers} from 'redux';
import navigation from './navigation.reducer';
import settings from './settings.reducer';

const fuseReducers = combineReducers({
    navigation,
    settings
});

export default fuseReducers;