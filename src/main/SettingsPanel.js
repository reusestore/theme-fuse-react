import React, {Component} from 'react';
import {Button, Typography, Paper, Icon, IconButton, Slide, withStyles, ClickAwayListener} from '@material-ui/core';
import {FuseScrollbars, FuseSettings} from '@fuse';
import ownerDocument from 'dom-helpers/ownerDocument';
import keycode from 'keycode';
import classNames from 'classnames';

const styles = theme => ({
    button               : {
        position               : 'fixed',
        right                  : 0,
        top                    : 160,
        minWidth               : 48,
        width                  : 48,
        height                 : 48,
        opacity                : .75,
        padding                : 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius   : 0,
        zIndex                 : 999
    },
    '@keyframes rotating': {
        from: {
            transform: 'rotate(0deg)'
        },
        to  : {
            transform: 'rotate(360deg)'
        }
    },
    buttonIcon           : {
        animation: 'rotating 3s linear infinite'
    },
    dialogPaper          : {
        position       : 'fixed',
        width          : 380,
        maxWidth       : '90vw',
        backgroundColor: theme.palette.background.paper,
        boxShadow      : theme.shadows[5],
        top            : 0,
        height         : '100%',
        minHeight      : '100%',
        bottom         : 0,
        right          : 0,
        margin         : 0,
        zIndex         : 1000
    }
});

class SettingsPanel extends Component {
    state = {
        open: false
    };

    handleOpen = () => {
        const doc = ownerDocument(this.mountNode);
        this.setState({open: true});
        doc.addEventListener('keydown', this.handleDocumentKeyDown);
    };

    handleClose = () => {
        const doc = ownerDocument(this.mountNode);
        this.setState({open: false});
        doc.removeEventListener('keydown', this.handleDocumentKeyDown);
    };

    handleDocumentKeyDown = (event) => {
        if ( keycode(event) !== 'esc' )
        {
            return;
        }
        this.handleClose();
    };

    render()
    {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Button className={classes.button} variant="raised" color="secondary" onClick={this.handleOpen}>
                    <Icon className={classes.buttonIcon}>settings</Icon>
                </Button>

                <ClickAwayListener onClickAway={this.handleClose}>
                    <Slide in={this.state.open} direction="left">
                        {(state) => (
                            <Paper className={classNames(classes.dialogPaper, {"hidden": state === "exited"})}>
                                <FuseScrollbars className="p-24 sm:p-32 h-full overflow-y-auto">
                                    <IconButton className="fixed pin-t pin-r z-10" onClick={this.handleClose}>
                                        <Icon>close</Icon>
                                    </IconButton>

                                    <Typography className="mb-32" variant="title">Theme Settings</Typography>

                                    <FuseSettings/>

                                </FuseScrollbars>
                            </Paper>
                        )}
                    </Slide>
                </ClickAwayListener>

            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SettingsPanel);
