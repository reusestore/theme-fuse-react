import DemoApp from './main/content/DemoApp';
import {MailAppConfig} from './main/content/apps/mail/MailAppConfig';
import {UserInterfaceConfig} from './main/content/user-interface/UserInterfaceConfig';
import _ from 'lodash';

function setRoutes(config)
{
    let routes = [...config.routes];

    if ( config.layout && !_.isEmpty(config.layout) )
    {
        routes = routes.map((route) => {
            if ( route.layout )
            {
                return route;
            }
            return {
                ...route,
                layout: config.layout
            }
        })
    }

    return [...routes];
}

export const routes = [
    ...setRoutes(MailAppConfig),
    ...setRoutes(UserInterfaceConfig),
    {
        path     : '/demo',
        exact    : true,
        component: DemoApp
    },
    {
        path     : '/',
        exact    : true,
        component: DemoApp
    }
];
