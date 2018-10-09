import {FuseLoadable} from '@fuse';

export const GettingStartedConfig = {
    routes: [
        {
            path     : '/getting-started/introduction',
            component: FuseLoadable({
                loader: () => import('./introduction/IntroductionDoc')
            })
        },
        {
            path     : '/getting-started/prerequisites',
            component: FuseLoadable({
                loader: () => import('./prerequisites/PrerequisitesDoc')
            })
        },
        {
            path     : '/getting-started/installation',
            component: FuseLoadable({
                loader: () => import('./installation/InstallationDoc')
            })
        },
        {
            path     : '/getting-started/working-with-fuse',
            component: FuseLoadable({
                loader: () => import('./working-with-fuse/WorkingWithFuseDoc')
            })
        },
        {
            path     : '/getting-started/project-structure',
            component: FuseLoadable({
                loader: () => import('./project-structure/ProjectStructureDoc')
            })
        },
        {
            path     : '/getting-started/settings',
            component: FuseLoadable({
                loader: () => import('./settings/SettingsDoc')
            })
        },
        {
            path     : '/getting-started/routing',
            component: FuseLoadable({
                loader: () => import('./routing/RoutingDoc')
            })
        },
        {
            path     : '/getting-started/code-splitting',
            component: FuseLoadable({
                loader: () => import('./code-splitting/CodeSplittingDoc')
            })
        },
        {
            path     : '/getting-started/auth/firebase',
            component: FuseLoadable({
                loader: () => import('./firebase-auth/FirebaseAuthDoc')
            })
        },
        {
            path     : '/getting-started/auth/auth0',
            component: FuseLoadable({
                loader: () => import('./auth0-auth/Auth0AuthDoc')
            })
        },
        {
            path     : '/getting-started/changelog',
            component: FuseLoadable({
                loader: () => import('./changelog/ChangelogDoc')
            })
        }
    ]
};

