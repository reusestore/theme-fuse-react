import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FusePageSimple, FuseAnimate, FuseAnimateGroup} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class HelperClassesUI extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <FuseAnimate>
                            <Typography variant="title">Helper Classes</Typography>
                        </FuseAnimate>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">
                        <FuseAnimateGroup
                            enter={{
                                animation: "transition.slideUpBigIn"
                            }}
                        >

                            <div>
                                <Typography className="text-44 mb-8" component="h1">Styling in Material-UI</Typography>

                                <Typography className="mb-16" component="p">
                                    Fuse React developed based on Material-UI as ui library.
                                    <a href="https://material-ui-next.com/customization/css-in-js" target="_blank" rel="noopener noreferrer">Material-UI's styling solution</a> uses
                                    JSS
                                    at
                                    its core.
                                    Therefore the Fuse React supports <a href="http://cssinjs.org/" target="_blank" rel="noopener noreferrer">JSS (CSSinJS library)</a>
                                </Typography>
                            </div>

                            <div>
                                <Typography className="text-44 mt-32 mb-8" component="h1">Helper Classes with Tailwind</Typography>

                                <Typography className="mb-16" component="p">
                                    We are accepting JSS advantages but we can't leave <b>helper classes</b> for fast development, ease of use, globally access etc.
                                    So we have used both in components.
                                </Typography>

                                <Typography className="mb-16" component="p">
                                    We are using <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind</a> as an engine for generating helper
                                    classes.
                                    It's
                                    not an UI kit and it's customizable. You can find the config file of Tailwind with named "<b>tailwind.js</b>" under the root of Fuse React.
                                </Typography>
                            </div>
                        </FuseAnimateGroup>

                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(HelperClassesUI);
