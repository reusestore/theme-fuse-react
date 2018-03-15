import React from 'react';
                        import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
                        import {Button, Icon, Typography} from 'material-ui';
                        import {withStyles} from 'material-ui/styles/index';
                        /* eslint import/no-webpack-loader-syntax: off */
                        const styles = theme => ({
                            layoutRoot: {}
                        });
                        function Progress({classes}) {
                          return (
                            
         <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Progress</Typography>
                    <Button className="normal-case"
                            variant="raised" component="a" href="https://material-ui-next.com/demos/progress" target="_blank">
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                     <Typography className="text-44 mt-32 mb-8" component="h1">Progress</Typography><Typography className="mb-16" component="p"><a href="https://material.io/guidelines/components/progress-activity.html">Progress and activity indicators</a>
are visual indications of an app loading content.</Typography><Typography className="mb-16" component="p">A single visual indicator should be used to represent each type of operation.
For example, a refresh operation should display either a refresh bar or an activity circle, but not both.</Typography><Typography className="mb-16" component="p"><strong>Determinate</strong> indicators display how long an operation will take.</Typography><Typography className="mb-16" component="p"><strong>Indeterminate</strong> indicators visualize an unspecified wait time.</Typography><Typography className="text-32 mt-32 mb-8" component="h2">Circular</Typography><Typography className="text-24 mt-32 mb-8" component="h3">Circular Indeterminate</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/progress/CircularIndeterminate.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/CircularIndeterminate.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Interactive Integration</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/progress/CircularIntegration.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/CircularIntegration.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Circular Determinate</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/progress/CircularDeterminate.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/CircularDeterminate.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Circular Static</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/progress/CircularStatic.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/CircularStatic.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Linear</Typography><Typography className="text-24 mt-32 mb-8" component="h3">Linear Indeterminate</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/progress/LinearIndeterminate.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/LinearIndeterminate.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Linear Determinate</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/progress/LinearDeterminate.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/LinearDeterminate.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Linear Buffer</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/progress/LinearBuffer.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/LinearBuffer.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Linear Query</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/progress/LinearQuery.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/LinearQuery.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Delaying appearance</Typography><Typography className="mb-16" component="p">There are <a href="http://www.nngroup.com/articles/response-times-3-important-limits/">3 important limits</a> to know around reponse time.
The ripple effect of the <code>ButtonBase</code> component ensures that the user feels that the system is reacting instantaneously.
Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second.
After 1.0 second, you can display a loader to keep user&#39;s flow of thought uninterrupted.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/progress/DelayingAppearance.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/progress/DelayingAppearance.js')}/>
                </div>
            }
        />
    
                          );
                        }
                        
                        export default withStyles(styles, {withTheme: true})(Progress);
                        