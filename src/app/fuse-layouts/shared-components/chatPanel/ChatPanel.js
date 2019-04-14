import React, {useEffect} from 'react';
import {AppBar, Toolbar, Icon, IconButton, ClickAwayListener, Paper, Avatar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import keycode from 'keycode';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from 'app/store/withReducer';
import ContactList from './ContactList';
import Chat from './Chat';

const useStyles = makeStyles(theme => ({
    root : {
        width                         : 70,
        maxWidth                      : 70,
        minWidth                      : 70,
        [theme.breakpoints.down('md')]: {
            width   : 0,
            maxWidth: 0,
            minWidth: 0
        }
    },
    panel: {
        position                      : 'absolute',
        width                         : 360,
        backgroundColor               : theme.palette.background.paper,
        boxShadow                     : theme.shadows[3],
        top                           : 0,
        height                        : '100%',
        minHeight                     : '100%',
        bottom                        : 0,
        right                         : 0,
        margin                        : 0,
        zIndex                        : 1000,
        transform                     : 'translate3d(290px,0,0)',
        overflow                      : 'hidden',
        [theme.breakpoints.down('md')]: {
            transform : 'translate3d(360px,0,0)',
            boxShadow : 'none',
            '&.opened': {
                boxShadow: theme.shadows[5]
            }
        },
        transition                    : theme.transitions.create(['transform'], {
            easing  : theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard
        }),
        '&.opened'                    : {
            transform: 'translateX(0)'
        }
    }
}));

function ChatPanel(props)
{
    const classes = useStyles(props);
    const selectedContact = props.contacts.find(_contact => _contact.id === props.selectedContactId);

    useEffect(() => {
        props.getUserData();
        props.getContacts();
        return (() => {
            document.removeEventListener('keydown', handleDocumentKeyDown);
        });
    }, []);

    useEffect(() => {
        if ( props.state )
        {
            document.addEventListener("keydown", handleDocumentKeyDown);
        }
        else
        {
            document.removeEventListener('keydown', handleDocumentKeyDown);
        }

    }, [props.state]);

    function handleDocumentKeyDown(event)
    {
        if ( keycode(event) === 'esc' )
        {
            props.closeChatPanel();
        }
    }

    return (
        <div className={classes.root}>
            <ClickAwayListener onClickAway={() => props.state && props.closeChatPanel()}>
                <div className={classNames(classes.panel, {'opened': props.state}, "flex flex-col")}>
                    <AppBar position="static" elevation={1}>
                        <Toolbar className="pl-12 pr-8">
                            <div className="flex flex-1 items-center">
                                {(!props.state || !props.selectedContactId) && (
                                    <React.Fragment>
                                        <IconButton color="inherit" onClick={props.openChatPanel}>
                                            <Icon className="text-32">chat</Icon>
                                        </IconButton>
                                        {!props.selectedContactId && (
                                            <Typography className="ml-16 text-16" color="inherit">Team Chat</Typography>
                                        )}
                                    </React.Fragment>
                                )}
                                {props.state && selectedContact && (
                                    <React.Fragment>
                                        <Avatar className="ml-4" src={selectedContact.avatar}/>
                                        <Typography className="ml-16 text-16" color="inherit">{selectedContact.name}</Typography>
                                    </React.Fragment>
                                )}
                            </div>
                            <IconButton onClick={props.closeChatPanel} color="inherit">
                                <Icon>close</Icon>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Paper className="flex flex-1 flex-row min-h-px">
                        <ContactList className="flex flex-no-shrink"/>
                        <Chat className="flex flex-1 z-10"/>
                    </Paper>
                </div>
            </ClickAwayListener>
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getUserData   : Actions.getUserData,
        getContacts   : Actions.getContacts,
        openChatPanel : Actions.openChatPanel,
        closeChatPanel: Actions.closeChatPanel
    }, dispatch);
}

function mapStateToProps({chatPanel})
{
    return {
        contacts         : chatPanel.contacts.entities,
        selectedContactId: chatPanel.contacts.selectedContactId,
        state            : chatPanel.state
    }
}

export default withReducer('chatPanel', reducer)(connect(mapStateToProps, mapDispatchToProps)(ChatPanel));
