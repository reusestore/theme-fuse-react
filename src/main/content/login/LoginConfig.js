import Login from './Login';
import {authRoles} from 'auth/auth';

export const LoginConfig = {
    settings: {
        layout: {
            navigation: 'none',
            toolbar   : 'none',
            footer    : 'none'
        }
    },
    auth    :  authRoles.onlyGuest,
    routes  : [
        {
            path     : '/login',
            component: Login
        }
    ]
};

