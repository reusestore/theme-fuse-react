import SimpleFullWidthSample from './full-width';
import SimpleLeftSidebarSample from './left-sidebar';
import SimpleLeftSidebar2Sample from './left-sidebar-2';
import SimpleLeftSidebar3Sample from './left-sidebar-3';
import SimpleRightSidebarSample from './right-sidebar';
import SimpleRightSidebar2Sample from './right-sidebar-2';
import SimpleRightSidebar3Sample from './right-sidebar-3';
import SimpleTabbedSample from './tabbed';

export const simpleLayoutRoutes = [
    {
        path     : '/ui/page-layouts/simple/full-width',
        component: SimpleFullWidthSample
    },
    {
        path     : '/ui/page-layouts/simple/left-sidebar',
        component: SimpleLeftSidebarSample
    },
    {
        path     : '/ui/page-layouts/simple/left-sidebar-2',
        component: SimpleLeftSidebar2Sample
    },
    {
        path     : '/ui/page-layouts/simple/left-sidebar-3',
        component: SimpleLeftSidebar3Sample
    },
    {
        path     : '/ui/page-layouts/simple/right-sidebar',
        component: SimpleRightSidebarSample
    },
    {
        path     : '/ui/page-layouts/simple/right-sidebar-2',
        component: SimpleRightSidebar2Sample
    },
    {
        path     : '/ui/page-layouts/simple/right-sidebar-3',
        component: SimpleRightSidebar3Sample
    },
    {
        path     : '/ui/page-layouts/simple/tabbed',
        component: SimpleTabbedSample
    }
];