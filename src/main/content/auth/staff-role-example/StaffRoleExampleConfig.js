import {authRoles} from 'auth/auth';
import StaffRoleExample from 'main/content/auth/staff-role-example/StaffRoleExample';

export const StaffRoleExampleConfig = {
    settings: {
        layout: {}
    },
    auth    : authRoles.staff,//['admin','staff']
    routes  : [
        {
            path     : '/auth/staff-role-example',
            component: StaffRoleExample
        }
    ]
};
