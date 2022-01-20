import _ from '@lodash';

function BoardModel(data) {
  data = data || {};

  return _.defaults(data, {
    title: 'Untitled Board',
    description: '',
    icon: '',
    lastActivity: '',
    members: [],
    settings: {
      color: '',
      subscribed: true,
      cardCoverImages: true,
    },
  });
}

export default BoardModel;
