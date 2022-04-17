import JwtService from '../../auth/services/jwtService';
import authRoles from '../../auth/authRoles';

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
