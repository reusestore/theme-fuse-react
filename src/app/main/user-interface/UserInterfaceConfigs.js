import { lazy } from 'react';
import iconsUIConfig from './icons/iconsUIConfig';

const Blank = lazy(() => import('./page-layouts/blank'));
const TypographyUI = lazy(() => import('./typography/TypographyUI'));
const TailwindCssUI = lazy(() => import('./tailwindcss/TailwindCssUI'));

const userInterfaceConfigs = [
  iconsUIConfig,
  // ...cardedLayoutRoutes,
  // ...simpleLayoutRoutes,
  // {
  //   path: 'ui/page-layouts/blank',
  //   element: <Blank />,
  // },
  // {
  //   path: 'ui/typography',
  //   element: <TypographyUI />,
  // },
  // {
  //   path: 'ui/tailwindcss',
  //   element: <TailwindCssUI />,
  // },
];

export default userInterfaceConfigs;
