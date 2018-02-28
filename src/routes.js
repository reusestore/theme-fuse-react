import DemoApp from './main/content/DemoApp';
import DemoApp2 from './main/content/DemoApp2';
import {UserInterfaceConfig} from 'main/content/user-interface/UserInterfaceConfig';
import {pagesRoutes} from 'main/content/pages/pagesRoutes';
import {FuseUtils} from '@fuse';
import {appsRoutes} from 'main/content/apps/appsRoutes';

const routeConfigs = [
    ...appsRoutes,
    ...pagesRoutes,
    UserInterfaceConfig
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/demo',
        exact    : true,
        component: DemoApp
    },
    {
        path     : '/demo2',
        exact    : true,
        component: DemoApp2
    },
    {
        path     : '/',
        exact    : true,
        component: DemoApp
    }
];
