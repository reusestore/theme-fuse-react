import CalendarApp from 'main/content/apps/calendar/CalendarApp';

export const CalendarAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/calendar',
            component: CalendarApp
        }
    ]
};
