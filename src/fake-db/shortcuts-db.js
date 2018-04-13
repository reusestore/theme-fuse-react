import mock from './mock';

let shortcutsDB = [
    'calendar',
    'mail',
    'contacts',
    'analytics-dashboard'
];

mock.onGet('/api/shortcuts/get').reply((config) => {
    return [200, shortcutsDB];
});

mock.onPost('/api/shortcuts/toggle').reply((request) => {
    const data = JSON.parse(request.data);
    const {id} = data;
    shortcutsDB = shortcutsDB.includes(id) ? shortcutsDB.filter(_id => id !== _id) : [...shortcutsDB, id];
    return [200, shortcutsDB];
});
