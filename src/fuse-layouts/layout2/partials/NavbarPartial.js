import React from 'react';
import {withStyles} from '@material-ui/core';
import Logo from 'fuse-layouts/shared/Logo';
import Navigation from 'fuse-layouts/shared/Navigation';

const styles = theme => ({});

const NavbarPartial = ({classes, navigation}) => {
    return (
        <div className="flex flex-1 w-full container p-0 lg:px-24">

            <div className="flex flex-no-shrink items-center pl-8 pr-16">
                <Logo/>
            </div>

            <div className="flex flex-1 justify-end">
                <Navigation layout="horizontal" dense/>
            </div>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(NavbarPartial);


