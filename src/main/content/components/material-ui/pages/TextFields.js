import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {}
});

function TextFields({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Text Fields</Typography>
                    <Button className="normal-case"
                            variant="raised" component="a" href="https://material-ui-next.com/demos/text-fields" target="_blank">
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Text Fields</Typography><Typography className="mb-16" component="p"><a
                    href="https://material.io/guidelines/components/text-fields.html">Text fields</a> allow users to input text and usually appear in forms.
                    Users may enter text, numbers, or mixed-format types of input.</Typography><Typography className="text-32 mt-32 mb-8"
                                                                                                           component="h2">TextField</Typography><Typography className="mb-16"
                                                                                                                                                            component="p">The <code>TextField</code> wrapper
                    component is a complete form control including a label, input and help text.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/text-fields/TextFields.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/TextFields.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Components</Typography><Typography className="mb-16" component="p"><code>TextField</code> is composed
                    of smaller components (<code>FormControl</code>, <code>InputLabel</code>, <code>Input</code>, and <code>FormHelperText</code>) that you can leverage directly to
                    significantly customize your form inputs.</Typography><Typography className="mb-16" component="p">You might also have noticed that some native HTML input
                    properties are missing from the <code>TextField</code> component.
                    This is on purpose.
                    The component takes care of the most used properties, then it&#39;s up to the user to use the underlying component shown in the following demo. Still, you can
                    use <code>inputProps</code> (and <code>InputProps</code>, <code>InputLabelProps</code> properties) if you want to avoid some
                    boilerplate.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/text-fields/ComposedTextField.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/ComposedTextField.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Layout</Typography><Typography className="mb-16"
                                                                                                             component="p"><code>TextField</code>, <code>FormControl</code> allow
                    the specification of <code>margin</code> to alter the vertical spacing of inputs. Using
                    <code>none</code> (default) will not apply margins to the <code>FormControl</code>, whereas <code>dense</code> and <code>normal</code> will as well as alter
                    other styles to meet the specification.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/text-fields/TextFieldMargins.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/TextFieldMargins.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Input Adornments</Typography><Typography className="mb-16" component="p"><code>Input</code> allows the
                    provision of <code>InputAdornment</code>.
                    These can be used to add a prefix, a suffix or an action to an input.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/text-fields/InputAdornments.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/InputAdornments.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Inputs</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/text-fields/Inputs.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/Inputs.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Formatted inputs</Typography><Typography className="mb-16" component="p">We demonstrate how you could
                    be using third-party libraries to <a href="https://material.io/guidelines/components/text-fields.html#text-fields-input-types">format your input</a>.
                    In the following demo, we are using <a href="https://github.com/text-mask/text-mask">react-text-mask</a> and <a
                        href="https://github.com/s-yadav/react-number-format">react-number-format</a> libraries.
                    You have to provide a custom implementation of the <code>&lt;input&gt;</code> element with the <code>inputComponent</code> property.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/text-fields/FormattedInputs.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/FormattedInputs.js')}/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized inputs</Typography><Typography className="mb-16" component="p">You have been reading our <a
                    href="/customization/overrides">overrides documentation page</a>
                    but you are not confident jumping in?
                    Here is an example of how you can change the main color of an input from &quot;primary&quot; to purple.
                    There is no limit.</Typography><FuseExample
                    className="my-24"
                    component={require('main/content/components/material-ui/material-ui-examples/text-fields/CustomizedInputs.js').default}
                    raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/CustomizedInputs.js')}/>
                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(TextFields);
                        