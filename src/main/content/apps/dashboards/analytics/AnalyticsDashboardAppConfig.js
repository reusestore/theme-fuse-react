import AnalyticsDashboardApp from './AnalyticsDashboardApp';

export const AnalyticsDashboardAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/dashboards/analytics',
            component: AnalyticsDashboardApp
        }
    ]
};
