import {authRoles} from 'app/auth';
import AdminRoleExample from 'app/main/auth/admin-role-example/AdminRoleExample';

export const AdminRoleExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.admin,//['admin']
    routes  : [
        {
            path     : '/auth/admin-role-example',
            component: AdminRoleExample
        }
    ]
};
