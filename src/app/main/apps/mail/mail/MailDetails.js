import React, {useEffect, useState} from 'react';
import {Avatar, Divider, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import _ from '@lodash';
import * as Actions from '../store/actions/index';
import MailChip from '../MailChip';

function MailDetails(props)
{
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        props.getMail(props.match.params);
    }, []);

    if ( !props.mail )
    {
        return null;
    }

    return (
        <div className="p-16 sm:p-24">
            <div className="flex items-center justify-between overflow-hidden">

                <div className="flex flex-col">
                    <FuseAnimate delay={100}>
                        <Typography variant="subtitle1" className="flex">{props.mail.subject}</Typography>
                    </FuseAnimate>

                    {props.labels && props.mail.labels.length > 0 && (
                        <div className="flex flex-wrap mt-8">
                            {props.mail.labels.map(label => (
                                <MailChip className="mt-4 mr-4" title={_.find(props.labels, {id: label}).title} color={_.find(props.labels, {id: label}).color} key={label}/>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            <Divider className="my-16"/>

            <FuseAnimate animation="transition.slideUpIn" delay={200}>
                <div>

                    <div className="flex items-start justify-between">

                        <div className="flex items-center justify-start">
                            {props.mail.from.avatar ?
                                (
                                    <Avatar className="mr-8" alt={props.mail.from.name} src={props.mail.from.avatar}/>
                                )
                                :
                                (
                                    <Avatar className="mr-8">
                                        {props.mail.from.name[0]}
                                    </Avatar>
                                )
                            }

                            <div className="flex flex-col">
                                <span>{props.mail.from.name}</span>
                                <Typography component="div" color="textSecondary" variant="body1" className="flex items-center justify-start">
                                    <div>to</div>
                                    <div className="ml-4">{props.mail.to[0].name}</div>
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
                                setShowDetails(!showDetails);
                            }}
                        >
                            {showDetails ?
                                (
                                    <span>Hide Details</span>
                                )
                                :
                                (
                                    <span>Show Details</span>
                                )
                            }
                        </Typography>

                        {showDetails && (
                            <div className="flex">
                                <Typography variant="body2" className="flex flex-col">
                                    <span>From:</span>
                                    <span>To:</span>
                                    <span>Date:</span>
                                </Typography>

                                <Typography variant="body2" color="textSecondary" className="pl-4 flex flex-col">
                                    <span>{props.mail.from.email}</span>
                                    <span>{props.mail.to[0].email}</span>
                                    <span>{props.mail.time}</span>
                                </Typography>
                            </div>
                        )}
                    </div>

                    <Typography variant="body2" dangerouslySetInnerHTML={{__html: props.mail.message}}/>

                    <Divider className="my-16"/>

                    {props.mail.attachments && (
                        <div>
                            <Typography variant="subtitle1" className="mb-16">
                                <span>Attachments</span>
                                <span className="ml-4">({props.mail.attachments.length})</span>
                            </Typography>

                            <div className="flex flex-wrap">
                                {props.mail.attachments.map(attachment => (
                                    <div className="w-192 pr-16 pb-16" key={attachment.fileName}>
                                        <img className="w-full rounded-4" src={attachment.preview} alt={attachment.fileName}/>
                                        <div className="flex flex-col">
                                            <Typography color="primary" className="underline cursor-pointer" onClick={event => event.preventDefault()}>View</Typography>
                                            <Typography color="primary" className="underline cursor-pointer" onClick={event => event.preventDefault()}>Download</Typography>
                                            <Typography>({attachment.size})</Typography>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </FuseAnimate>
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getMail: Actions.getMail
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mail  : mailApp.mail,
        labels: mailApp.labels
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MailDetails));
