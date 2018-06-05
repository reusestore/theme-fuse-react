import Error500Page from 'main/content/pages/errors/500/Error500Page';

export const Error500PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/errors/error-500',
            component: Error500Page
        }
    ]
};
