import React from 'react';
import {withStyles} from 'material-ui/styles/index';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        padding        : '0 7px',
        fontSize       : 11,
        fontWeight     : 500,
        height         : 20,
        minWidth       : 20,
        borderRadius   : 20,
        display        : 'flex',
        alignItems     : 'center',
        backgroundColor: theme.palette.secondary.main,
        color          : theme.palette.secondary.contrastText
    }
});
const FuseNavBadge = ({classes, className, badge}) => {

    return (
        <div className={classNames(classes.root, className)}
             style={{
                 backgroundColor: badge.bg,
                 color          : badge.fg
             }}>
            {badge.title}
        </div>
    )
};

export default withStyles(styles, {withTheme: true})(FuseNavBadge);
