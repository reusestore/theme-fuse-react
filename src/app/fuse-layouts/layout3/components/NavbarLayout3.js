import React from 'react';
import {withStyles} from '@material-ui/core';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import {FuseScrollbars} from '@fuse';

const styles = theme => ({});

const NavbarLayout3 = ({classes, navigation}) => {
    return (
        <div className="flex flex-1 items-center w-full h-full container px-16 lg:px-24">
            <FuseScrollbars className="flex h-full items-center">
                <Navigation className="w-full -ml-12" layout="horizontal" dense/>
            </FuseScrollbars>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(NavbarLayout3);


