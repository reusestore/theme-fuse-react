import _ from '@lodash';
import mockApi from '../mock-api.json';
import mock from '../mock';

const notesDB = mockApi.components.examples.notes_notes.value;
const labelsDB = mockApi.components.examples.notes_labels.value;

mock.onGet('/api/notes').reply((config) => {
  return [200, notesDB];
});

mock.onGet('/api/notes/archive').reply((config) => {
  return [200, _.filter(notesDB, { archived: true })];
});

mock.onGet('/api/notes/reminder').reply((config) => {
  return [200, _.filter(notesDB, (item) => item.reminder)];
});

mock.onGet('/api/notes/labels').reply((config) => {
  return [200, labelsDB];
});

mock.onGet(/\/api\/notes\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/notes\/(?<id>[^/]+)/).groups;
  const note = _.find(notesDB, { id });

  if (note) {
    return [200, note];
  }

  return [404, 'Requested task do not exist.'];
});

mock.onPut(/\/api\/notes\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/notes\/(?<id>[^/]+)/).groups;

  _.assign(_.find(notesDB, { id }), JSON.parse(data));

  return [200, _.find(notesDB, { id })];
});

mock.onDelete(/\/api\/notes\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/notes\/(?<id>[^/]+)/).groups;

  _.remove(notesDB, { id });

  return [200, id];
});
