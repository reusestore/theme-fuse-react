import {combineReducers} from 'redux';
import navigation from './navigation.reducer';
import settings from './settings.reducer';
import shortcuts from './shortcuts.reducer';

const fuseReducers = combineReducers({
    navigation,
    settings,
    shortcuts
});

export default fuseReducers;