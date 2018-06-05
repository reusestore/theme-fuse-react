import RegisterPage from 'main/content/pages/auth/register/RegisterPage';

export const RegisterPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/register',
            component: RegisterPage
        }
    ]
};
