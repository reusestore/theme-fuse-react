import {MaterialUINavigation} from 'main/content/components/material-ui/MaterialUINavigation';

export const fuseNavigation = [
    {
        'id'       : 'applications',
        'title'    : 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type'     : 'group',
        'icon'     : 'apps',
        'children' : [
            {
                'id'       : 'dashboards',
                'title'    : 'Dashboards',
                'translate': 'NAV.DASHBOARDS',
                'type'     : 'collapse',
                'icon'     : 'dashboard',
                'children' : [
                    {
                        'id'   : 'project',
                        'title': 'Project',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/project'
                    }
                ]
            },
            {
                'id'       : 'calendar',
                'title'    : 'Calendar',
                'translate': 'NAV.CALENDAR',
                'type'     : 'item',
                'icon'     : 'today',
                'url'      : '/apps/calendar'
            },
            {
                'id'       : 'mail',
                'title'    : 'Mail',
                'translate': 'NAV.MAIL.TITLE',
                'type'     : 'item',
                'icon'     : 'email',
                'url'      : '/apps/mail',
                'badge'    : {
                    'title'    : 25,
                    'translate': 'NAV.MAIL.BADGE',
                    'bg'       : '#F44336',
                    'fg'       : '#FFFFFF'
                }
            },
            {
                'id'       : 'file-manager',
                'title'    : 'File Manager',
                'translate': 'NAV.FILE_MANAGER',
                'type'     : 'item',
                'icon'     : 'folder',
                'url'      : '/apps/file-manager'
            },
            {
                'id'       : 'contacts',
                'title'    : 'Contacts',
                'translate': 'NAV.CONTACTS',
                'type'     : 'item',
                'icon'     : 'account_box',
                'url'      : '/apps/contacts'
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
                            'title': 10,
                            'bg'   : '#525e8a',
                            'fg'   : '#FFFFFF'
                        },
                        'children': [
                            {
                                'id'   : 'full-width',
                                'title': 'Full Width',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width'
                            },
                            {
                                'id'   : 'full-width-tabbed',
                                'title': 'Full Width Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width-tabbed'
                            },
                            {
                                'id'   : 'full-width-2',
                                'title': 'Full Width 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width-2'
                            },
                            {
                                'id'   : 'full-width-2-tabbed',
                                'title': 'Full Width 2 Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width-2-tabbed'
                            },
                            {
                                'id'   : 'left-sidebar',
                                'title': 'Left Sidebar',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidebar'
                            },
                            {
                                'id'   : 'left-sidebar-tabbed',
                                'title': 'Left Sidebar Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidebar-tabbed'
                            },
                            {
                                'id'   : 'left-sidebar-2',
                                'title': 'Left Sidebar 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidebar-2'
                            },
                            {
                                'id'   : 'left-sidebar-2-tabbed',
                                'title': 'Left Sidebar 2 Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidebar-2-tabbed'
                            },
                            {
                                'id'   : 'right-sidebar',
                                'title': 'Right Sidebar',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidebar'
                            },
                            {
                                'id'   : 'right-sidebar-tabbed',
                                'title': 'Right Sidebar Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidebar-tabbed'
                            },
                            {
                                'id'   : 'right-sidebar-2',
                                'title': 'Right Sidebar 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidebar-2'
                            },
                            {
                                'id'   : 'right-sidebar-2-tabbed',
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
                                'id'   : 'full-width',
                                'title': 'Full Width',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/full-width'
                            },
                            {
                                'id'   : 'left-sidebar',
                                'title': 'Left Sidebar',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/left-sidebar'
                            },
                            {
                                'id'   : 'left-sidebar-2',
                                'title': 'Left Sidebar 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/left-sidebar-2'
                            },
                            {
                                'id'   : 'left-sidebar-3',
                                'title': 'Left Sidebar 3',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/left-sidebar-3'
                            },
                            {
                                'id'   : 'right-sidebar',
                                'title': 'Right Sidebar',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/right-sidebar'
                            },
                            {
                                'id'   : 'right-sidebar-2',
                                'title': 'Right Sidebar 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/right-sidebar-2'
                            },
                            {
                                'id'   : 'right-sidebar-3',
                                'title': 'Right Sidebar 3',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/right-sidebar-3'
                            },
                            {
                                'id'   : 'tabbed',
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
        'id'      : 'services',
        'title'   : 'Services',
        'type'    : 'group',
        'icon'    : 'settings',
        'children': [
            {
                'id'   : 'config',
                'title': 'Config',
                'type' : 'item',
                'icon' : 'settings',
                'url'  : '/services/config'
            },
            {
                'id'   : 'splash-screen',
                'title': 'Splash Screen',
                'type' : 'item',
                'icon' : 'settings',
                'url'  : '/services/splash-screen'
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
                'id'   : 'cards',
                'title': 'Cards',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/cards'
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
                        'id'   : 'ngxdatatable',
                        'title': 'ngx-datatable',
                        'type' : 'item',
                        'url'  : '/components-third-party/datatables/ngx-datatable'
                    }
                ]
            },
            {
                'id'   : 'google-maps',
                'title': 'Google Maps',
                'type' : 'item',
                'icon' : 'place',
                'url'  : '/components-third-party/google-maps'
            }
        ]
    },
    {
        'type': 'divider',
        'id'  : 'divider-1'
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