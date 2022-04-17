import { authRoles } from 'app/auth';
import JwtService from '../../auth/services/jwtService';

const SignOutConfig = {
  auth: authRoles.user,
  routes: [
    {
      path: 'sign-out',
      element: () => {
        JwtService.logout();
        return 'Logging out..';
      },
    },
  ],
};

export default SignOutConfig;
