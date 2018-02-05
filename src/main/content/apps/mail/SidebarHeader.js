import React from 'react';
import {withStyles} from 'material-ui/styles/index';
import {Icon} from 'material-ui';
import classNames from 'classnames';

const styles = theme => ({
    root    : {},
    logo    : {},
    logoIcon: {
        fontSize: '32px!important'
    },
    logoText: {
        fontSize: 24
    }
});

const SidebarHeader = ({classes}) => {

    return (
        <div className={classNames(classes.root, 'flex items-center h-full')}>
            <div className={classNames(classes.logo, 'flex items-center')}>
                <Icon className={classNames(classes.logoIcon, 'mr-16')}>mail</Icon>
                <span className={classes.logoText}>Mailbox</span>
            </div>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(SidebarHeader);
