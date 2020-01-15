import React from 'react';
import {Redirect} from 'react-router-dom';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'mailApp', en);
i18next.addResourceBundle('tr', 'mailApp', tr);
i18next.addResourceBundle('ar', 'mailApp', ar);

export const MailAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : [
                '/apps/mail/label/:labelHandle/:mailId?',
                '/apps/mail/filter/:filterHandle/:mailId?',
                '/apps/mail/:folderHandle/:mailId?'
            ],
            component: React.lazy(() => import('./MailApp'))
        },
        {
            path     : '/apps/mail',
            component: () => <Redirect to="/apps/mail/inbox"/>
        }
    ]
};
