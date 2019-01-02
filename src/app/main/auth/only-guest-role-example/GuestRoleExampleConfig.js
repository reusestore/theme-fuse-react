import {authRoles} from 'app/auth';
import GuestRoleExample from 'app/main/auth/only-guest-role-example/GuestRoleExample';

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
