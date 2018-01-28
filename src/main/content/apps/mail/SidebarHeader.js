import React from 'react';
import {withStyles} from 'material-ui/styles/index';
import {Icon} from 'material-ui';
import classNames from 'classnames';

const styles = theme => ({
    sidebarHeader: {
        height: '200px'
    },
    logoIcon     : {
        fontSize: '32px!important'
    },
    logoText     : {
        fontSize: 24
    }
});

const SidebarHeader = ({classes}) => {

    return (
        <div className={classNames(classes.sidebarHeader, 'flex items-center')}>
            <Icon className={classNames(classes.logoIcon, 'mr-16')}>mail</Icon>
            <span className={classes.logoText}>Mailbox</span>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(SidebarHeader);
