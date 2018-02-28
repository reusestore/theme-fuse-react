import ForgotPasswordPage from 'main/content/pages/auth/forgot-password/ForgotPasswordPage';

export const ForgotPasswordPageConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/pages/auth/forgot-password',
            component: ForgotPasswordPage
        }
    ]
};
