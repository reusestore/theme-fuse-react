import {combineReducers} from 'redux';
import navigation from './navigation.reducer';
import settings from './settings.reducer';
import mailApp from 'main/content/apps/mail/store/reducers/index';
import fileManagerApp from 'main/content/apps/file-manager/store/reducers/index';

const rootReducer = combineReducers({
    navigation,
    settings,
    mailApp,
    fileManagerApp
});

export default rootReducer;