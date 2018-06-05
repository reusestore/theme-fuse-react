import ContactsApp from 'main/content/apps/contacts/ContactsApp';
import React from 'react';
import {Redirect} from 'react-router-dom';

export const ContactsAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/contacts/:id',
            component: ContactsApp
        },
        {
            path     : '/apps/contacts',
            component: () => <Redirect to="/apps/contacts/all"/>
        }
    ]
};
