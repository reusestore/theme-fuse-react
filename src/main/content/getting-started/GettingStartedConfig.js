import SettingsDoc from './settings/SettingsDoc';
import IntroductionDoc from './introduction/IntroductionDoc';
import PrerequisitesDoc from './prerequisites/PrerequisitesDoc';
import InstallationDoc from './installation/InstallationDoc';
import WorkingWithFuseDoc from './working-with-fuse/WorkingWithFuseDoc';
import ChangelogDoc from './changelog/ChangelogDoc';
import RoutingDoc from './routing/RoutingDoc';
import FirebaseAuthDoc from './firebase-auth/FirebaseAuthDoc';
import Auth0AuthDoc from './auth0-auth/Auth0AuthDoc';
import ProjectStructureDoc from './project-structure/ProjectStructureDoc';

export const GettingStartedConfig = {
    routes: [
        {
            path     : '/getting-started/introduction',
            component: IntroductionDoc
        },
        {
            path     : '/getting-started/prerequisites',
            component: PrerequisitesDoc
        },
        {
            path     : '/getting-started/installation',
            component: InstallationDoc
        },
        {
            path     : '/getting-started/working-with-fuse',
            component: WorkingWithFuseDoc
        },
        {
            path     : '/getting-started/project-structure',
            component: ProjectStructureDoc
        },
        {
            path     : '/getting-started/settings',
            component: SettingsDoc
        },
        {
            path     : '/getting-started/routing',
            component: RoutingDoc
        },
        {
            path     : '/getting-started/auth/firebase',
            component: FirebaseAuthDoc
        },
        {
            path     : '/getting-started/auth/auth0',
            component: Auth0AuthDoc
        },
        {
            path     : '/getting-started/changelog',
            component: ChangelogDoc
        }
    ]
};

