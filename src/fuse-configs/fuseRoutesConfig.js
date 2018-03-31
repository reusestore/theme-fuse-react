import {UserInterfaceConfig} from 'main/content/user-interface/UserInterfaceConfig';
import {pagesRoutes} from 'main/content/pages/pagesRoutes';
import {FuseUtils} from '@fuse/index';
import {appsRoutes} from 'main/content/apps/appsRoutes';
import {ComponentsConfig} from 'main/content/components/ComponentsConfig';
import {ComponentsThirdPartyConfig} from 'main/content/components-third-party/ComponentsThirdPartyConfig';
import {GettingStartedConfig} from 'main/content/getting-started/GettingStartedConfig';
import {Redirect} from 'react-router-dom';
import React from 'react';

const routeConfigs = [
    ...appsRoutes,
    ...pagesRoutes,
    ComponentsConfig,
    ComponentsThirdPartyConfig,
    UserInterfaceConfig,
    GettingStartedConfig
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/apps/dashboards/analytics"/>
    }
];
