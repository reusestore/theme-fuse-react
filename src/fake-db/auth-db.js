import mock from './mock';
import _ from 'lodash';
import {FuseUtils} from '@fuse';

let authDB = {
    users: [
        {
            uuid    : 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
            from    : 'custom-db',
            password: "admin",
            role    : "admin",
            data    : {
                'displayName': 'Abbott Keitch',
                'photoURL'   : 'assets/images/avatars/Abbott.jpg',
                'email'      : 'admin',
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
        {
            uuid    : 'XgbuVEXBU6gtSKdbTYR1Zbbby1i3',
            from    : 'custom-db',
            password: "staff",
            role    : "staff",
            data    : {
                'displayName': 'Arnold Matlock',
                'photoURL'   : 'assets/images/avatars/Arnold.jpg',
                'email'      : 'staff',
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
                    'todo'
                ]
            }
        }
    ]
};

mock.onGet('/api/auth').reply((config) => {
    const data = JSON.parse(config.data);
    const {email, password} = data;
    const user = authDB.users.find(_user => _user.data.email === email);
    const error = {
        email   : user ? null : 'Check your username/email',
        password: user && user.password === password ? null : 'Check your password'
    };

    if ( !error.email && !error.password && !error.displayName )
    {
        const response = _.cloneDeep(user);
        delete response['password'];
        return [200, response];
    }
    else
    {
        return [200, {error}];
    }
});

mock.onPost('/api/auth/register').reply((config) => {
    const data = JSON.parse(config.data);
    const {displayName, password, email} = data;
    const isEmailExists = authDB.users.find(_user => _user.data.email === email);
    const error = {
        email      : isEmailExists ? 'The email is already in use' : null,
        displayName: displayName !== '' ? null : 'Enter display name',
        password   : null
    };
    if ( !error.displayName && !error.password && !error.email )
    {
        const newUser = {
            uuid    : FuseUtils.generateGUID(),
            from    : 'custom-db',
            password: password,
            role    : "admin",
            data    : {
                displayName: displayName,
                photoURL   : 'assets/images/avatars/Abbott.jpg',
                email      : email,
                settings   : {},
                shortcuts  : []
            }
        };

        authDB.users = [
            ...authDB.users,
            newUser
        ];

        const response = newUser;
        return [200, response];
    }
    else
    {
        return [200, {error}];
    }
});
