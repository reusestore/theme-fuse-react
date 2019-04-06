import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Actions from '../store/actions/index';

const pathToRegexp = require('path-to-regexp');

function MailToolbar(props)
{
    const toPath = pathToRegexp.compile(props.match.path);
    const matchParams = {...props.match.params};
    delete matchParams['mailId'];
    const deselectUrl = toPath(matchParams);

    if ( !props.mail )
    {
        return null;
    }

    return (
        <div className="flex flex-1 items-center justify-between overflow-hidden sm:px-16">

            <IconButton onClick={() => props.history.push(deselectUrl)}>
                <Icon>arrow_back</Icon>
            </IconButton>

            <div className="flex items-center justify-start" aria-label="Toggle star">
                <FuseAnimate animation="transition.expandIn" delay={100}>
                    <IconButton onClick={() => props.toggleStar(props.mail)}>
                        {props.mail.starred ?
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
                    <IconButton onClick={() => props.toggleImportant(props.mail)}>
                        {props.mail.important ?
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
    );
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
        mail: mailApp.mail
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MailToolbar));
