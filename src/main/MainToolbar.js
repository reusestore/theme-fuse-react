import React from 'react';
import {AppBar, Hidden, Icon, IconButton, Toolbar, Typography} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';
import classNames from 'classnames';

const styles = theme => ({
    toolbar: {
        position: 'relative',
        zIndex  : 5
    }
});

const MainToolbar = ({classes, parent}) => {
    return (
        <AppBar className={classNames(classes.toolbar)} color="default">
            <Toolbar>
                <Hidden mdUp>
                    <IconButton
                        aria-label="open drawer"
                        onClick={parent.handleMobileNavbarOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
                <Typography type="title" color="inherit" noWrap>
                    Toolbar
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles, {withTheme: true})(MainToolbar);
