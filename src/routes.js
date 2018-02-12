import _ from 'lodash';
import {MailAppConfig} from './main/content/apps/mail/MailAppConfig';
import {FileManagerAppConfig} from './main/content/apps/file-manager/FileManagerAppConfig';
import {UserInterfaceConfig} from './main/content/user-interface/UserInterfaceConfig';
import DemoApp from './main/content/DemoApp';
import DemoApp2 from './main/content/DemoApp2';

function setRoutes(config)
{
    let routes = [...config.routes];

    if ( config.settings && !_.isEmpty(config.settings) )
    {
        routes = routes.map((route) => {
            if ( route.settings )
            {
                return route;
            }
            return {
                ...route,
                settings: config.settings
            }
        })
    }

    return [...routes];
}

export const routes = [
    ...setRoutes(MailAppConfig),
    ...setRoutes(FileManagerAppConfig),
    ...setRoutes(UserInterfaceConfig),
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
