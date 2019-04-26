import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const useStyles = makeStyles(theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
}));

function ExpansionPanels(props)
{
    const classes = useStyles();
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Components</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Material UI Elements</Typography>
                        </div>
                        <Typography variant="h6">Expansion Panels</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/expansion-panels"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Expansion Panels</Typography>
                    <Typography className="description">Expansion panels contain creation flows and allow lightweight editing of an element.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/archive/guidelines/components/expansion-panels.html">An expansion panel</a> is a
                        lightweight container that may either stand alone or be connected to a larger surface, such as a card.</Typography>
                    <blockquote>
                        <Typography className="mb-16" component="div"><strong>Note:</strong> Expansion panels are no longer documented in the Material Design
                            documentation.</Typography>
                    </blockquote>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
                    <Typography className="mb-16" component="div">For optimal accessibility we recommend setting <code>id</code> and <code>aria-controls</code> on the
                        <code>ExpansionPanelSummary</code>. The <code>ExpansionPanel</code> will derive the necessary <code>aria-labelledby</code>
                        and <code>id</code> for the content region of the panel.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Expansion Panel</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/expansion-panels/SimpleExpansionPanel.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/expansion-panels/SimpleExpansionPanel.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Controlled Accordion</Typography>
                    <Typography className="mb-16" component="div">Extend the default panel behavior to create an accordion with
                        the <code>ExpansionPanel</code> component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/expansion-panels/ControlledExpansionPanels.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/expansion-panels/ControlledExpansionPanels.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Secondary heading and Columns</Typography>
                    <Typography className="mb-16" component="div">Multiple columns can be used to structure the content, and a helper text may be added to the panel to assist the
                        user.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/expansion-panels/DetailedExpansionPanel.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/expansion-panels/DetailedExpansionPanel.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Performance</Typography>
                    <Typography className="mb-16" component="div">The content of ExpansionPanels is mounted by default even if the panel is not expanded.
                        This default behavior has server-side rendering and SEO in mind.
                        If you render expensive component trees inside your panels or simply render many
                        panels it might be a good idea to change this default behavior by enabling the
                        <code>unmountOnExit</code> in <code>TransitionProps</code>: <code>&lt;ExpansionPanel TransitionProps={{unmountOnExit: true}} /&gt;</code>.
                        As with any performance optimization this is not a silver bullet. Be sure to identify
                        bottlenecks first and then try out these optimization strategies.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized Expansion Panel</Typography>
                    <Typography className="mb-16" component="div">If you have been reading the <a href="/customization/overrides/">overrides documentation page</a>
                        but you are not confident jumping in,
                        here is one example of how you can customize the background color of the <code>ExpansionPanelSummary</code> and padding
                        of <code>ExpansionPanelDetails</code>.</Typography>
                    <Typography className="mb-16" component="div"><span role="img" aria-label="unicode-symbol">⚠</span> While the material design specification encourages theming,
                        these examples are off the beaten path.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/expansion-panels/CustomizedExpansionPanel.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/expansion-panels/CustomizedExpansionPanel.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default ExpansionPanels;
