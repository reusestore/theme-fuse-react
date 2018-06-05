import ForgotPasswordPage from 'main/content/pages/auth/forgot-password/ForgotPasswordPage';

export const ForgotPasswordPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/forgot-password',
            component: ForgotPasswordPage
        }
    ]
};
