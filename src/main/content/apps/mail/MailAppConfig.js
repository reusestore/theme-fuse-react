import MailApp from './MailApp';

export const MailAppConfig = {
    layout: {
        navigation: 'left'
    },
    routes: [
        {
            path     : '/apps/mail/label/:labelHandle/:mailId?',
            component: MailApp,
            layout: {
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
            component: MailApp
        }
    ]
};
