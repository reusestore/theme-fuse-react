import mockApi from '../../mock-api.json';
import mock from '../../mock';

const widgets = mockApi.components.examples.project_dashboard_widgets.value;

mock.onGet('/api/dashboards/project/widgets').reply((config) => {
  return [200, widgets];
});
