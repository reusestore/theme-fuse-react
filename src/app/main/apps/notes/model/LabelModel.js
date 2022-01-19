import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function LabelModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    title: '',
  });
}

export default LabelModel;
