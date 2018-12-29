import React from 'react';
import {withStyles} from '@material-ui/core';
import Navigation from 'fuse-layouts/shared/Navigation';

const styles = theme => ({});

const NavbarPartial = ({classes, navigation}) => {
    return (
        <div className="flex flex-1 w-full container px-16 lg:px-24">
            <Navigation className="-ml-12" layout="horizontal" dense/>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(NavbarPartial);


