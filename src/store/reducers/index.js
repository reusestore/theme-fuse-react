import {combineReducers} from 'redux';
import fuse from './fuse';
import quickPanel from './quickPanel.reducer';
import analyticsDashboardApp from 'main/content/apps/dashboards/analytics/store/reducers/index';
import mailApp from 'main/content/apps/mail/store/reducers/index';
import fileManagerApp from 'main/content/apps/file-manager/store/reducers/index';
import contactsApp from 'main/content/apps/contacts/store/reducers/index';
import calendarApp from 'main/content/apps/calendar/store/reducers/index';

const rootReducer = combineReducers({
    fuse,
    analyticsDashboardApp,
    mailApp,
    fileManagerApp,
    contactsApp,
    calendarApp,
    quickPanel
});

export default rootReducer;