import React from 'react';
import {Typography} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';
import classNames from 'classnames';

const styles = theme => ({
    root: {
    }
});

const MainFooter = ({classes}) => {
    return (
        <div className={classNames(classes.root)}>
            <Typography variant="title" color="inherit" noWrap>
                Footer
            </Typography>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(MainFooter);
