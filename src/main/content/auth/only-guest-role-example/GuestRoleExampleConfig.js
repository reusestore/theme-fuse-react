import {authRoles} from 'auth';
import GuestRoleExample from 'main/content/auth/only-guest-role-example/GuestRoleExample';

export const GuestRoleExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.onlyGuest,//['guest']
    routes  : [
        {
            path     : '/auth/guest-role-example',
            component: GuestRoleExample
        }
    ]
};
