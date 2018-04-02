import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {}
});

function SelectionControls({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Selection Controls</Typography>
                    <Button className="normal-case"
                            variant="raised" component="a" href="https://material-ui-next.com/demos/selection-controls" target="_blank">
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Selection Controls</Typography><Typography className="mb-16" component="p"><a
                    href="https://material.io/guidelines/components/selection-controls.html">Selection controls</a> allow the user to select options.</Typography><Typography
                    className="mb-16" component="p">Three types of selection controls are covered in this guidance:</Typography>
                    <ul>
                        <li><strong><a href="#checkboxes">Checkboxes</a></strong> allow the selection of multiple options from a set.</li>
                        <li><strong><a href="#radio-buttons">Radio Buttons</a></strong> allow the selection of a single option from a set.</li>
                        <li><strong><a href="#switches">Switches</a></strong> allow a selection to be turned on or off.</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Checkboxes</Typography><Typography className="mb-16" component="p">Checkboxes allow the user to select
                    multiple options from a set.
                    If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches.If you have a single option, avoid using
                    a checkbox and use an on/off switch instead.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/selection-controls/Checkboxes.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selection-controls/Checkboxes.js')}/>

                    <Typography className="mb-16" component="p"><code>Checkbox</code> can also be used with a label description thanks to
                        the <code>FormControlLabel</code> component.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/selection-controls/CheckboxLabels.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selection-controls/CheckboxLabels.js')}/>

                    <Typography className="mb-16" component="p"><code>FormGroup</code> is a helpful wrapper used to group selection controls components that provides an easier API.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/selection-controls/CheckboxesGroup.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selection-controls/CheckboxesGroup.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Radio Buttons</Typography><Typography className="mb-16" component="p">Radio buttons allow the user to
                    select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side;
                    otherwise, consider a dropdown, which uses less space than displaying all options.</Typography><Typography className="mb-16" component="p">Radio buttons should
                    have the most commonly used option selected by default.</Typography><Typography className="mb-16" component="p"><code>RadioGroup</code> is a helpful wrapper
                    used to group <code>Radio</code> components that provides an easier API, and proper keyboard accessibility to the group.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/selection-controls/RadioButtonsGroup.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selection-controls/RadioButtonsGroup.js')}/>

                    <Typography className="mb-16" component="p"><code>Radio</code> can also be used standalone, without the wrapper.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/selection-controls/RadioButtons.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selection-controls/RadioButtons.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Switches</Typography><Typography className="mb-16" component="p">On/off switches toggle the state of a
                    single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline
                    label.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/selection-controls/Switches.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selection-controls/Switches.js')}/>

                    <Typography className="mb-16" component="p"><code>Switch</code> can also be used with a label description thanks to the <code>FormControlLabel</code> component.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/selection-controls/SwitchLabels.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selection-controls/SwitchLabels.js')}/>

                    <Typography className="mb-16" component="p"><code>FormGroup</code> is a helpful wrapper used to group selection controls components that provides an easier API.
                        However, we encourage you to use a <a href="#checkboxes">Checkbox</a> instead.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/selection-controls/SwitchesGroup.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/selection-controls/SwitchesGroup.js')}/>
                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(SelectionControls);
                        