import React from 'react';

export const ThirdPartyComponentsRoutes = [
    {
        path     : '/components/third-party/formsy',
        component: React.lazy(() => import('./formsy/FormsyDoc'))
    },
    {
        path     : '/components/third-party/datatables/react-table',
        component: React.lazy(() => import('./datatables/react-table/ReactTableDoc'))
    },
    {
        path     : '/components/third-party/google-map-react',
        component: React.lazy(() => import('./google-map-react/GoogleMapReactDoc'))
    },
    {
        path     : '/components/third-party/react-chartjs-2',
        component: React.lazy(() => import('./react-chartjs-2/ReactChartJs2Doc'))
    }
];

