import {MaterialUINavigation} from 'main/content/components/material-ui/MaterialUINavigation';
import {authRoles} from 'auth/auth';

export const fuseNavigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'      : 'dashboards',
                'title'   : 'Dashboards',
                'type'    : 'collapse',
                'icon'    : 'dashboard',
                'children': [
                    {
                        'id'   : 'analytics-dashboard',
                        'title': 'Analytics',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/analytics'
                    }
                ]
            },
            {
                'id'   : 'calendar',
                'title': 'Calendar',
                'type' : 'item',
                'icon' : 'today',
                'url'  : '/apps/calendar'
            },
            {
                'id'   : 'mail',
                'title': 'Mail',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/apps/mail/inbox',
                'badge': {
                    'title': 25,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'todo',
                'title': 'To-Do',
                'type' : 'item',
                'icon' : 'check_box',
                'url'  : '/apps/todo/all',
                'badge': {
                    'title': 3,
                    'bg'   : 'rgb(255, 111, 0)',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'file-manager',
                'title': 'File Manager',
                'type' : 'item',
                'icon' : 'folder',
                'url'  : '/apps/file-manager'
            },
            {
                'id'   : 'contacts',
                'title': 'Contacts',
                'type' : 'item',
                'icon' : 'account_box',
                'url'  : '/apps/contacts/all'
            },
            {
                'id'   : 'chat',
                'title': 'Chat',
                'type' : 'item',
                'icon' : 'chat',
                'url'  : '/apps/chat',
                'badge': {
                    'title': 13,
                    'bg'   : 'rgb(9, 210, 97)',
                    'fg'   : '#FFFFFF'
                }
            }
        ]
    },
    {
        'id'      : 'pages',
        'title'   : 'Pages',
        'type'    : 'group',
        'icon'    : 'pages',
        'children': [
            {
                'id'      : 'authentication',
                'title'   : 'Authentication',
                'type'    : 'collapse',
                'icon'    : 'lock',
                'badge'   : {
                    'title': 10,
                    'bg'   : '#525e8a',
                    'fg'   : '#FFFFFF'
                },
                'children': [
                    {
                        'id'   : 'login',
                        'title': 'Login',
                        'type' : 'item',
                        'url'  : '/pages/auth/login'
                    },
                    {
                        'id'   : 'login-v2',
                        'title': 'Login v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/login-2'
                    },
                    {
                        'id'   : 'register',
                        'title': 'Register',
                        'type' : 'item',
                        'url'  : '/pages/auth/register'
                    },
                    {
                        'id'   : 'register-v2',
                        'title': 'Register v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/register-2'
                    },
                    {
                        'id'   : 'forgot-password',
                        'title': 'Forgot Password',
                        'type' : 'item',
                        'url'  : '/pages/auth/forgot-password'
                    },
                    {
                        'id'   : 'forgot-password-v2',
                        'title': 'Forgot Password v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/forgot-password-2'
                    },
                    {
                        'id'   : 'reset-password',
                        'title': 'Reset Password',
                        'type' : 'item',
                        'url'  : '/pages/auth/reset-password'
                    },
                    {
                        'id'   : 'reset-password-v2',
                        'title': 'Reset Password v2',
                        'type' : 'item',
                        'url'  : '/pages/auth/reset-password-2'
                    },
                    {
                        'id'   : 'lock-screen',
                        'title': 'Lock Screen',
                        'type' : 'item',
                        'url'  : '/pages/auth/lock'
                    },
                    {
                        'id'   : 'mail-confirmation',
                        'title': 'Mail Confirmation',
                        'type' : 'item',
                        'url'  : '/pages/auth/mail-confirm'
                    }
                ]
            },
            {
                'id'   : 'coming-soon',
                'title': 'Coming Soon',
                'type' : 'item',
                'icon' : 'alarm',
                'url'  : '/pages/coming-soon'
            },
            {
                'id'      : 'errors',
                'title'   : 'Errors',
                'type'    : 'collapse',
                'icon'    : 'error',
                'children': [
                    {
                        'id'   : '404',
                        'title': '404',
                        'type' : 'item',
                        'url'  : '/pages/errors/error-404'
                    },
                    {
                        'id'   : '500',
                        'title': '500',
                        'type' : 'item',
                        'url'  : '/pages/errors/error-500'
                    }
                ]
            },
            {
                'id'      : 'invoice',
                'title'   : 'Invoice',
                'type'    : 'collapse',
                'icon'    : 'receipt',
                'children': [
                    {
                        'id'   : 'modern',
                        'title': 'Modern',
                        'type' : 'item',
                        'url'  : '/pages/invoices/modern'
                    },
                    {
                        'id'   : 'compact',
                        'title': 'Compact',
                        'type' : 'item',
                        'url'  : '/pages/invoices/compact'
                    }
                ]
            },
            {
                'id'   : 'maintenance',
                'title': 'Maintenance',
                'type' : 'item',
                'icon' : 'build',
                'url'  : '/pages/maintenance'
            },
            {
                'id'      : 'pricing',
                'title'   : 'Pricing',
                'type'    : 'collapse',
                'icon'    : 'attach_money',
                'children': [
                    {
                        'id'   : 'style-1',
                        'title': 'Style 1',
                        'type' : 'item',
                        'url'  : '/pages/pricing/style-1'
                    },
                    {
                        'id'   : 'style-2',
                        'title': 'Style 2',
                        'type' : 'item',
                        'url'  : '/pages/pricing/style-2'
                    },
                    {
                        'id'   : 'style-3',
                        'title': 'Style 3',
                        'type' : 'item',
                        'url'  : '/pages/pricing/style-3'
                    }
                ]
            },
            {
                'id'   : 'profile',
                'title': 'Profile',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/pages/profile'
            },
            {
                'id'      : 'search',
                'title'   : 'Search',
                'type'    : 'collapse',
                'icon'    : 'search',
                'children': [
                    {
                        'id'   : 'classic-search',
                        'title': 'Classic Search',
                        'type' : 'item',
                        'url'  : '/pages/search/classic'
                    },
                    {
                        'id'   : 'modern-search',
                        'title': 'Modern Search',
                        'type' : 'item',
                        'url'  : '/pages/search/modern'
                    }
                ]
            },
            {
                'id'   : 'faq',
                'title': 'Faq',
                'type' : 'item',
                'icon' : 'help',
                'url'  : '/pages/faq'
            },
            {
                'id'   : 'knowledge-base',
                'title': 'Knowledge Base',
                'type' : 'item',
                'icon' : 'import_contacts',
                'url'  : '/pages/knowledge-base'
            }
        ]
    },
    {
        'id'      : 'user-interface',
        'title'   : 'User Interface',
        'type'    : 'group',
        'icon'    : 'web',
        'children': [
            {
                'id'   : 'icons',
                'title': 'Icons',
                'type' : 'item',
                'icon' : 'photo',
                'url'  : '/ui/icons'
            },
            {
                'id'   : 'typography',
                'title': 'Typography',
                'type' : 'item',
                'icon' : 'text_fields',
                'url'  : '/ui/typography'
            },
            {
                'id'   : 'helper-classes',
                'title': 'Helper Classes',
                'type' : 'item',
                'icon' : 'help',
                'url'  : '/ui/helper-classes'
            },
            {
                'id'      : 'page-layouts',
                'title'   : 'Page Layouts',
                'type'    : 'collapse',
                'icon'    : 'view_quilt',
                'children': [
                    {
                        'id'      : 'carded',
                        'title'   : 'Carded',
                        'type'    : 'collapse',
                        'badge'   : {
                            'title': 12,
                            'bg'   : '#525e8a',
                            'fg'   : '#FFFFFF'
                        },
                        'children': [
                            {
                                'id'   : 'carded-full-width',
                                'title': 'Full Width',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width'
                            },
                            {
                                'id'   : 'carded-full-width-tabbed',
                                'title': 'Full Width Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width-tabbed'
                            },
                            {
                                'id'   : 'carded-full-width-2',
                                'title': 'Full Width 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width-2'
                            },
                            {
                                'id'   : 'carded-full-width-2-tabbed',
                                'title': 'Full Width 2 Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width-2-tabbed'
                            },
                            {
                                'id'   : 'carded-left-sidebar',
                                'title': 'Left Sidebar',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidebar'
                            },
                            {
                                'id'   : 'carded-left-sidebar-tabbed',
                                'title': 'Left Sidebar Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidebar-tabbed'
                            },
                            {
                                'id'   : 'carded-left-sidebar-2',
                                'title': 'Left Sidebar 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidebar-2'
                            },
                            {
                                'id'   : 'carded-left-sidebar-2-tabbed',
                                'title': 'Left Sidebar 2 Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidebar-2-tabbed'
                            },
                            {
                                'id'   : 'carded-right-sidebar',
                                'title': 'Right Sidebar',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidebar'
                            },
                            {
                                'id'   : 'carded-right-sidebar-tabbed',
                                'title': 'Right Sidebar Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidebar-tabbed'
                            },
                            {
                                'id'   : 'carded-right-sidebar-2',
                                'title': 'Right Sidebar 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidebar-2'
                            },
                            {
                                'id'   : 'carded-right-sidebar-2-tabbed',
                                'title': 'Right Sidebar 2 Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidebar-2-tabbed'
                            }
                        ]
                    },
                    {
                        'id'      : 'simple',
                        'title'   : 'Simple',
                        'type'    : 'collapse',
                        'badge'   : {
                            'title': 8,
                            'bg'   : '#525e8a',
                            'fg'   : '#FFFFFF'
                        },
                        'children': [
                            {
                                'id'   : 'simple-full-width',
                                'title': 'Full Width',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/full-width'
                            },
                            {
                                'id'   : 'simple-left-sidebar',
                                'title': 'Left Sidebar',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/left-sidebar'
                            },
                            {
                                'id'   : 'simple-left-sidebar-2',
                                'title': 'Left Sidebar 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/left-sidebar-2'
                            },
                            {
                                'id'   : 'simple-left-sidebar-3',
                                'title': 'Left Sidebar 3',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/left-sidebar-3'
                            },
                            {
                                'id'   : 'simple-right-sidebar',
                                'title': 'Right Sidebar',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/right-sidebar'
                            },
                            {
                                'id'   : 'simple-right-sidebar-2',
                                'title': 'Right Sidebar 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/right-sidebar-2'
                            },
                            {
                                'id'   : 'simple-right-sidebar-3',
                                'title': 'Right Sidebar 3',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/right-sidebar-3'
                            },
                            {
                                'id'   : 'simple-tabbed',
                                'title': 'Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/tabbed'
                            }
                        ]
                    },
                    {
                        'id'   : 'blank',
                        'title': 'Blank',
                        'type' : 'item',
                        'url'  : '/ui/page-layouts/blank'
                    }
                ]
            }
        ]
    },
    {
        'id'      : 'components',
        'title'   : 'Components',
        'type'    : 'group',
        'icon'    : 'settings_input_component',
        'children': [
            {
                'id'      : 'material-ui-elements',
                'title'   : 'Material UI Elements',
                'type'    : 'collapse',
                'icon'    : 'layers',
                'children': [
                    ...MaterialUINavigation
                ]
            },
            {
                'id'   : 'fuse-auth',
                'title': 'FuseAuthorization',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-authorization'
            },
            {
                'id'   : 'fuse-theme',
                'title': 'FuseTheme',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-theme'
            },
            {
                'id'   : 'fuse-layout',
                'title': 'FuseLayout',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-layout'
            },
            {
                'id'      : 'fuse-page',
                'title'   : 'Fuse Page Layouts',
                'type'    : 'collapse',
                'icon'    : 'settings_input_component',
                'children': [
                    {
                        'id'   : 'fuse-page-carded',
                        'title': 'FusePageCarded',
                        'type' : 'item',
                        'url'  : '/components/fuse-page-carded'
                    },
                    {
                        'id'   : 'fuse-page-simple',
                        'title': 'FusePageSimple',
                        'type' : 'item',
                        'url'  : '/components/fuse-page-simple'
                    }
                ]
            },
            {
                'id'   : 'fuse-navigation',
                'title': 'FuseNavigation',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-navigation'
            },
            {
                'id'   : 'fuse-scrollbars',
                'title': 'FuseScrollbars',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-scrollbars'
            },
            {
                'id'   : 'fuse-highlight',
                'title': 'FuseHighlight',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-highlight'
            },
            {
                'id'   : 'fuse-countdown',
                'title': 'FuseCountdown',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-countdown'
            },
            {
                'id'   : 'fuse-message',
                'title': 'FuseMessage',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-message'
            },
            {
                'id'   : 'fuse-animate',
                'title': 'FuseAnimate',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-animate'
            },
            {
                'id'   : 'fuse-animate-group',
                'title': 'FuseAnimateGroup',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/fuse-animate-group'
            }
        ]
    },
    {
        'id'      : '3rd-party-components',
        'title'   : '3rd Party components',
        'type'    : 'group',
        'icon'    : 'settings_input_component',
        'children': [
            {
                'id'      : 'datatables',
                'title'   : 'Datatables',
                'type'    : 'collapse',
                'icon'    : 'border_all',
                'children': [
                    {
                        'id'   : 'react-table',
                        'title': 'React Table',
                        'type' : 'item',
                        'url'  : '/components-third-party/datatables/react-table'
                    }
                ]
            },
            {
                'id'   : 'formsy',
                'title': 'Formsy',
                'type' : 'item',
                'icon' : 'priority_high',
                'url'  : '/components-third-party/formsy'
            },
            {
                'id'   : 'google-map-react',
                'title': 'Google Map React',
                'type' : 'item',
                'icon' : 'place',
                'url'  : '/components-third-party/google-map-react'
            },
            {
                'id'   : 'react-chartjs-2',
                'title': 'React ChartJs 2',
                'type' : 'item',
                'icon' : 'poll',
                'url'  : '/components-third-party/react-chartjs-2'
            }
        ]
    },
    {
        'id'      : 'getting-started',
        'title'   : 'Getting Started',
        'type'    : 'group',
        'icon'    : 'star',
        'children': [
            {
                'id'   : 'introduction',
                'title': 'Introduction',
                'type' : 'item',
                'icon' : 'info',
                'url'  : '/getting-started/introduction'
            },
            {
                'id'   : 'prerequisites',
                'title': 'Prerequisites',
                'type' : 'item',
                'icon' : 'view_stream',
                'url'  : '/getting-started/prerequisites'
            },
            {
                'id'   : 'installation',
                'title': 'Installation',
                'type' : 'item',
                'icon' : 'settings_applications',
                'url'  : '/getting-started/installation'
            },
            {
                'id'   : 'working-with-fuse',
                'title': 'Working with Fuse',
                'type' : 'item',
                'icon' : 'computer',
                'url'  : '/getting-started/working-with-fuse'
            },
            {
                'id'   : 'settings',
                'title': 'Settings',
                'type' : 'item',
                'icon' : 'settings',
                'url'  : '/getting-started/settings'
            },
            {
                'id'   : 'fuse-react-routing',
                'title': 'Routing',
                'type' : 'item',
                'icon' : 'menu',
                'url'  : '/getting-started/routing'
            },
            {
                'id'   : 'fuse-firebase-auth',
                'title': 'Firebase Auth',
                'type' : 'item',
                'icon' : 'dns',
                'url'  : '/getting-started/firebase-auth'
            },
            {
                'id'   : 'changelog',
                'title': 'Changelog',
                'type' : 'item',
                'icon' : 'history',
                'url'  : '/getting-started/changelog'
            }
        ]
    },
    {
        'type': 'divider',
        'id'  : 'divider-1'
    },
    {
        'id'      : 'auth',
        'title'   : 'Auth',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'login',
                'title': 'Login',
                'type' : 'item',
                'url'  : '/login',
                auth   : authRoles.onlyGuest,
                'icon' : 'lock'
            },
            {
                'id'   : 'register',
                'title': 'Register',
                'type' : 'item',
                'url'  : '/register',
                auth   : authRoles.onlyGuest,
                'icon' : 'person_add'
            },
            {
                'id'   : 'logout',
                'title': 'Logout',
                'type' : 'item',
                auth   : authRoles.user,
                'url'  : '/logout',
                'icon' : 'exit_to_app'
            },
            {
                'id'   : 'auth-admin-example',
                'title': 'Admin: Auth protected page',
                'type' : 'item',
                'url'  : '/auth/admin-role-example',
                'icon' : 'security'
            },
            {
                'id'   : 'only-admin-navigation-item',
                'title': 'Nav item only for Admin',
                'type' : 'item',
                'auth' : authRoles.admin,
                'url'  : '/auth/admin-role-example',
                'icon' : 'verified_user'
            },
            {
                'id'   : 'auth-staff-example',
                'title': 'Staff: Auth protected page',
                'type' : 'item',
                'url'  : '/auth/staff-role-example',
                'icon' : 'security'
            },
            {
                'id'   : 'only-staff-navigation-item',
                'title': 'Nav item only for Staff',
                'type' : 'item',
                'auth' : authRoles.staff,
                'url'  : '/auth/staff-role-example',
                'icon' : 'verified_user'
            },
            {
                'id'   : 'auth-guest-example',
                'title': 'Guest: Auth protected page',
                'type' : 'item',
                'url'  : '/auth/guest-role-example',
                'icon' : 'security'
            },
            {
                'id'   : 'only-guest-navigation-item',
                'title': 'Nav item only for Guest',
                'type' : 'item',
                'auth' : authRoles.onlyGuest,
                'url'  : '/auth/guest-role-example',
                'icon' : 'verified_user'
            }
        ]
    },
    {
        'type': 'divider',
        'id'  : 'divider-2'
    },
    {
        'id'      : 'test-group-level-1',
        'title'   : 'Test Group Level 1',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'      : 'test-collapse-level-1',
                'title'   : 'Test Collapse Level 1',
                'type'    : 'collapse',
                'icon'    : 'dashboard',
                'children': [
                    {
                        'id'   : 'test-item-level-1',
                        'title': 'Test Item Level 1',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/project'
                    },
                    {
                        'id'      : 'test-collapse-2',
                        'title'   : 'Test Collapse Level 2',
                        'type'    : 'collapse',
                        'children': [
                            {
                                'id'   : 'test-item-level-2',
                                'title': 'Test Item Level 2',
                                'type' : 'item',
                                'url'  : '/apps/dashboards/project'
                            },
                            {
                                'id'      : 'test-collapse-level-3',
                                'title'   : 'Test Collapse Level 3',
                                'type'    : 'collapse',
                                'children': [
                                    {
                                        'id'   : 'test-item-level-3',
                                        'title': 'Test Item Level 3',
                                        'type' : 'item',
                                        'url'  : '/apps/dashboards/project'
                                    },
                                    {
                                        'id'      : 'test-collapse-level-4',
                                        'title'   : 'Test Collapse Level 4',
                                        'type'    : 'collapse',
                                        'children': [
                                            {
                                                'id'   : 'test-item-level-4',
                                                'title': 'Test Item Level 4',
                                                'type' : 'item',
                                                'url'  : '/apps/dashboards/project'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'id'      : 'test-group-level-2',
                        'title'   : 'Test Group Level 2',
                        'type'    : 'group',
                        'icon'    : 'apps',
                        'children': [
                            {
                                'id'      : 'test-collapse-level-2-',
                                'title'   : 'Test Collapse Level 2',
                                'type'    : 'collapse',
                                'children': [
                                    {
                                        'id'   : 'test-item-level-2-',
                                        'title': 'Test Item Level 2',
                                        'type' : 'item',
                                        'url'  : '/apps/dashboards/project'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];