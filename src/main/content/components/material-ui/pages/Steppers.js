import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {}
});

function Steppers({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Steppers</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/steppers"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Steppers</Typography><Typography className="mb-16" component="p"><a
                    href="https://material.io/guidelines/components/steppers.html">Steppers</a> convey progress through numbered steps.</Typography>
                    <blockquote>
                        <Typography className="mb-16" component="p">Steppers display progress through a sequence of logical and numbered steps. They may also be used for
                            navigation.</Typography><Typography className="mb-16" component="p">Steppers may display a transient feedback message after a step is
                        saved.</Typography></blockquote>
                    <Typography className="mb-16" component="p"><strong>Types of Steps</strong></Typography>
                    <ul>
                        <li>Editable</li>
                        <li>Non-editable</li>
                        <li>Mobile</li>
                        <li>Optional</li>
                    </ul>
                    <Typography className="mb-16" component="p"><strong>Types of Steppers</strong></Typography>
                    <ul>
                        <li>Horizontal</li>
                        <li>Vertical</li>
                        <li>Linear</li>
                        <li>Non-linear</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Linear</Typography><Typography className="mb-16" component="p">The <code>Stepper</code> can
                    be controlled by passing the current step index (zero-based) as the <code>activeStep</code> property. <code>Stepper</code> orientation is set using
                    the <code>orientation</code> property.</Typography><Typography className="mb-16" component="p">This example also shows the use of an optional step by placing
                    the <code>optional</code> property on the second <code>Step</code> component. Note that it&#39;s up to you to manage when an optional step is skipped. Once
                    you&#39;ve determined this for a particular step you must set <code>completed={false}</code> to signify that even though the active step index has gone beyond
                    the optional step, it&#39;s not actually complete.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/steppers/HorizontalLinearStepper.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/steppers/HorizontalLinearStepper.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Non-linear</Typography><Typography className="mb-16" component="p">Non-linear steppers
                    allow users to enter a multi-step flow at any point.</Typography><Typography className="mb-16" component="p">This example is similar to the regular horizontal
                    stepper, except steps are no longer automatically set to <code>disabled={true}</code> based on the <code>activeStep</code> property.</Typography><Typography
                    className="mb-16" component="p">We&#39;ve used the <code>StepButton</code> here to demonstrate clickable step labels as well as setting
                    the <code>completed</code>
                    flag however because steps can be accessed in a non-linear fashion it&#39;s up to your own implementation to
                    determine when all steps are completed (or even if they need to be completed).</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/steppers/HorizontalNonLinearStepper.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/steppers/HorizontalNonLinearStepper.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Linear - Alternative Label</Typography><Typography className="mb-16" component="p">Labels
                    can be placed below the step icon by setting the <code>alternativeLabel</code> property on the <code>Stepper</code> component.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/steppers/HorizontalLinearAlternativeLabelStepper.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/steppers/HorizontalLinearAlternativeLabelStepper.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Non Linear - Alternative Label</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/steppers/HorizontalNonLinearAlternativeLabelStepper.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/steppers/HorizontalNonLinearAlternativeLabelStepper.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Horizontal Non Linear - Error Step</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/steppers/HorizontalNonLinearStepperWithError.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/steppers/HorizontalNonLinearStepperWithError.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Vertical Stepper</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/steppers/VerticalLinearStepper.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/steppers/VerticalLinearStepper.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Mobile Stepper</Typography><Typography className="mb-16" component="p">This component implements a
                    compact stepper suitable for a mobile device. See <a href="https://material.io/guidelines/components/steppers.html#steppers-types-of-steps">mobile steps</a> for
                    its inspiration.</Typography><Typography className="text-24 mt-32 mb-8" component="h3">Mobile Stepper - Text</Typography><Typography className="mb-16"
                                                                                                                                                         component="p">This is
                    essentially a back/next button positioned correctly.
                    You must implement the textual description yourself, however, an example is provided below for reference.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/steppers/TextMobileStepper.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/steppers/TextMobileStepper.js')}/>

                    <Typography className="text-24 mt-32 mb-8" component="h3">Mobile Stepper - Dots</Typography><Typography className="mb-16" component="p">Use dots when the number
                    of steps isn’t large.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/steppers/DotsMobileStepper.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/steppers/DotsMobileStepper.js')}/>

                    <Typography className="text-24 mt-32 mb-8" component="h3">Mobile Stepper - Progress</Typography><Typography className="mb-16" component="p">Use a progress bar
                    when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps).</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/steppers/ProgressMobileStepper.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/steppers/ProgressMobileStepper.js')}/>
                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Steppers);
                        