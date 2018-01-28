import React from 'react';
import {AppBar, Hidden, Icon, IconButton, Toolbar, Typography} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';
import classNames from 'classnames';

const styles = theme => ({
    footer: {
        position: 'relative',
        zIndex  : 5
    }
});

const MainFooter = ({classes}) => {
    return (
        <AppBar className={classNames(classes.footer)} color="default">
            <Toolbar>
                <Typography type="title" color="inherit" noWrap>
                    Footer
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles, {withTheme: true})(MainFooter);
