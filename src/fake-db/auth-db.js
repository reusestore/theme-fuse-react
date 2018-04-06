import './../polyfills';
import mock from './mock';

let authDB = {
    users: {
        admin: {
            password: "admin",
            role    : "admin",
            data    : {
                settings: {
                    layout          : {
                        navigation          : 'right',
                        navigationFolded    : true,
                        navigationFoldedOpen: false,
                        toolbar             : 'below',
                        footer              : 'below',
                        mode                : 'fullwidth'
                    },
                    customScrollbars: true,
                    theme           : 'default',
                    navbarTheme     : 'currentThemeDark',
                    toolbarTheme    : 'default',
                    footerTheme     : 'currentThemeDark'
                }
            }
        },
        staff: {
            password: "staff",
            role    : "staff",
            data    : {}
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
        const response = authDB.users[username];
        delete response['password'];
        return [200, response];
    }
    else
    {
        return [200, {error}];
    }
});