import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {FusePageSimple, FuseHighlight} from '@fuse';
import {Typography} from 'material-ui';

const styles = theme => ({
    layoutRoot: {}
});

class StaffRoleExample extends Component {

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
                        <Typography className="h2">Staff: Auth role example page</Typography>
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
                            import StaffRoleExample from 'main/content/auth/staff-role-example/StaffRoleExample';

                            export const StaffRoleExampleConfig = {
                                settings: {
                                    layout: {}
                                },
                                auth    : authRoles.staff,//['admin',staff']
                                routes  : [
                                    {
                                        path     : '/auth/staff-role-example',
                                        component: StaffRoleExample
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
                                        'id'   : 'only-staff-navigation-item',
                                        'title': 'Nav item only for Staff',
                                        'type' : 'item',
                                        'auth' : authRoles.staff,//['admin','staff']
                                        'url'  : '/auth/staff-role-example',
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

export default withStyles(styles, {withTheme: true})(StaffRoleExample);