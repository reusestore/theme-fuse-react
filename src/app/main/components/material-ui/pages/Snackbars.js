import React from 'react';
                   import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
                   import {Button, Icon, Typography} from '@material-ui/core';
                   import {makeStyles} from '@material-ui/styles';
                   /* eslint import/no-webpack-loader-syntax: off */
                   /* eslint no-unused-vars: off */
                   const useStyles = makeStyles(theme=>({
                       layoutRoot: {
                           '& .description':{
                                   marginBottom:16
                           }
                       }
                   }));
                   function Snackbars(props) {
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
                       <Typography variant="h6">Snackbars</Typography>
                    </div>
                    <Button 
                        className="normal-case"
                        variant="contained" 
                        component="a" 
                        href="https://material-ui-next.com/demos/snackbars" 
                        target="_blank"
                        >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                     <Typography className="text-44 mt-32 mb-8" component="h1">Snackbars</Typography>
<Typography className="description">Snackbars provide brief messages about app processes through a message - typically at the bottom of the screen</Typography>

<Typography className="mb-16" component="div"><a href="https://material.io/design/components/snackbars.html">Snackbars</a> inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear.</Typography>
<Typography className="mb-16" component="div">Snackbars contain a single line of text directly related to the operation performed.
They may contain a text action, but no icons. You can use them to display notifications.</Typography>
<Typography className="text-16 mt-32 mb-8" component="h4">Frequency</Typography>
<Typography className="mb-16" component="div">Only one snackbar may be displayed at a time.</Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Simple</Typography>
<Typography className="mb-16" component="div">A basic snackbar that aims to reproduce Google Keep&#39;s snackbar behavior.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/components/material-ui/material-ui-examples/snackbars/SimpleSnackbar.js').default} 
                    raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/SimpleSnackbar.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Customized snackbars</Typography>
<Typography className="mb-16" component="div">If you have read the <a href="/customization/overrides/">overrides documentation page</a>
and you are still not confident jumping in, here are some examples of how you can customize the component.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/components/material-ui/material-ui-examples/snackbars/CustomizedSnackbars.js').default} 
                    raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/CustomizedSnackbars.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Positioned</Typography>
<Typography className="mb-16" component="div">There may be circumstances when the placement of the snackbar needs to be more flexible.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/components/material-ui/material-ui-examples/snackbars/PositionedSnackbar.js').default} 
                    raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/PositionedSnackbar.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Message Length</Typography>
<Typography className="mb-16" component="div">Some snackbars with varying message length.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/components/material-ui/material-ui-examples/snackbars/LongTextSnackbar.js').default} 
                    raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/LongTextSnackbar.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Transitions</Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Consecutive Snackbars</Typography>
<Typography className="mb-16" component="div">When multiple snackbar updates are necessary, they should appear one at a time.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/components/material-ui/material-ui-examples/snackbars/ConsecutiveSnackbars.js').default} 
                    raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/ConsecutiveSnackbars.js')}
                    /></Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Snackbars and floating action buttons (FABs)</Typography>
<Typography className="mb-16" component="div">Snackbars should appear above FABs (on mobile).</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={true}
                    component={require('app/main/components/material-ui/material-ui-examples/snackbars/FabIntegrationSnackbar.js').default} 
                    raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/FabIntegrationSnackbar.js')}
                    /></Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Change Transition</Typography>
<Typography className="mb-16" component="div"><a href="/utils/transitions/#grow">Grow</a> is the default transition but you can use a different one.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/components/material-ui/material-ui-examples/snackbars/TransitionsSnackbar.js').default} 
                    raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/TransitionsSnackbar.js')}
                    /></Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Control Slide direction</Typography>
<Typography className="mb-16" component="div">You can change the direction of the <a href="/utils/transitions/#slide">Slide</a> transition.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/components/material-ui/material-ui-examples/snackbars/DirectionSnackbar.js').default} 
                    raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/DirectionSnackbar.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Complementary projects</Typography>
<Typography className="mb-16" component="div">For more advanced use cases you might be able to take advantage of:</Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">notistack</Typography>
<Typography className="mb-16" component="div"><img src="https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars" alt="stars"/>
<img src="https://img.shields.io/npm/dm/notistack.svg" alt="npm downloads"/></Typography>
<Typography className="mb-16" component="div">In the following example, we demonstrate how to use <a href="https://github.com/iamhosseindhv/notistack">notistack</a>.
notistack makes it easy to display snackbars (so you don&#39;t have to deal with open/close state of them).
It also enables you to stack them on top of one another (but discouraged by the specification).</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/components/material-ui/material-ui-examples/snackbars/IntegrationNotistack.js').default} 
                    raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/IntegrationNotistack.js')}
                    /></Typography>

                </div>
            }
        />
    
                     );
                   }
                   
                   export default Snackbars;
                   