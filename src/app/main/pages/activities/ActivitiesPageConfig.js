import { lazy } from 'react';

const ActivitiesPage = lazy(() => import('./ActivitiesPage'));

const ActivitiesPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/activities',
      element: <ActivitiesPage />,
    },
  ],
};

export default ActivitiesPageConfig;
