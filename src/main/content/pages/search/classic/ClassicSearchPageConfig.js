import ClassicSearchPage from 'main/content/pages/search/classic/ClassicSearchPage';

export const ClassicSearchPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/search/classic',
            component: ClassicSearchPage
        }
    ]
};
