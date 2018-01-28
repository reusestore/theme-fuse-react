import mailDB from './mail-db'

const MockAdapter = require('axios-mock-adapter');
const axios = require('axios');

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

mock.onGet('/api/mail-app/mails').reply((config) => {
    const params = config.params;
    let response = [];

    if ( params.labelHandle )
    {
        const labelId = mailDB.labels.find(label => label.handle === params.labelHandle).id;

        response = mailDB.mails.filter((mail) => mail.labels.includes(labelId));
    }
    else if ( params.filterHandle )
    {
        response = mailDB.mails.filter((mail) => mail[params.filterHandle]);
    }
    else // folderHandle
    {
        let folderHandle = params.folderHandle;
        if ( !folderHandle )
        {
            folderHandle = 'inbox';
        }
        const folderId = mailDB.folders.find(folder => folder.handle === folderHandle).id;
        response = mailDB.mails.filter((mail) => mail.folder === folderId);
    }

    return [200, response];
});
mock.onGet('/api/mail-app/filters').reply(200, mailDB.filters);
mock.onGet('/api/mail-app/labels').reply(200, mailDB.labels);
mock.onGet('/api/mail-app/folders').reply(200, mailDB.folders);