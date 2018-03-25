import React from 'react';
                        import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
                        import {Button, Icon, Typography} from 'material-ui';
                        import {withStyles} from 'material-ui/styles/index';
                        /* eslint import/no-webpack-loader-syntax: off */
                        /* eslint no-unused-vars: off */
                        const styles = theme => ({
                            layoutRoot: {}
                        });
                        function Paper({classes}) {
                          return (
                            
         <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Paper</Typography>
                    <Button className="normal-case"
                            variant="raised" component="a" href="https://material-ui-next.com/demos/paper" target="_blank">
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                     <Typography className="text-44 mt-32 mb-8" component="h1">Paper</Typography><Typography className="mb-16" component="p">In material design, the physical properties of <a href="https://material.google.com/layout/principles.html#principles-how-paper-works">paper</a> are translated to the screen.
The background of an application resembles the flat, opaque texture of a sheet of paper, and an application’s behavior mimics paper’s ability to be re-sized, shuffled, and bound together in multiple sheets.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/paper/PaperSheet.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/paper/PaperSheet.js')}/>
                </div>
            }
        />
    
                          );
                        }
                        
                        export default withStyles(styles, {withTheme: true})(Paper);
                        