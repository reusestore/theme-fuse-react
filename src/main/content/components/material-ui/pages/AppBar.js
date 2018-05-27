import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {}
});

function AppBar({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">App Bar</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/app-bar"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">App Bar</Typography>
                    <Typography className="mb-16" component="div">The <a href="https://material.io/design/components/app-bars-top.html">App bar</a>, formerly known as the action
                        bar in Android, is a special kind of toolbar that’s used for branding, navigation, search, and actions.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple App bar</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/app-bar/SimpleAppBar.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/app-bar/SimpleAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">App bar with buttons</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/app-bar/ButtonAppBar.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/app-bar/ButtonAppBar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">App bar with menu</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/app-bar/MenuAppBar.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/app-bar/MenuAppBar.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(AppBar);
                        