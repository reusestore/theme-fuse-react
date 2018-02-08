import React from 'react';
import {withStyles} from 'material-ui/styles/index';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';

const styles = theme => ({
    root    : {
        display   : 'flex',
        alignItems: 'center'
    },
    logo    : {},
    logoIcon: {
        width : 38,
        height: 38
    },
    logoText: {}
});

const MainNavbarHeader = ({classes}) => {
    return (
        <div className={classes.root}>
            <div className={classNames(classes.logo, "flex items-center")}>
                <img className={classes.logoIcon} src="assets/images/logos/fuse.svg" alt="logo"/>
                <span className={classNames(classes.logoText, "text-20 ml-8 font-light logo-text")}>FUSE</span>
            </div>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(withRouter(MainNavbarHeader));
