import LockPage from 'main/content/pages/auth/lock/LockPage';

export const LockPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/lock',
            component: LockPage
        }
    ]
};
