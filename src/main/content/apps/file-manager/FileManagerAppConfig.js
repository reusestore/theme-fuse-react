import FileManagerApp from './FileManagerApp';

export const FileManagerAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/file-manager',
            component: FileManagerApp
        }
    ]
};
