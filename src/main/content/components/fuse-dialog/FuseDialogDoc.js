import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from 'store/actions';

const styles = theme => ({
    layoutRoot: {}
});

class FuseDialogDoc extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="h6">FuseDialog</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            <code className="language-bash">FuseDialog</code> is a simple dialog trigger for easily showing dialog messages via redux action. It is located in the
                            <code className="language-bash">FuseLayout</code>.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Usage</Typography>

                        <Typography className="mb-16" component="p">
                            You can show dialog anywhere with dispatching the action openDialog, its using Material-UI's dialog so you can pass the props in the object:
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                        <Button
                            onClick={() => this.props.openDialog({
                                children: (
                                    <React.Fragment>
                                        <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.props.closeDialog} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={this.props.closeDialog} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </React.Fragment>
                                )
                            })}
                            variant="contained"
                            color="secondary"
                        >
                        Open Dialog
                        </Button>
                            `}
                        </FuseHighlight>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Example</Typography>

                        <Button
                            onClick={() => this.props.openDialog({
                                children: (
                                    <React.Fragment>
                                        <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.props.closeDialog} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={this.props.closeDialog} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </React.Fragment>
                                )
                            })}
                            variant="contained"
                            color="secondary"
                        >
                            Open Dialog
                        </Button>
                    </div>
                }
            />
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            openDialog : Actions.openDialog,
            closeDialog: Actions.closeDialog
        },
        dispatch);
}

export default withStyles(styles, {withTheme: true})(connect(null, mapDispatchToProps)(FuseDialogDoc));
