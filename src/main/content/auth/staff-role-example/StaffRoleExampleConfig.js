import {authRoles} from 'auth';
import StaffRoleExample from 'main/content/auth/staff-role-example/StaffRoleExample';

export const StaffRoleExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.staff,//['admin','staff']
    routes  : [
        {
            path     : '/auth/staff-role-example',
            component: StaffRoleExample
        }
    ]
};
