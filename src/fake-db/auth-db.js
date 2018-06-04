import mock from './mock';
import _ from 'lodash';

let authDB = {
    users: {
        admin: {
            uuid    : 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
            from    : 'custom-db',
            password: "admin",
            role    : "admin",
            data    : {
                'displayName': 'Abbott Keitch',
                'photoURL'   : 'assets/images/avatars/Abbott.jpg',
                'email'      : 'abbott@withinpixels.com',
                settings     : {
                    layout          : {
                        style : 'layout1',
                        config: {
                            scroll : 'content',
                            navbar : {
                                display : true,
                                folded  : true,
                                position: 'left'
                            },
                            toolbar: {
                                display : true,
                                style   : 'fixed',
                                position: 'below'
                            },
                            footer : {
                                display : true,
                                style   : 'fixed',
                                position: 'below'
                            },
                            mode   : 'fullwidth'
                        }
                    },
                    customScrollbars: true,
                    theme           : {
                        main   : 'defaultDark',
                        navbar : 'defaultDark',
                        toolbar: 'defaultDark',
                        footer : 'defaultDark'
                    }
                },
                shortcuts    : [
                    'calendar',
                    'mail',
                    'contacts'
                ]
            }
        },
        staff: {
            uuid    : 'XgbuVEXBU6gtSKdbTYR1Zbbby1i3',
            from    : 'custom-db',
            password: "staff",
            role    : "staff",
            data    : {
                'displayName': 'Arnold Matlock',
                'photoURL'   : 'assets/images/avatars/Arnold.jpg',
                'email'      : 'arnold@withinpixels.com',
                settings     : {
                    layout          : {
                        style : 'layout2',
                        config: {
                            mode   : 'boxed',
                            scroll : 'content',
                            navbar : {
                                display: true
                            },
                            toolbar: {
                                display : true,
                                position: 'below'
                            },
                            footer : {
                                display: true,
                                style  : 'fixed'
                            }
                        }
                    },
                    customScrollbars: true,
                    theme           : {
                        main   : 'greeny',
                        navbar : 'mainThemeDark',
                        toolbar: 'mainThemeDark',
                        footer : 'mainThemeDark'
                    }
                },
                shortcuts    : [
                    'calendar',
                    'mail',
                    'contacts',
                    'analytics-dashboard'
                ]
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