import {combineReducers} from 'redux';
import mailApp from '../../main/content/apps/mail/store/reducers/index';
import navigation from './navigation.reducer';
import settings from './settings.reducer';

const rootReducer = combineReducers({
    mailApp,
    navigation,
    settings
});

export default rootReducer;