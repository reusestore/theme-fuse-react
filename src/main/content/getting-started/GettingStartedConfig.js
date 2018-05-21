import SettingsDoc from 'main/content/getting-started/settings/SettingsDoc';
import IntroductionDoc from 'main/content/getting-started/introduction/IntroductionDoc';
import PrerequisitesDoc from 'main/content/getting-started/prerequisites/PrerequisitesDoc';
import InstallationDoc from 'main/content/getting-started/installation/InstallationDoc';
import WorkingWithFuseDoc from 'main/content/getting-started/working-with-fuse/WorkingWithFuseDoc';
import ChangelogDoc from 'main/content/getting-started/changelog/ChangelogDoc';
import RoutingDoc from 'main/content/getting-started/routing/RoutingDoc';
import FirebaseAuthDoc from 'main/content/getting-started/firebase-auth/FirebaseAuthDoc';

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
            path     : '/getting-started/settings',
            component: SettingsDoc
        },
        {
            path     : '/getting-started/routing',
            component: RoutingDoc
        },
        {
            path     : '/getting-started/firebase-auth',
            component: FirebaseAuthDoc
        },
        {
            path     : '/getting-started/changelog',
            component: ChangelogDoc
        }
    ]
};

