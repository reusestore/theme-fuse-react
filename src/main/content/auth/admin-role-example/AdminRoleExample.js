import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {FusePageSimple, FuseHighlight} from '@fuse';
import {Typography} from 'material-ui';

const styles = theme => ({
    layoutRoot: {}
});

class AdminRoleExample extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24 flex items-center">
                        <Typography className="h2">Admin: Auth role example page</Typography>
                    </div>
                }
                content={
                    <div className="p-24">
                        <Typography className="mb-24">
                            You can see this page because you have logged in and have permission. Otherwise you should be redirected to login page.
                        </Typography>

                        <Typography className="mb-24">
                            This is the page's config file:
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                            import {authRoles} from 'auth/auth';
                            import AdminRoleExample from 'main/content/auth/admin-role-example/AdminRoleExample';

                            export const AdminRoleExampleConfig = {
                                settings: {
                                layout: {}
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

                        <Typography className="my-24">
                            You can also hide the navigation item/collapse/group with user roles by giving auth property.
                        </Typography>

                        <FuseHighlight component="pre" className="language-json">
                            {`
                                export const fuseNavigationConfig = [
                                   {
                                        'id'   : 'only-admin-navigation-item',
                                        'title': 'Nav item only for Admin',
                                        'type' : 'item',
                                        'auth' : authRoles.admin,//['admin']
                                        'url'  : '/auth/admin-role-example',
                                        'icon' : 'verified_user'
                                    }
                                ];
                            `}
                        </FuseHighlight>
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(AdminRoleExample);