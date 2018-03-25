import React from 'react';
                        import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
                        import {Button, Icon, Typography} from 'material-ui';
                        import {withStyles} from 'material-ui/styles/index';
                        /* eslint import/no-webpack-loader-syntax: off */
                        /* eslint no-unused-vars: off */
                        const styles = theme => ({
                            layoutRoot: {}
                        });
                        function Snackbars({classes}) {
                          return (
                            
         <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Snackbars</Typography>
                    <Button className="normal-case"
                            variant="raised" component="a" href="https://material-ui-next.com/demos/snackbars" target="_blank">
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                     <Typography className="text-44 mt-32 mb-8" component="h1">Snackbars</Typography><Typography className="mb-16" component="p"><a href="https://material.io/guidelines/components/snackbars-toasts.html">Snackbars</a> provide brief feedback about an operation through a message - typically at the bottom of the screen.</Typography><Typography className="mb-16" component="p">Snackbars contain a single line of text directly related to the operation performed.
They may contain a text action, but no icons.</Typography><Typography className="mb-16" component="p">Only one snackbar may be displayed at a time.</Typography><Typography className="text-32 mt-32 mb-8" component="h2">Simple</Typography><Typography className="mb-16" component="p">A basic snackbar that aims to reproduce Google Keep&#39;s snackbar behavior.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/snackbars/SimpleSnackbar.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/snackbars/SimpleSnackbar.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Message Length</Typography><Typography className="mb-16" component="p">Some snackbars with varying message length.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/snackbars/LongTextSnackbar.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/snackbars/LongTextSnackbar.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Positioned</Typography><Typography className="mb-16" component="p">There may be circumstances when the placement of the snackbar needs to be more flexible.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/snackbars/PositionedSnackbar.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/snackbars/PositionedSnackbar.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Transitions</Typography><Typography className="text-24 mt-32 mb-8" component="h3">Control Direction</Typography><Typography className="mb-16" component="p">Change the direction of the transition. Slide is the default transition.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/snackbars/DirectionSnackbar.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/snackbars/DirectionSnackbar.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Change Transition</Typography><Typography className="mb-16" component="p">Use a different transition all together.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/snackbars/FadeSnackbar.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/snackbars/FadeSnackbar.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Don&#39;t block the floating action button</Typography><Typography className="mb-16" component="p">Move the floating action button vertically to accommodate the snackbar height.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/snackbars/FabIntegrationSnackbar.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/snackbars/FabIntegrationSnackbar.js')}/>
                </div>
            }
        />
    
                          );
                        }
                        
                        export default withStyles(styles, {withTheme: true})(Snackbars);
                        