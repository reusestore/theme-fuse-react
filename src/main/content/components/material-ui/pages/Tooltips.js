import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {}
});

function Tooltips({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Tooltips</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/tooltips"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Tooltips</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/tooltips.html">Tooltips</a> are text labels that appear when the
                        user hovers over, focuses on, or touches an element.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Tooltips</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tooltips/SimpleTooltips.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tooltips/SimpleTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Positioned Tooltips</Typography>
                    <Typography className="mb-16" component="div">The <code>Tooltip</code> has 12 placements choice.
                        They don’t have directional arrows; instead, they rely on motion emanating from the source to convey direction.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tooltips/PositionedTooltips.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tooltips/PositionedTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Controlled Tooltips</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/tooltips/ControlledTooltips.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tooltips/ControlledTooltips.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Showing and hiding</Typography>
                    <Typography className="mb-16" component="div">The tooltip is normally shown immediately when the user&#39;s mouse hovers over the element, and hides immediately
                        when the user&#39;s mouse leaves. A delay in showing or hiding the tooltip can be added through the
                        properties <code>enterDelay</code> and <code>leaveDelay</code>, as shown in the Controlled Tooltips demo above.</Typography>
                    <Typography className="mb-16" component="div">On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You
                        can disable this feature with the <code>disableTouchListener</code> property.</Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Tooltips);
                        