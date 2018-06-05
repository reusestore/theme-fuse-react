import MailConfirmPage from 'main/content/pages/auth/mail-confirm/MailConfirmPage';

export const MailConfirmPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/mail-confirm',
            component: MailConfirmPage
        }
    ]
};
