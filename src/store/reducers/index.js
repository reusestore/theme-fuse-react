import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'auth/store/reducers';
import quickPanel from 'main/quickPanel/store/reducers';
import chatPanel from 'main/chatPanel/store/reducers';
import analyticsDashboardApp from 'main/content/apps/dashboards/analytics/store/reducers';
import mailApp from 'main/content/apps/mail/store/reducers';
import todoApp from 'main/content/apps/todo/store/reducers';
import fileManagerApp from 'main/content/apps/file-manager/store/reducers';
import contactsApp from 'main/content/apps/contacts/store/reducers';
import calendarApp from 'main/content/apps/calendar/store/reducers';
import chatApp from "main/content/apps/chat/store/reducers";

const rootReducer = combineReducers({
    auth,
    fuse,
    analyticsDashboardApp,
    mailApp,
    todoApp,
    fileManagerApp,
    contactsApp,
    calendarApp,
    quickPanel,
    chatPanel,
    chatApp
});

export default rootReducer;