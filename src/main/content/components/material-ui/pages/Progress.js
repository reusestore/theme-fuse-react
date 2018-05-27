import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {}
});

function Progress({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Progress</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/progress"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Progress</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/progress-indicators.html">Progress and activity indicators</a>
                        are visual indications of an app loading content.</Typography>
                    <Typography className="mb-16" component="div">A single visual indicator should be used to represent each type of operation.
                        For example, a refresh operation should display either a refresh bar or an activity circle, but not both.</Typography>
                    <Typography className="mb-16" component="div"><strong>Determinate</strong> indicators display how long an operation will take.</Typography>
                    <Typography className="mb-16" component="div"><strong>Indeterminate</strong> indicators visualize an unspecified wait time.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Circular</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/progress-indicators.html#circular-progress-indicators">Circular
                        progress</a> support both determinate and indeterminate processes.</Typography>
                    <ul>
                        <li><strong>Determinate</strong> circular indicators fill the invisible, circular track with color, as the indicator moves from 0 to 360 degrees.</li>
                        <li><strong>Indeterminate</strong> circular indicators grow and shrink in size while moving along the invisible track.</li>
                    </ul>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Circular Indeterminate</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/progress/CircularIndeterminate.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/CircularIndeterminate.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Interactive Integration</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/progress/CircularIntegration.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/CircularIntegration.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Circular Determinate</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/progress/CircularDeterminate.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/CircularDeterminate.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Circular Static</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/progress/CircularStatic.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/CircularStatic.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Linear</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/progress-indicators.html#linear-progress-indicators">Linear
                        progress</a> indicators.</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Linear Indeterminate</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/progress/LinearIndeterminate.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/LinearIndeterminate.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Linear Determinate</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/progress/LinearDeterminate.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/LinearDeterminate.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Linear Buffer</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/progress/LinearBuffer.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/LinearBuffer.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Linear Query</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/progress/LinearQuery.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/LinearQuery.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Non-standard ranges</Typography>
                    <Typography className="mb-16" component="div">The progress components accept a value in the range 0 - 100. This simplifies things for screen-reader users, where
                        these are the default min / max values. Sometimes, however, you might be working with a data source where the values fall outside this range. Here&#39;s how
                        you can easily transform a value in any range to a scale of 0 - 100:</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
const MIN = x; // Minimum expected value
const MAX = y; // Maximium expected value

// Function to normalise the values (MIN / MAX could be integrated)
const normalise = value => (value - MIN) * (MAX - MIN);

// Example component that utilizes the 'normalise' function at the point of render.
function Progress(props) {
  return (
    <React.Fragment>
      <CircularProgress variant="determinate" value={normalise(props.value)} />
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  )
}
`}
                    </FuseHighlight>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Delaying appearance</Typography>
                    <Typography className="mb-16" component="div">There are <a href="https://www.nngroup.com/articles/response-times-3-important-limits/">3 important limits</a> to
                        know around response time.
                        The ripple effect of the <code>ButtonBase</code> component ensures that the user feels that the system is reacting instantaneously.
                        Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second.
                        After 1.0 second, you can display a loader to keep user&#39;s flow of thought uninterrupted.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/progress/DelayingAppearance.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/DelayingAppearance.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Progress);
                        