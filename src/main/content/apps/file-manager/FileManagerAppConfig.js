import FileManagerApp from './FileManagerApp';

export const FileManagerAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/file-manager',
            component: FileManagerApp
        }
    ]
};
