import ResetPasswordPage from 'main/content/pages/auth/reset-password/ResetPasswordPage';

export const ResetPasswordPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/reset-password',
            component: ResetPasswordPage
        }
    ]
};
