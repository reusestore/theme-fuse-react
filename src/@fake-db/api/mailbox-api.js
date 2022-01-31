import _ from '@lodash';
import FuseUtils from '@fuse/utils';
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
mock.onPost('/api/contacts').reply(({ data }) => {
  const newContact = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };

  contactsDB.push(newContact);

  return [200, newContact];
});

mock.onGet(/\/api\/contacts\/(?!tags)[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/contacts\/(?<id>[^/]+)/).groups;
  const contact = _.find(contactsDB, { id });

  if (contact) {
    return [200, contact];
  }

  return [404, 'Requested task do not exist.'];
});

mock.onPut(/\/api\/contacts\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/contacts\/(?<id>[^/]+)/).groups;

  _.assign(_.find(contactsDB, { id }), JSON.parse(data));

  return [200, _.find(contactsDB, { id })];
});

mock.onDelete(/\/api\/contacts\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/contacts\/(?<id>[^/]+)/).groups;

  _.remove(contactsDB, { id });

  return [200, id];
});

mock.onGet('/api/contacts/tags').reply((config) => {
  return [200, tagsDB];
});
