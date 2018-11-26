import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseExample, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
/* eslint import/no-webpack-loader-syntax: off */

const styles = theme => ({});

class FuseChipSelectDoc extends Component {

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
                        <Typography variant="h6">FuseChipSelect</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseChipSelect</code> is a multiple chip select component which uses react-select and material-ui Chip.
                        </Typography>

                        <hr/>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Example Usages</Typography>


                        <FuseExample
                            className="mb-64"
                            component={require('./examples/SimpleExample.js').default}
                            raw={require('!raw-loader!./examples/SimpleExample.js')}
                        />

                        <Typography className="text-32 mt-32 mb-8" component="h2">Demos</Typography>

                        <ul>
                            <li className="mb-8">
                                <Link to="/apps/e-commerce/products/1">E-Commerce Product Page</Link>
                            </li>
                        </ul>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FuseChipSelectDoc);
