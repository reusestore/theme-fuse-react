import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseExample, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
/* eslint import/no-webpack-loader-syntax: off */
const styles = theme => ({
    layoutRoot: {}
});

class GoogleMapReactDoc extends Component {

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
                        <Typography variant="title">Google Map React</Typography>
                        <Button
                            className="normal-case"
                            variant="raised"
                            component="a"
                            href="https://github.com/google-map-react/google-map-react"
                            target="_blank"
                        >
                            <Icon className="mr-4">link</Icon>
                            Reference
                        </Button>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">google-map-react</code> is a component written over a small set of the Google Maps API.
                        </Typography>

                        <hr/>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Example Usages</Typography>

                        <FuseExample
                            className="mb-64"
                            component={require('./examples/simple.js').default}
                            raw={require('!raw-loader!./examples/simple.js')}
                        />

                        <Typography className="text-32 mt-32 mb-8" component="h2">Demos</Typography>

                        <ul>
                            <li className="mb-8">
                                <Link to="/apps/dashboards/analytics">Analytics Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(GoogleMapReactDoc);
