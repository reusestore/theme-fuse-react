import {authRoles} from 'auth/auth';
import AdminRoleExample from 'main/content/auth/admin-role-example/AdminRoleExample';

export const AdminRoleExampleConfig = {
    settings: {
        layout: {}
    },
    auth    : authRoles.admin,//['admin']
    routes  : [
        {
            path     : '/auth/admin-role-example',
            component: AdminRoleExample
        }
    ]
};
