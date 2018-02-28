import _ from 'lodash';
import DemoApp from './main/content/DemoApp';
import DemoApp2 from './main/content/DemoApp2';
import {MailAppConfig} from 'main/content/apps/mail/MailAppConfig';
import {FileManagerAppConfig} from 'main/content/apps/file-manager/FileManagerAppConfig';
import {ContactsAppConfig} from 'main/content/apps/contacts/ContactsAppConfig';
import {CalendarAppConfig} from 'main/content/apps/calendar/CalendarAppConfig';
import {UserInterfaceConfig} from 'main/content/user-interface/UserInterfaceConfig';
import {LoginPageConfig} from 'main/content/pages/auth/login/LoginPageConfig';
import {RegisterPageConfig} from 'main/content/pages/auth/register/RegisterPageConfig';

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
    ...setRoutes(ContactsAppConfig),
    ...setRoutes(CalendarAppConfig),
    ...setRoutes(UserInterfaceConfig),
    ...setRoutes(LoginPageConfig),
    ...setRoutes(RegisterPageConfig),
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
