import ProfilePage from 'main/content/pages/profile/ProfilePage';

export const ProfilePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/profile',
            component: ProfilePage
        }
    ]
};
