import {authRoles} from 'auth/auth';
import GuestRoleExample from 'main/content/auth/only-guest-role-example/GuestRoleExample';

export const GuestRoleExampleConfig = {
    settings: {
        layout: {}
    },
    auth    : authRoles.onlyGuest,//['guest']
    routes  : [
        {
            path     : '/auth/guest-role-example',
            component: GuestRoleExample
        }
    ]
};
