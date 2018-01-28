import {cardedLayoutRoutes} from './page-layouts/carded/cardedLayoutRoutes';
import {simpleLayoutRoutes} from './page-layouts/simple/simpleLayoutRoutes';
import BlankSample from './page-layouts/blank';

export const UserInterfaceConfig = {
    routes: [
        ...cardedLayoutRoutes,
        ...simpleLayoutRoutes,
        {
            path     : '/ui/page-layouts/blank',
            component: BlankSample
        }
    ]
};

