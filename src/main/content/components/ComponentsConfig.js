import {MaterialUIRoutes} from 'main/content/components/material-ui/MaterialUIRoutes';
import {FuseLoadable} from '@fuse';

export const ComponentsConfig = {
    routes: [
        ...MaterialUIRoutes,
        {
            path     : '/components/fuse-theme',
            component: FuseLoadable({
                loader: () => import('./fuse-theme/FuseThemeDoc')
            })
        },
        {
            path     : '/components/fuse-authorization',
            component: FuseLoadable({
                loader: () => import('./fuse-authorization/FuseAuthorizationDoc')
            })
        },
        {
            path     : '/components/fuse-layout',
            component: FuseLoadable({
                loader: () => import('./fuse-layout/FuseLayoutDoc')
            })
        },
        {
            path     : '/components/fuse-page-carded',
            component: FuseLoadable({
                loader: () => import('./fuse-page-carded/FusePageCardedDoc')
            })
        },
        {
            path     : '/components/fuse-page-simple',
            component: FuseLoadable({
                loader: () => import('./fuse-page-simple/FusePageSimpleDoc')
            })
        },
        {
            path     : '/components/fuse-scrollbars',
            component: FuseLoadable({
                loader: () => import('./fuse-scrollbars/FuseScrollbarsDoc')
            })
        },
        {
            path     : '/components/fuse-highlight',
            component: FuseLoadable({
                loader: () => import('./fuse-highlight/FuseHighlightDoc')
            })
        },
        {
            path     : '/components/fuse-countdown',
            component: FuseLoadable({
                loader: () => import('./fuse-countdown/FuseCountdownDoc')
            })
        },
        {
            path     : '/components/fuse-navigation',
            component: FuseLoadable({
                loader: () => import('./fuse-navigation/FuseNavigationDoc')
            })
        },
        {
            path     : '/components/fuse-message',
            component: FuseLoadable({
                loader: () => import('./fuse-message/FuseMessageDoc')
            })
        },
        {
            path     : '/components/fuse-animate',
            component: FuseLoadable({
                loader: () => import('./fuse-animate/FuseAnimateDoc')
            })
        },
        {
            path     : '/components/fuse-animate-group',
            component: FuseLoadable({
                loader: () => import('./fuse-animate-group/FuseAnimateGroupDoc')
            })
        }
    ]
};

