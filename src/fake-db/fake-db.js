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

mock.onPost('/api/mail-app/update-mail').reply((request) => {
    const mail = JSON.parse(request.data);
    mailDB.mails = mailDB.mails.map((_mail) => {
        if ( _mail.id === mail.id )
        {
            return mail;
        }
        return _mail;
    });

    return [200, mail];
});
mock.onGet('/api/mail-app/filters').reply(200, mailDB.filters);
mock.onGet('/api/mail-app/labels').reply(200, mailDB.labels);
mock.onGet('/api/mail-app/folders').reply(200, mailDB.folders);


mock.onPost('/api/mail-app/set-folder').reply((request) => {
    const data = JSON.parse(request.data);
    const {selectedMailIds, folderId} = data;
    mailDB.mails = mailDB.mails.map((_mail) => {

        if ( selectedMailIds.includes(_mail.id) )
        {
            return {
                ..._mail,
                folder: folderId
            };
        }
        return _mail;
    });

    return [200];
});

mock.onPost('/api/mail-app/toggle-label').reply((request) => {
    const data = JSON.parse(request.data);
    const {selectedMailIds, labelId} = data;
    mailDB.mails = mailDB.mails.map((_mail) => {
        if ( selectedMailIds.includes(_mail.id) )
        {
            return {
                ..._mail,
                labels: _mail.labels.includes(labelId) ? _mail.labels.filter(_id => _id !== labelId) : [..._mail.labels, labelId]
            };
        }
        return _mail;
    });

    return [200];
});
mock.onPost('/api/mail-app/delete-mails').reply((request) => {
    const data = JSON.parse(request.data);
    const {selectedMailIds} = data;
    mailDB.mails = mailDB.mails.filter((_mail) => selectedMailIds.includes(_mail.id) ? false : _mail);
    return [200];
});