import ForgotPassword2Page from 'main/content/pages/auth/forgot-password-2/ForgotPassword2Page';

export const ForgotPassword2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/forgot-password-2',
            component: ForgotPassword2Page
        }
    ]
};
