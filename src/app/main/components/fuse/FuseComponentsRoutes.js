import React from 'react';

export const FuseComponentsRoutes = [
    {
        path     : '/components/fuse/fuse-theme',
        component: React.lazy(() => import('./fuse-theme/FuseThemeDoc'))
    },
    {
        path     : '/components/fuse/fuse-authorization',
        component: React.lazy(() => import('./fuse-authorization/FuseAuthorizationDoc'))
    },
    {
        path     : '/components/fuse/fuse-layout',
        component: React.lazy(() => import('./fuse-layout/FuseLayoutDoc'))
    },
    {
        path     : '/components/fuse/fuse-page-carded',
        component: React.lazy(() => import('./fuse-page-carded/FusePageCardedDoc'))
    },
    {
        path     : '/components/fuse/fuse-page-simple',
        component: React.lazy(() => import('./fuse-page-simple/FusePageSimpleDoc'))
    },
    {
        path     : '/components/fuse/fuse-scrollbars',
        component: React.lazy(() => import('./fuse-scrollbars/FuseScrollbarsDoc'))
    },
    {
        path     : '/components/fuse/fuse-highlight',
        component: React.lazy(() => import('./fuse-highlight/FuseHighlightDoc'))
    },
    {
        path     : '/components/fuse/fuse-countdown',
        component: React.lazy(() => import('./fuse-countdown/FuseCountdownDoc'))
    },
    {
        path     : '/components/fuse/fuse-navigation',
        component: React.lazy(() => import('./fuse-navigation/FuseNavigationDoc'))
    },
    {
        path     : '/components/fuse/fuse-message',
        component: React.lazy(() => import('./fuse-message/FuseMessageDoc'))
    },
    {
        path     : '/components/fuse/fuse-dialog',
        component: React.lazy(() => import('./fuse-dialog/FuseDialogDoc'))
    },
    {
        path     : '/components/fuse/fuse-animate',
        component: React.lazy(() => import('./fuse-animate/FuseAnimateDoc'))
    },
    {
        path     : '/components/fuse/fuse-animate-group',
        component: React.lazy(() => import('./fuse-animate-group/FuseAnimateGroupDoc'))
    },
    {
        path     : '/components/fuse/fuse-chip-select',
        component: React.lazy(() => import('./fuse-chip-select/FuseChipSelectDoc'))
    }
];
