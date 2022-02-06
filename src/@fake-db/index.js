import './api/countries-api';
import './api/contacts-api';
import './api/chat-api';
import './api/tasks-api';
import './api/academy-api';
import './api/ecommerce-api';
import './api/file-manager-api';
import './api/help-center-api';
import './api/notes-api';
import './api/scrumboard-api';
import './api/mailbox-api';
import './api/calendar-api';
import './db/analytics-dashboard-db';
import './db/auth-db';
import './db/calendar-db';
import './db/faq-db';
import './db/icons-db';
import './db/invoices-db';
import './db/knowledge-base-db';
import './db/mail-db';
import './db/notes-db';
import './db/profile-db';
import './db/project-dashboard-db';
import './db/quick-panel-db';
import './db/scrumboard-db';
import './db/search-db';
import './db/todo-db';
import './db/notification-panel-db';
import history from '@history';
import mock from './mock';

mock.onAny().passThrough();

if (module?.hot?.status() === 'apply') {
  const { pathname } = history.location;
  history.push('/loading');
  history.push({ pathname });
}
