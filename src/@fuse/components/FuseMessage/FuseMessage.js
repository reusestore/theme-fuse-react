import React from 'react';
import {Snackbar, IconButton, Icon, SnackbarContent} from '@material-ui/core';
import {green, amber, blue} from '@material-ui/core/colors';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as Actions from 'app/store/actions';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root   : {},
    success: {
        backgroundColor: green[600],
        color          : '#FFFFFF'
    },
    error  : {
        backgroundColor: theme.palette.error.dark,
        color          : theme.palette.getContrastText(theme.palette.error.dark)
    },
    info   : {
        backgroundColor: blue[600],
        color          : '#FFFFFF'
    },
    warning: {
        backgroundColor: amber[600],
        color          : '#FFFFFF'
    }
}));

const variantIcon = {
    success: "check_circle",
    warning: "warning",
    error  : "error_outline",
    info   : "info"
};

function FuseMessage(props)
{
    const classes = useStyles();

    return (
        <Snackbar
            {...props.options}
            open={props.state}
            onClose={props.hideMessage}
            classes={{
                root: classes.root
            }}
            ContentProps={{
                variant        : 'body2',
                headlineMapping: {
                    body1: 'div',
                    body2: 'div'
                }
            }}
        >
            <SnackbarContent
                className={classNames(classes[props.options.variant])}
                message={
                    <div className="flex items-center">
                        {variantIcon[props.options.variant] && (
                            <Icon className="mr-8" color="inherit">{variantIcon[props.options.variant]}</Icon>
                        )}
                        {props.options.message}
                    </div>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={props.hideMessage}
                    >
                        <Icon>close</Icon>
                    </IconButton>
                ]}
            />
        </Snackbar>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        hideMessage: Actions.hideMessage
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        state  : fuse.message.state,
        options: fuse.message.options
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(FuseMessage));
