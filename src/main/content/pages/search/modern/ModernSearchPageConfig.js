import ModernSearchPage from 'main/content/pages/search/modern/ModernSearchPage';

export const ModernSearchPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/search/modern',
            component: ModernSearchPage
        }
    ]
};
