
import mailDB from './mail-db'

const MockAdapter = require('axios-mock-adapter');
const axios = require('axios');

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

mock.onGet('/api/mail-app/mails').reply(200, mailDB.mails);
mock.onGet('/api/mail-app/filters').reply(200, mailDB.filters);
mock.onGet('/api/mail-app/labels').reply(200, mailDB.labels);
mock.onGet('/api/mail-app/folders').reply(200, mailDB.folders);