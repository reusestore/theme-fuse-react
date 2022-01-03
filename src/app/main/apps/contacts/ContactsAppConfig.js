import { lazy } from 'react';
import ContactView from 'app/main/apps/contacts/contact/ContactView';
import ContactForm from 'app/main/apps/contacts/contact/ContactForm';

const ContactsApp = lazy(() => import('./ContactsApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/contacts',
      element: <ContactsApp />,
      children: [
        {
          path: ':id',
          element: <ContactView />,
        },
        {
          path: ':id/edit',
          element: <ContactForm />,
        },
      ],
    },
  ],
};

export default ContactsAppConfig;
