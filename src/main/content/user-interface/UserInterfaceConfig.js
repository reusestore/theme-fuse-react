import {cardedLayoutRoutes} from './page-layouts/carded/cardedLayoutRoutes';
import {simpleLayoutRoutes} from './page-layouts/simple/simpleLayoutRoutes';
import BlankSample from './page-layouts/blank';
import IconsUI from 'main/content/user-interface/icons/IconsUI';

export const UserInterfaceConfig = {
    routes: [
        ...cardedLayoutRoutes,
        ...simpleLayoutRoutes,
        {
            path     : '/ui/page-layouts/blank',
            component: BlankSample
        },
        {
            path     : '/ui/icons',
            component: IconsUI
        }
    ]
};

