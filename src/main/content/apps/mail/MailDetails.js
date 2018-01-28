import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Avatar, Divider, Grid, Icon, IconButton, Typography} from 'material-ui';
import MailChip from './MailChip';
import _ from 'lodash';

const styles = theme => ({});

class MailDetails extends Component {

    constructor(props)
    {
        super(props);
        this.state = {showDetails: false};
    }

    render()
    {
        const {classes, mail, labels} = this.props;

        if ( !mail )
        {
            return (
                <div className="flex flex-col items-center justify-center h-full">
                    <Icon color="action" className="mb-16 text-128">email</Icon>
                    <div className="text-24 font-light">
                        <span>Select a message to read</span>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="flex items-center justify-between">

                    <div className="flex flex-col">
                        <Typography type="subheading" className="flex">{mail.subject}</Typography>

                        {mail.labels.length > 0 && (
                            <div className="flex flex-wrap mt-8">
                                {mail.labels.map(label => (
                                    <MailChip className="mt-4 mr-4" title={_.find(labels, {id: label}).title} color={_.find(labels, {id: label}).color} key={label}/>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-start" aria-label="Toggle star">
                        <IconButton>
                            {mail.starred ? (
                                <Icon>start</Icon>
                            ) : (
                                <Icon>start_outline</Icon>
                            )}
                        </IconButton>
                        <IconButton>
                            {mail.important ? (
                                <Icon>label</Icon>
                            ) : (
                                <Icon>label_outline</Icon>
                            )}
                        </IconButton>
                    </div>
                </div>

                <Divider className="my-16"/>

                <div className="flex items-start justify-between">

                    <div className="flex items-center justify-start">
                        {mail.from.avatar ? (
                            <Avatar className="mr-8" alt={mail.from.name} src={mail.from.avatar}/>
                        ) : (
                            <Avatar className={`mr-8 ${classes.avatar}`}>
                                {mail.from.name[0]}
                            </Avatar>
                        )}

                        <div className="flex flex-col">
                            <span>{mail.from.name}</span>
                            <Typography color="secondary" type="body2" className="flex items-center justify-start">
                                <div>to</div>
                                <div className="ml-4">{mail.to[0].name}</div>
                            </Typography>
                        </div>
                    </div>
                    <IconButton>
                        <Icon>more_vert</Icon>
                    </IconButton>
                </div>

                <div className="my-16">
                    <Typography color="primary" className="cursor-pointer underline mb-8"
                                onClick={() => {
                                    this.setState({showDetails: !this.state.showDetails});
                                }}>
                        {this.state.showDetails ? (
                            <span>Hide Details</span>
                        ) : (
                            <span>Show Details</span>
                        )}
                    </Typography>

                    {this.state.showDetails && (
                        <div className="flex">
                            <Typography type="body1" className="flex flex-col">
                                <span>From:</span>
                                <span>To:</span>
                                <span>Date:</span>
                            </Typography>

                            <Typography type="body1" color="secondary" className="pl-4 flex flex-col">
                                <span>{mail.from.email}</span>
                                <span>{mail.to[0].email}</span>
                                <span>{mail.time}</span>
                            </Typography>
                        </div>
                    )}
                </div>

                <Typography type="body1" dangerouslySetInnerHTML={{__html: mail.message}}/>

                <Divider className="my-16"/>

                {mail.attachments && (
                    <div>
                        <Typography type="subheading" className="mb-16">
                            <span>Attachments</span>
                            <span className="ml-4">({mail.attachments.length})</span>
                        </Typography>

                        <Grid container>
                            {mail.attachments.map(attachment => (
                                <Grid item xs={6} sm={4} key={attachment.fileName}>
                                    <img className="preview" src={attachment.preview} alt={attachment.fileName}/>
                                    <div className="flex flex-col">
                                        <Typography color="primary" className="underline cursor-pointer" onClick={event => event.preventDefault()}>View</Typography>
                                        <Typography color="primary" className="underline cursor-pointer" onClick={event => event.preventDefault()}>Download</Typography>
                                        <Typography>({attachment.size})</Typography>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getData: Actions.getData
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mails  : mailApp.mails.entities,
        mail   : mailApp.mails.currentMail,
        folders: mailApp.folders,
        labels : mailApp.labels,
        filters: mailApp.filters
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(MailDetails));
