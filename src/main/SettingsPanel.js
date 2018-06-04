import React, {Component} from 'react';
import {Button, Paper, Icon, IconButton, Slide, withStyles, ClickAwayListener} from '@material-ui/core';
import {FuseScrollbars, FuseSettings} from '@fuse';
import ownerDocument from 'dom-helpers/ownerDocument';
import keycode from 'keycode';

const styles = theme => ({
    root                 : {
        position: 'fixed',
        top     : 160,
        right   : 0,
        zIndex  : 999
    },
    button               : {
        minWidth: 48,
        width   : 48,
        height  : 48,
        opacity : .75,
        padding : 0
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
        margin         : 0
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
            <div className={classes.root}>
                <Button className={classes.button} variant="raised" color="secondary" onClick={this.handleOpen}>
                    <Icon className={classes.buttonIcon}>settings</Icon>
                </Button>

                <ClickAwayListener onClickAway={this.handleClose}>
                    <Slide in={this.state.open} direction="left">
                        <Paper className={classes.dialogPaper}>
                            <FuseScrollbars className="p-24 sm:p-32 h-full">
                                <IconButton className="fixed pin-t pin-r z-10" onClick={this.handleClose}>
                                    <Icon>close</Icon>
                                </IconButton>

                                <FuseSettings/>
                            </FuseScrollbars>
                        </Paper>
                    </Slide>
                </ClickAwayListener>

            </div>
        );
    }
}

export default withStyles(styles)(SettingsPanel);
