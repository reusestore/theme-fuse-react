import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class IntroductionDoc extends Component {

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
                        <Typography variant="title">Introduction</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="text-32 mb-8" component="h2">Google's Material Design</Typography>
                        <Typography className="mb-16" component="p">
                            All libraries and custom made components are following
                            <a href="https://www.google.com/design/spec/material-design/introduction.html" target="_blank" rel="noreferrer noopener" className="ml-8 font-bold">
                                Google's Material Design Specifications.
                            </a>
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">React</Typography>
                        <Typography className="mb-16" component="p">
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" className="mr-8 font-bold">
                                React
                            </a>
                            is the core of our template. Fuse React is NOT a traditional admin template, it's an React app. If you don't know what React is or don't know how
                            to use it, we strongly recommend checking the React before start doing anything with Fuse.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Material-UI</Typography>
                        <Typography className="mb-16" component="p">
                            <a href="https://material-ui-next.com" target="_blank" rel="noreferrer noopener" className="mr-8 font-bold">
                                Material-UI
                            </a>
                            is a react ui library that implement Google's Material Design specification.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Create React App (CLI)</Typography>
                        <Typography className="mb-16" component="p">
                            <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer noopener" className="mr-8 font-bold">
                                Create React App
                            </a>
                            is a tool built by developers at Facebook to help you build React applications. It saves you from time-consuming setup and configuration.
                        </Typography>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(IntroductionDoc);
