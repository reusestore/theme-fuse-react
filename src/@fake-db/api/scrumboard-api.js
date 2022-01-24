import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import mockApi from '../mock-api.json';
import mock from '../mock';

const boardsDB = mockApi.components.examples.scrumboard_boards.value;
const labelsDB = mockApi.components.examples.scrumboard_labels.value;
const cardsDB = mockApi.components.examples.scrumboard_cards.value;
const membersDB = mockApi.components.examples.scrumboard_members.value;
const listsDB = mockApi.components.examples.scrumboard_lists.value;

mock.onGet('/api/scrumboard/labels').reply((config) => {
  return [200, labelsDB];
});

mock.onPost('/api/scrumboard/labels').reply(({ data }) => {
  const newLabel = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };
  labelsDB.push(newLabel);

  return [200, newLabel];
});

mock.onGet(/\/api\/scrumboard\/labels\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/labels\/(?<id>[^/]+)/).groups;
  const response = _.find(labelsDB, { id });

  if (response) {
    return [200, response];
  }

  return [404, 'Requested label do not exist.'];
});

mock.onPut(/\/api\/scrumboard\/labels\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/scrumboard\/labels\/(?<id>[^/]+)/).groups;

  _.assign(_.find(labelsDB, { id }), JSON.parse(data));

  return [200, _.find(labelsDB, { id })];
});

mock.onDelete(/\/api\/scrumboard\/labels\/[^/]+/).reply(({ url }) => {
  const { id } = url.match(/\/api\/scrumboard\/labels\/(?<id>[^/]+)/).groups;

  _.remove(labelsDB, { id });

  return [200, id];
});

mock.onGet('/api/scrumboard/members').reply((config) => {
  return [200, membersDB];
});

mock.onPost('/api/scrumboard/members').reply(({ data }) => {
  const newMember = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };
  membersDB.push(newMember);

  return [200, newMember];
});

mock.onPut(/\/api\/scrumboard\/members\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/scrumboard\/members\/(?<id>[^/]+)/).groups;

  _.assign(_.find(membersDB, { id }), JSON.parse(data));

  return [200, _.find(membersDB, { id })];
});

mock.onDelete(/\/api\/scrumboard\/members\/[^/]+/).reply(({ url }) => {
  const { id } = url.match(/\/api\/scrumboard\/members\/(?<id>[^/]+)/).groups;

  _.remove(membersDB, { id });

  return [200, id];
});

mock.onGet('/api/scrumboard/cards').reply((config) => {
  return [200, cardsDB];
});

mock.onPost('/api/scrumboard/cards').reply(({ data }) => {
  const newCard = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };
  cardsDB.push(newCard);

  return [200, newCard];
});

mock.onGet(/\/api\/scrumboard\/cards\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/cards\/(?<id>[^/]+)/).groups;
  const response = _.find(cardsDB, { id });

  if (response) {
    return [200, response];
  }

  return [404, 'Requested card do not exist.'];
});

mock.onPut(/\/api\/scrumboard\/cards\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/scrumboard\/cards\/(?<id>[^/]+)/).groups;

  _.assign(_.find(cardsDB, { id }), JSON.parse(data));

  return [200, _.find(cardsDB, { id })];
});

mock.onDelete(/\/api\/scrumboard\/cards\/[^/]+/).reply(({ url }) => {
  const { id } = url.match(/\/api\/scrumboard\/cards\/(?<id>[^/]+)/).groups;

  _.remove(cardsDB, { id });

  return [200, id];
});

mock.onGet('/api/scrumboard/lists').reply((config) => {
  return [200, listsDB];
});

mock.onPost('/api/scrumboard/lists').reply(({ data }) => {
  const newList = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };
  listsDB.push(newList);

  return [200, newList];
});

mock.onGet(/\/api\/scrumboard\/lists\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/lists\/(?<id>[^/]+)/).groups;
  const response = _.find(listsDB, { id });

  if (response) {
    return [200, response];
  }

  return [404, 'Requested list do not exist.'];
});

mock.onPut(/\/api\/scrumboard\/lists\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/scrumboard\/lists\/(?<id>[^/]+)/).groups;

  _.assign(_.find(listsDB, { id }), JSON.parse(data));

  return [200, _.find(listsDB, { id })];
});

mock.onDelete(/\/api\/scrumboard\/lists\/[^/]+/).reply(({ url }) => {
  const { id } = url.match(/\/api\/scrumboard\/lists\/(?<id>[^/]+)/).groups;

  _.remove(listsDB, { id });

  return [200, id];
});

mock.onGet('/api/scrumboard/boards').reply((config) => {
  return [200, boardsDB];
});

mock.onPost('/api/scrumboard/boards').reply(({ data }) => {
  const newBoard = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };
  boardsDB.push(newBoard);

  return [200, newBoard];
});

mock.onGet(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/members/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/members/).groups;
  const members = membersDB.filter((item) => item.boardId === id);
  return [200, members];
});

mock.onGet(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/labels/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/labels/).groups;
  const labels = labelsDB.filter((item) => item.boardId === id);
  return [200, labels];
});

mock.onGet(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/lists/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/lists/).groups;
  const lists = listsDB.filter((item) => item.boardId === id);
  return [200, lists];
});

mock.onGet(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/cards/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/cards/).groups;
  const cards = cardsDB.filter((item) => item.boardId === id);
  return [200, cards];
});

mock.onGet(/\/api\/scrumboard\/boards\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)/).groups;
  const board = _.find(boardsDB, { id });

  if (board) {
    return [200, board];
  }

  return [404, 'Requested board do not exist.'];
});

mock.onPut(/\/api\/scrumboard\/boards\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)/).groups;

  const board = _.find(boardsDB, { id });

  _.assign(board, { ...board, ...JSON.parse(data) });

  return [200, board];
});

mock.onDelete(/\/api\/scrumboard\/boards\/[^/]+/).reply(({ url }) => {
  const { id } = url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)/).groups;

  _.remove(boardsDB, { id });

  return [200, id];
});
