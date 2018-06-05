import LoginPage from 'main/content/pages/auth/login/LoginPage';

export const LoginPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/login',
            component: LoginPage
        }
    ]
};
