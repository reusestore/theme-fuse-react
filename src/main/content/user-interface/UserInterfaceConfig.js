import {cardedLayoutRoutes} from './page-layouts/carded/cardedLayoutRoutes';
import {simpleLayoutRoutes} from './page-layouts/simple/simpleLayoutRoutes';
import BlankSample from './page-layouts/blank';
import IconsUI from 'main/content/user-interface/icons/IconsUI';
import TypographyUI from 'main/content/user-interface/typography/TypographyUI';
import HelperClassesUI from 'main/content/user-interface/helper-classes/HelperClassesUI';

export const UserInterfaceConfig = {

    routes  : [
        ...cardedLayoutRoutes,
        ...simpleLayoutRoutes,
        {
            path     : '/ui/page-layouts/blank',
            component: BlankSample
        },
        {
            path     : '/ui/icons',
            component: IconsUI
        },
        {
            path     : '/ui/typography',
            component: TypographyUI
        },
        {
            path     : '/ui/helper-classes',
            component: HelperClassesUI
        }
    ]
};

