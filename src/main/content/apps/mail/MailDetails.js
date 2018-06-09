import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Avatar, Divider, Grid, Icon, IconButton, Typography} from '@material-ui/core';
import MailChip from './MailChip';
import _ from 'lodash';
import classNames from 'classnames';
import {FuseAnimate} from '@fuse';

const styles = theme => ({});

class MailDetails extends Component {

    constructor(props)
    {
        super(props);
        this.state = {showDetails: false};
    }

    render()
    {
        const {classes, mail, labels, toggleStar, toggleImportant} = this.props;

        if ( !mail )
        {
            return (
                <div className="flex flex-col items-center justify-center h-full">
                    <FuseAnimate animation="transition.expandIn" delay={100}>
                        <Icon color="action" className="mb-16 text-128">email</Icon>
                    </FuseAnimate>
                    <FuseAnimate animation="transition.fadeIn" delay={200}>
                        <Typography color="textSecondary" variant="headline">
                            Select a message to read
                        </Typography>
                    </FuseAnimate>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="flex items-center justify-between overflow-hidden">

                    <div className="flex flex-col">
                        <FuseAnimate delay={100}>
                            <Typography variant="subheading" className="flex">{mail.subject}</Typography>
                        </FuseAnimate>

                        {mail.labels.length > 0 && (
                            <div className="flex flex-wrap mt-8">
                                {mail.labels.map(label => (
                                    <MailChip className="mt-4 mr-4" title={_.find(labels, {id: label}).title} color={_.find(labels, {id: label}).color} key={label}/>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-start" aria-label="Toggle star">
                        <FuseAnimate animation="transition.expandIn" delay={100}>
                            <IconButton onClick={() => toggleStar(mail)}>
                                {mail.starred ?
                                    (
                                        <Icon>star</Icon>
                                    )
                                    :
                                    (
                                        <Icon>star_border</Icon>
                                    )
                                }
                            </IconButton>
                        </FuseAnimate>
                        <FuseAnimate animation="transition.expandIn" delay={100}>
                            <IconButton onClick={() => toggleImportant(mail)}>
                                {mail.important ?
                                    (
                                        <Icon>label</Icon>
                                    )
                                    :
                                    (
                                        <Icon>label_outline</Icon>
                                    )
                                }
                            </IconButton>
                        </FuseAnimate>
                    </div>
                </div>

                <Divider className="my-16"/>

                <FuseAnimate animation="transition.slideUpIn" delay={200}>
                    <div>

                        <div className="flex items-start justify-between">

                            <div className="flex items-center justify-start">
                                {mail.from.avatar ?
                                    (
                                        <Avatar className="mr-8" alt={mail.from.name} src={mail.from.avatar}/>
                                    )
                                    :
                                    (
                                        <Avatar className={classNames(classes.avatar, "mr-8")}>
                                            {mail.from.name[0]}
                                        </Avatar>
                                    )
                                }

                                <div className="flex flex-col">
                                    <span>{mail.from.name}</span>
                                    <Typography color="textSecondary" variant="body2" className="flex items-center justify-start">
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
                            <Typography
                                color="primary"
                                className="cursor-pointer underline mb-8"
                                onClick={() => {
                                    this.setState({showDetails: !this.state.showDetails});
                                }}
                            >
                                {this.state.showDetails ?
                                    (
                                        <span>Hide Details</span>
                                    )
                                    :
                                    (
                                        <span>Show Details</span>
                                    )
                                }
                            </Typography>

                            {this.state.showDetails && (
                                <div className="flex">
                                    <Typography variant="body1" className="flex flex-col">
                                        <span>From:</span>
                                        <span>To:</span>
                                        <span>Date:</span>
                                    </Typography>

                                    <Typography variant="body1" color="textSecondary" className="pl-4 flex flex-col">
                                        <span>{mail.from.email}</span>
                                        <span>{mail.to[0].email}</span>
                                        <span>{mail.time}</span>
                                    </Typography>
                                </div>
                            )}
                        </div>

                        <Typography variant="body1" dangerouslySetInnerHTML={{__html: mail.message}}/>

                        <Divider className="my-16"/>

                        {mail.attachments && (
                            <div>
                                <Typography variant="subheading" className="mb-16">
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
                    </div>
                </FuseAnimate>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        toggleStar     : Actions.toggleStar,
        toggleImportant: Actions.toggleImportant
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mail  : mailApp.mails.currentMail,
        labels: mailApp.labels
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(MailDetails));