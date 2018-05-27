import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {}
});

function Pickers({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Pickers</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/pickers"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Pickers</Typography>
                    <Typography className="mb-16" component="div">Pickers provide a simple way to select a single value from a pre-determined set.</Typography>
                    <ul>
                        <li>On mobile, pickers are best suited for display in confirmation dialog.</li>
                        <li>For inline display, such as on a form, consider using compact controls such as segmented dropdown buttons.</li>
                    </ul>
                    <Typography className="text-16 mt-32 mb-8" component="h4">Notice</Typography>
                    <Typography className="mb-16" component="div">We are currently falling back to <strong>native input controls</strong>.
                        If you are interested in implementing or have implemented a rich Material Design Picker with an awesome UX, please, let us know on <a
                            href="https://github.com/mui-org/material-ui/issues/4787">#4787</a> and <a href="https://github.com/mui-org/material-ui/issues/4796">#4796</a>! We could
                        add a link to or a demo of your project in the documentation.
                        Here are some components that are <strong>promising</strong>:</Typography>
                    <ul>
                        <li><a href="https://github.com/dmtrKovalenko/material-ui-pickers">material-ui-pickers</a></li>
                        <li><a href="https://github.com/TeamWertarbyte/material-ui-time-picker">material-ui-time-picker</a></li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Date pickers</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/pickers/DatePickers.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/pickers/DatePickers.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Time pickers</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/pickers/TimePickers.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/pickers/TimePickers.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Date &amp; Time pickers</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/pickers/DateAndTimePickers.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/pickers/DateAndTimePickers.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Pickers);
                        