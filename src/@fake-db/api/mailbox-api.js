import _ from '@lodash';
import mockApi from '../mock-api.json';
import mock from '../mock';

const mailsDB = mockApi.components.examples.mailbox_mails.value;
const labelsDB = mockApi.components.examples.mailbox_labels.value;
const filtersDB = mockApi.components.examples.mailbox_filters.value;
const foldersDB = mockApi.components.examples.mailbox_folders.value;

mock.onGet(/\/api\/mailbox\/mails\/filters\/[^]+/).reply(({ url, data }) => {
  const { filterSlug } = url.match(/\/api\/mailbox\/mails\/filters\/(?<filterSlug>[^/]+)/).groups;

  const response = _.filter(mailsDB, { [filterSlug]: true });

  return [200, response];
});

mock.onGet(/\/api\/mailbox\/mails\/labels\/[^]+/).reply(({ url, data }) => {
  const { labelSlug } = url.match(/\/api\/mailbox\/mails\/labels\/(?<labelSlug>[^/]+)/).groups;

  const labelId = _.find(labelsDB, { slug: labelSlug }).id;

  const response = _.filter(mailsDB, (item) => item.labels.includes(labelId));

  return [200, response];
});

mock
  .onGet(/\/api\/mailbox\/mails\/(?<folderSlug>[^/]*)\/(?<mailId>[^/]*)/)
  .reply(({ url, data }) => {
    const { folderSlug, mailId } = url.match(
      /\/api\/mailbox\/mails\/(?<folderSlug>[^/]+)\/(?<mailId>[^/]+)/
    ).groups;
    console.info(mailId);
    const response = _.find(mailsDB, { id: mailId });

    return [200, response];
  });

mock.onGet(/\/api\/mailbox\/mails\/[^]+/).reply(({ url, data }) => {
  const { folderSlug } = url.match(/\/api\/mailbox\/mails\/(?<folderSlug>[^/]+)/).groups;

  const folderId = _.find(foldersDB, { slug: folderSlug }).id;

  const response = _.filter(mailsDB, { folder: folderId });

  return [200, response];
});

mock.onGet('/api/mailbox/folders').reply((config) => {
  return [200, foldersDB];
});

mock.onGet('/api/mailbox/filters').reply((config) => {
  return [200, filtersDB];
});

mock.onGet('/api/mailbox/labels').reply((config) => {
  return [200, labelsDB];
});
