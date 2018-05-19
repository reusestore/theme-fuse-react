import {authRoles} from 'auth/auth';
import Register from './Register';

export const RegisterConfig = {
    settings: {
        layout: {
            navbar : 'none',
            toolbar: 'none',
            footer : 'none'
        }
    },
    auth    : authRoles.onlyGuest,
    routes  : [
        {
            path     : '/register',
            component: Register
        }
    ]
};

