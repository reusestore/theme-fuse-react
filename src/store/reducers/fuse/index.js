import {combineReducers} from 'redux';
import navigation from './navigation.reducer';
import settings from './settings.reducer';
import shortcuts from './shortcuts.reducer';
import navbar from './navbar.reducer';

const fuseReducers = combineReducers({
    navigation,
    settings,
    shortcuts,
    navbar
});

export default fuseReducers;