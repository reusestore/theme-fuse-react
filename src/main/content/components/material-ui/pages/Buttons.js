import React from 'react';
                        import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
                        import {Button, Icon, Typography} from 'material-ui';
                        import {withStyles} from 'material-ui/styles/index';
                        /* eslint import/no-webpack-loader-syntax: off */
                        /* eslint no-unused-vars: off */
                        const styles = theme => ({
                            layoutRoot: {}
                        });
                        function Buttons({classes}) {
                          return (
                            
         <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Buttons</Typography>
                    <Button className="normal-case"
                            variant="raised" component="a" href="https://material-ui-next.com/demos/buttons" target="_blank">
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                     <Typography className="text-44 mt-32 mb-8" component="h1">Buttons</Typography><Typography className="mb-16" component="p"><a href="https://material.io/guidelines/components/buttons.html">Buttons</a> communicate the action that will occur when the user touches them.</Typography><Typography className="mb-16" component="p">Material buttons trigger an ink reaction on press.
They may display text, imagery, or both.
Flat buttons and raised buttons are the most commonly used types.</Typography><Typography className="text-32 mt-32 mb-8" component="h2">Flat Buttons</Typography><Typography className="mb-16" component="p">Flat buttons are text-only buttons.
They may be used in dialogs, toolbars, or inline.
They do not lift, but fill with color on press.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/buttons/FlatButtons.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/FlatButtons.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Raised Buttons</Typography><Typography className="mb-16" component="p">Raised buttons are rectangular-shaped buttons.
They may be used inline. They lift and display ink reactions on press.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/buttons/RaisedButtons.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/RaisedButtons.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Floating Action Buttons</Typography><Typography className="mb-16" component="p">A floating action button represents the primary action in an application.
Shaped like a circled icon floating above the UI, it has an ink wash upon focus and lifts upon selection.
When pressed, it may contain more related actions.</Typography><Typography className="mb-16" component="p">Only one floating action button is recommended per screen to represent the most common action.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/buttons/FloatingActionButtons.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/FloatingActionButtons.js')}/>

<Typography className="mb-16" component="p">The floating action button animates onto the screen as an expanding piece of material, by default.</Typography><Typography className="mb-16" component="p">A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear,
then reappear if its action changes.</Typography><Typography className="mb-16" component="p">The Zoom transition can be used to achieve this. Note that since both the exiting and entering
animations are triggered at the same time, we use <code>enterDelay</code> to allow the outgoing Floating Action Button&#39;s
animation to finish before the new one enters.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/buttons/FloatingActionButtonZoom.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/FloatingActionButtonZoom.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Sizes</Typography><Typography className="mb-16" component="p">Fancy larger or smaller buttons? Use the <code>size</code> or the <code>mini</code> property.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/buttons/ButtonSizes.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/ButtonSizes.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Icon Buttons</Typography><Typography className="mb-16" component="p">Icon buttons are commonly found in app bars and toolbars.</Typography><Typography className="mb-16" component="p">Icons are also appropriate for toggle buttons that allow a single choice to be selected or
deselected, such as adding or removing a star to an item.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/buttons/IconButtons.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/IconButtons.js')}/>

<Typography className="text-24 mt-32 mb-8" component="h3">Buttons with icons and label</Typography><Typography className="mb-16" component="p">Sometimes you might want to have icons for certain button to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/buttons/IconLabelButtons.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/IconLabelButtons.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Complex Buttons</Typography><Typography className="mb-16" component="p">The Flat Buttons, Raised Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the <code>ButtonBase</code>.
You can take advantage of this lower level component to build custom interactions.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/buttons/ButtonBases.js').default} 
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/buttons/ButtonBases.js')}/>

<Typography className="text-32 mt-32 mb-8" component="h2">Third-party routing library</Typography><Typography className="mb-16" component="p">One common use case is to use the button to trigger a navigation to a new page.
The <code>ButtonBase</code> component provides a property to handle this use case: <code>component</code>.
Given that a lot of our interactive components rely on <code>ButtonBase</code>, you should be
able to take advantage of it everywhere:</Typography>
<FuseHighlight component="pre" className="language-jsx">
{` 
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';

<Button component={Link} to="/open-collective">
  Link
</Button>
`}
</FuseHighlight>
                <Typography className="mb-16" component="p">or if you want to avoid properties collisions:</Typography>
<FuseHighlight component="pre" className="language-jsx">
{` 
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';

const MyLink = props => <Link to="/open-collective" {...props} />

<Button component={MyLink}>
  Link
</Button>
`}
</FuseHighlight>
                
                </div>
            }
        />
    
                          );
                        }
                        
                        export default withStyles(styles, {withTheme: true})(Buttons);
                        