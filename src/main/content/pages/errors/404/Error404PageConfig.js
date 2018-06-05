import Error404Page from 'main/content/pages/errors/404/Error404Page';

export const Error404PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/errors/error-404',
            component: Error404Page
        }
    ]
};
