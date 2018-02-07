import MailApp from './MailApp';
import React from 'react';
import {Redirect} from 'react-router-dom';

export const MailAppConfig = {
    settings: {
        layout: {
            navigation: 'left'
        },
        customScrollbars: true,
    },
    routes  : [
        {
            path     : '/apps/mail/label/:labelHandle/:mailId?',
            component: MailApp,
            layout   : {
                navigation: 'left'
            }
        },
        {
            path     : '/apps/mail/filter/:filterHandle/:mailId?',
            component: MailApp
        },
        {
            path     : '/apps/mail/:folderHandle/:mailId?',
            component: MailApp
        },
        {
            path     : '/apps/mail',
            component: () => <Redirect to="/apps/mail/inbox"/>
        }
    ]
};
