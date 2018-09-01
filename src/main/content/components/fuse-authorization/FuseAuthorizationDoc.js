import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class FuseAuthorizationDoc extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="title">FuseAuthorization</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseAuthorization</code> is authorization component of the Fuse React. It allows to block routes based on user roles. It
                            should wraps the FuseTheme component.
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx">
                            {
                                `
                               <FuseAuthorization routes={routes}>
                                    <FuseTheme>
                                        <FuseLayout
                                            routes={routes}
                                            toolbar={
                                                <MainToolbar/>
                                            }
                                            navbarHeader={
                                                <MainNavbarHeader/>
                                            }
                                            navbarContent={
                                                <MainNavbarContent/>
                                            }
                                            footer={
                                                <MainFooter/>
                                            }
                                            rightSidePanel={
                                                <React.Fragment>
                                                    <ChatPanel/>
                                                    <QuickPanel/>
                                                </React.Fragment>
                                            }
                                            contentWrapper={
                                                <SettingsPanel/>
                                            }
                                        />
                                    </FuseTheme>
                                </FuseAuthorization>
                                `
                            }
                        </FuseHighlight>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Configuration</Typography>

                        <Typography className="mb-16" component="p">
                            You can define authorization roles in route config files.
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                                export const AdminRoleExampleConfig = {
                                    settings: {
                                        layout: {
                                            config: {}
                                        }
                                    },
                                    auth    : authRoles.admin,//['admin']
                                    routes  : [
                                        {
                                            path     : '/auth/admin-role-example',
                                            component: AdminRoleExample
                                        }
                                    ]
                                };
                            `}
                        </FuseHighlight>

                        <Typography className="mb-16 mt-32" component="p">
                            You can also hide navigation item/group/collapse by adding auth property in <code className="language-bash">fuse-configs/fuseNavigationConfig.js</code>.
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                                  {
                                    'id'   : 'only-admin-navigation-item',
                                    'title': 'Nav item only for Admin',
                                    'type' : 'item',
                                    'auth' : authRoles.admin,
                                    'url'  : '/auth/admin-role-example',
                                    'icon' : 'verified_user'
                                  },
                            `}
                        </FuseHighlight>

                        <Typography className="text-32 mt-32 mb-8" component="h2">On fuseRoutesConfig.js file</Typography>

                        <Typography className="mb-16 mt-32" component="p">
                            If you don't want to set auth on every page config;
                            <br/>You can group the configs and define authorization the fuseRoutesConfig.js file,
                            <br/>With this configuration below makes <b>whole app</b> auth protected:
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                                    import React from 'react';
                                    import {Redirect} from 'react-router-dom';
                                    import {FuseUtils} from '@fuse/index';
                                    import {appsConfigs} from 'main/content/apps/appsConfigs';
                                    import {pagesConfigs} from 'main/content/pages/pagesConfigs';
                                    import {authRoleExamplesConfigs} from 'main/content/auth/authRoleExamplesConfigs';
                                    import {UserInterfaceConfig} from 'main/content/user-interface/UserInterfaceConfig';
                                    import {ComponentsConfig} from 'main/content/components/ComponentsConfig';
                                    import {ComponentsThirdPartyConfig} from 'main/content/components-third-party/ComponentsThirdPartyConfig';
                                    import {GettingStartedConfig} from 'main/content/getting-started/GettingStartedConfig';
                                    import {LoginConfig} from 'main/content/login/LoginConfig';
                                    import {RegisterConfig} from 'main/content/register/RegisterConfig';
                                    import {CallbackConfig} from 'main/content/callback/CallbackConfig';
                                    import _ from 'lodash';
                                    import {authRoles} from 'auth';

                                    function setAdminAuth(configs)
                                    {
                                        return configs.map(config => _.merge({}, config, {auth: authRoles.admin}))
                                    }

                                    const routeConfigs = [
                                        ...setAdminAuth([
                                            ...appsConfigs,
                                            ...pagesConfigs,
                                            ...authRoleExamplesConfigs,
                                            ComponentsConfig,
                                            ComponentsThirdPartyConfig,
                                            UserInterfaceConfig,
                                            GettingStartedConfig
                                        ]),
                                        LoginConfig,
                                        RegisterConfig,
                                        CallbackConfig
                                    ];

                                    export const routes = [
                                        ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
                                        {
                                            path     : '/',
                                            component: () => <Redirect to="/apps/dashboards/analytics"/>
                                        },
                                        {
                                            exact    : true,
                                            component: () => <Redirect to="/pages/errors/error-404"/>
                                        }
                                    ];
                            `}
                        </FuseHighlight>

                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FuseAuthorizationDoc);
