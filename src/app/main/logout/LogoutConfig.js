import {authRoles} from 'app/auth';
import {logoutUser} from 'app/auth/store/actions';
import store from 'app/store';

export const LogoutConfig = {
    auth  : authRoles.user,
    routes: [
        {
            path     : '/logout',
            component: () => {
                store.dispatch(logoutUser());
                return 'Logging out..'
            }
        }
    ]
};

