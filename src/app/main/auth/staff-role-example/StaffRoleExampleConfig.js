import {authRoles} from 'app/auth';
import StaffRoleExample from 'app/main/auth/staff-role-example/StaffRoleExample';

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
