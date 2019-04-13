import React from 'react';
import {AuthenticationDocRoutes} from './authentication/AuthenticationDocRoutes';
import {GettingStartedDocRoutes} from './getting-started/GettingStartedDocRoutes';
import {WorkingWithFuseReactDocRoutes} from './working-with-fuse-react/WorkingWithFuseReactDocRoutes';

export const DocumentationConfig = {
    routes: [
        {
            path     : '/documentation/changelog',
            component: React.lazy(() => import('./changelog/ChangelogDoc'))
        },
        ...GettingStartedDocRoutes,
        ...WorkingWithFuseReactDocRoutes,
        ...AuthenticationDocRoutes
    ]
};

