import {FuseLoadable} from '@fuse';

export const DocumentationConfig = {
    routes: [
        {
            path     : '/documentation/introduction',
            component: FuseLoadable({
                loader: () => import('./introduction/IntroductionDoc')
            })
        },
        {
            path     : '/documentation/prerequisites',
            component: FuseLoadable({
                loader: () => import('./prerequisites/PrerequisitesDoc')
            })
        },
        {
            path     : '/documentation/installation',
            component: FuseLoadable({
                loader: () => import('./installation/InstallationDoc')
            })
        },
        {
            path     : '/documentation/working-with-fuse',
            component: FuseLoadable({
                loader: () => import('./working-with-fuse/WorkingWithFuseDoc')
            })
        },
        {
            path     : '/documentation/project-structure',
            component: FuseLoadable({
                loader: () => import('./project-structure/ProjectStructureDoc')
            })
        },
        {
            path     : '/documentation/settings',
            component: FuseLoadable({
                loader: () => import('./settings/SettingsDoc')
            })
        },
        {
            path     : '/documentation/routing',
            component: FuseLoadable({
                loader: () => import('./routing/RoutingDoc')
            })
        },
        {
            path     : '/documentation/code-splitting',
            component: FuseLoadable({
                loader: () => import('./code-splitting/CodeSplittingDoc')
            })
        },
        {
            path     : '/documentation/auth/jwt',
            component: FuseLoadable({
                loader: () => import('./jwt-auth/jwtAuthDoc')
            })
        },
        {
            path     : '/documentation/auth/firebase',
            component: FuseLoadable({
                loader: () => import('./firebase-auth/FirebaseAuthDoc')
            })
        },
        {
            path     : '/documentation/auth/auth0',
            component: FuseLoadable({
                loader: () => import('./auth0-auth/Auth0AuthDoc')
            })
        },
        {
            path     : '/documentation/changelog',
            component: FuseLoadable({
                loader: () => import('./changelog/ChangelogDoc')
            })
        }
    ]
};

