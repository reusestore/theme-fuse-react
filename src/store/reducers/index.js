import {combineReducers} from 'redux';
import fuse from './fuse';
import mailApp from 'main/content/apps/mail/store/reducers/index';
import fileManagerApp from 'main/content/apps/file-manager/store/reducers/index';
import contactsApp from 'main/content/apps/contacts/store/reducers/index';
import calendarApp from 'main/content/apps/calendar/store/reducers/index';

const rootReducer = combineReducers({
    fuse,
    mailApp,
    fileManagerApp,
    contactsApp,
    calendarApp
});

export default rootReducer;