import React from 'react';
                        import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
                        import {Button, Icon, Typography} from 'material-ui';
                        import {withStyles} from 'material-ui/styles/index';
                        /* eslint import/no-webpack-loader-syntax: off */
                        const styles = theme => ({
                            layoutRoot: {}
                        });
                        function Tabs({classes}) {
                          return (
                            
         <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Tabs</Typography>
                    <Button className="normal-case"
                            variant="raised" component="a" href="https://material-ui-next.com/demos/tabs" target="_blank">
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                     <Typography className="text-44 mt-32 mb-8" component="h1">Tabs</Typography><Typography className="mb-16" component="p"><a href="https://material.io/guidelines/components/tabs.html">Tabs</a> make it easy to explore and switch between different views.</Typography><Typography className="text-32 mt-32 mb-8" component="h2">Simple Tabs</Typography><Typography className="mb-16" component="p">A simple example with no frills.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/SimpleTabs.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/SimpleTabs.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Wrapped Labels</Typography><Typography className="mb-16" component="p">Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow and the text will not be visible.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/TabsWrappedLabel.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/TabsWrappedLabel.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Fixed Tabs</Typography><Typography className="mb-16" component="p">Fixed tabs should be used with a limited number of tabs and when consistent placement will aid muscle memory.</Typography><Typography className="text-24 mt-32 mb-8" component="h3">Full width</Typography><Typography className="mb-16" component="p">The <code>fullWidth</code> property should be used for smaller views.
This demo also uses <a href="https://github.com/oliviertassinari/react-swipeable-views">react-swipeable-views</a> to animate the Tab transition, and allowing tabs to be swiped on touch devices.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/FullWidthTabs.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/FullWidthTabs.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Centered</Typography><Typography className="mb-16" component="p">The <code>centered</code> property should be used for larger views.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/CenteredTabs.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/CenteredTabs.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Scrollable Tabs</Typography><Typography className="text-24 mt-32 mb-8" component="h3">Automatic Scroll Buttons</Typography><Typography className="mb-16" component="p">Left and right scroll buttons will automatically be presented on desktop and hidden on mobile. (based on viewport width)</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonAuto.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonAuto.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Forced Scroll Buttons</Typography><Typography className="mb-16" component="p">Left and right scroll buttons will be presented regardless of the viewport width.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonForce.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonForce.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Prevent Scroll Buttons</Typography><Typography className="mb-16" component="p">Left and right scroll buttons will never be presented.  All scrolling must be initiated through user agent scrolling mechanisms (e.g. left/right swipe, shift-mousewheel, etc.)</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonPrevent.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/ScrollableTabsButtonPrevent.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Icon Tabs</Typography><Typography className="mb-16" component="p">Tab labels may be either all icons or all text.</Typography><Typography className="mb-16" component="p"><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/IconTabs.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/IconTabs.js')}/><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/IconLabelTabs.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/IconLabelTabs.js')}/></Typography><Typography className="text-32 mt-32 mb-8" component="h2">Disabled Tab</Typography><Typography className="mb-16" component="p">Tab may be disabled by setting <code>disabled</code> property.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/tabs/DisabledTabs.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/tabs/DisabledTabs.js')}/>
                </div>
            }
        />
    
                          );
                        }
                        
                        export default withStyles(styles, {withTheme: true})(Tabs);
                        