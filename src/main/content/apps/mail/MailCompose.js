import React, {Component} from 'react';
import {TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Input, Icon, IconButton, Typography} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';

const styles = theme => ({
    composeButton     : {
        width: '100%'
    },
    dialogTitle       : {
        backgroundColor: theme.palette.primary.dark,
        color          : theme.palette.text.primary
    },
    formControl       : {
        marginBottom: 16
    },
    attachmentList    : {
        paddingTop: 16
    },
    attachment        : {
        fontSize       : 13,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        border         : '1px solid rgba(0, 0, 0, 0.16)',
        paddingLeft    : 16,
        marginTop      : 8,
        borderRadius   : 2,
        display        : 'flex',
        justifyContent : 'space-between',
        alignItems     : 'center'
    },
    attachmentFilename: {
        fontWeight: '500'
    },
    attachmentSize    : {
        marginLeft: 8,
        fontWeight: '300'
    }
});

class MailCompose extends Component {
    state = {
        composeDialog: false,
        from         : 'johndoe@creapond.com',
        to           : '',
        cc           : '',
        bcc          : '',
        subject      : '',
        message      : ''
    };

    openComposeDialog = () => {
        this.setState({composeDialog: true});
    };

    closeComposeDialog = () => {
        this.setState({composeDialog: false});
    };

    render()
    {
        const {classes} = this.props;

        const Attachment = ({fileName, size}) => (
            <div className={classes.attachment}>
                <div className="flex">
                    <Typography variant="caption" className={classes.attachmentFilename}>{fileName}</Typography>
                    <Typography variant="caption" className={classes.attachmentSize}>({size})</Typography>
                </div>
                <IconButton>
                    <Icon className="text-16">close</Icon>
                </IconButton>
            </div>
        );

        return (
            <div className="p-24">

                <Button variant="raised" color="primary" className={classes.composeButton}
                        onClick={this.openComposeDialog}>
                    COMPOSE
                </Button>

                <Dialog
                    open={this.state.composeDialog}
                    onClose={this.closeComposeDialog}
                    aria-labelledby="form-dialog-title">

                    <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
                        New Message
                    </DialogTitle>

                    <DialogContent className="p-24">

                        <FormControl className={classes.formControl} disabled fullWidth>
                            <InputLabel htmlFor="from">From</InputLabel>
                            <Input id="from" value={this.state.from}/>
                        </FormControl>

                        <FormControl className={classes.formControl} required fullWidth>
                            <InputLabel htmlFor="to">To</InputLabel>
                            <Input autoFocus id="to" value={this.state.to}/>
                        </FormControl>

                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel htmlFor="cc">Cc</InputLabel>
                            <Input id="cc" value={this.state.cc}/>
                        </FormControl>

                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel htmlFor="bcc">Bcc</InputLabel>
                            <Input id="bcc" value={this.state.bcc}/>
                        </FormControl>

                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel htmlFor="subject">Subject</InputLabel>
                            <Input id="subject" value={this.state.subject}/>
                        </FormControl>

                        <TextField className={classes.formControl}
                                   id="message" label="Message" type="text"
                                   multiline rows={5} fullWidth/>

                        <div className={classes.attachmentList}>
                            <Attachment fileName="attachment-2.doc" size="12 kb"/>
                            <Attachment fileName="attachment-1.jpg" size="350 kb"/>
                        </div>
                    </DialogContent>

                    <DialogActions className="justify-between pl-16">
                        <div>
                            <Button variant="raised" color="primary" onClick={this.closeComposeDialog}>
                                Send
                            </Button>
                            <IconButton>
                                <Icon>attach_file</Icon>
                            </IconButton>
                        </div>
                        <IconButton onClick={this.closeComposeDialog}>
                            <Icon>delete</Icon>
                        </IconButton>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


export default withStyles(styles, {withTheme: true})(MailCompose);
