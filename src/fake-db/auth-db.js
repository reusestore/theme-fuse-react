import './../polyfills';
import mock from './mock';
import _ from 'lodash';

let authDB = {
    users: {
        admin: {
            password: "admin",
            role    : "admin",
            data    : {
                'name'    : 'Abbott',
                'lastName': 'Keitch',
                'avatar'  : 'assets/images/avatars/Abbott.jpg',
                settings  : {
                    layout          : {
                        navbar      : 'left',
                        navbarFolded: true,
                        toolbar     : 'below',
                        footer      : 'below',
                        mode        : 'fullwidth'
                    },
                    customScrollbars: true,
                    theme           : 'defaultDark',
                    navbarTheme     : 'defaultDark',
                    toolbarTheme    : 'defaultDark',
                    footerTheme     : 'defaultDark'
                }
            }
        },
        staff: {
            password: "staff",
            role    : "staff",
            data    : {
                'name'    : 'Arnold',
                'lastName': 'Matlock',
                'avatar'  : 'assets/images/avatars/Arnold.jpg',
                settings  : {
                    layout          : {
                        navbar      : 'right',
                        navbarFolded: false,
                        toolbar     : 'above',
                        footer      : 'above',
                        mode        : 'boxed'
                    },
                    customScrollbars: true,
                    theme           : 'greeny',
                    navbarTheme     : 'currentThemeDark',
                    toolbarTheme    : 'currentThemeDark',
                    footerTheme     : 'currentThemeDark'
                }
            }
        }
    }
};

mock.onGet('/api/auth').reply((config) => {
    const data = JSON.parse(config.data);
    const {username, password} = data;
    const error = {
        username: authDB.users[username] ? null : 'Check your username',
        password: authDB.users[username] && authDB.users[username].password === password ? null : 'Check your password'
    };

    if ( !error.username && !error.password )
    {
        const response = _.cloneDeep(authDB.users[username]);
        delete response['password'];
        return [200, response];
    }
    else
    {
        return [200, {error}];
    }
});