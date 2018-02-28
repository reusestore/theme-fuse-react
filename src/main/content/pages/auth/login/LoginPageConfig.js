import LoginPage from 'main/content/pages/auth/login/LoginPage';

export const LoginPageConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/pages/auth/login',
            component: LoginPage
        }
    ]
};
