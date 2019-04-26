import {FuseScrollbars, FuseAnimateGroup, FuseUtils} from '@fuse';
import {AppBar, Avatar, ListItemIcon, List, ListItemText, Menu, MenuItem, Typography, Toolbar, Icon, IconButton, Input, Paper} from '@material-ui/core';
import React, {useMemo, useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from "./store/actions";
import StatusIcon from "./StatusIcon";
import ContactListItem from './ContactListItem'

const statusArr = [
    {
        title: 'Online',
        value: 'online'
    },
    {
        title: 'Away',
        value: 'away'
    },
    {
        title: 'Do not disturb',
        value: 'do-not-disturb'
    },
    {
        title: 'Offline',
        value: 'offline'
    }
];

function ChatsSidebar(props)
{
    const [searchText, setSearchText] = useState('');
    const [statusMenuEl, setStatusMenuEl] = useState(null);
    const [moreMenuEl, setMoreMenuEl] = useState(null);
    const chatListContacts = props.user && props.user.chatList ? props.user.chatList.map((_chat) => (
        {
            ..._chat,
            ...props.contacts.find((_contact) => _contact.id === _chat.contactId)
        }
    )) : [];
    const chatListArr = getFilteredArray([...chatListContacts], searchText);
    const contactsArr = getFilteredArray([...props.contacts], searchText);

    function getFilteredArray(arr, searchText)
    {
        if ( searchText.length === 0 )
        {
            return arr;
        }
        return FuseUtils.filterArrayByString(arr, searchText);
    }

    function handleContactClick(contactId)
    {
        props.getChat(contactId);
    }

    function handleMoreMenuClick(event)
    {
        setMoreMenuEl(event.currentTarget);
    }

    function handleMoreMenuClose(event)
    {
        setMoreMenuEl(null);
    }

    function handleStatusMenuClick(event)
    {
        event.preventDefault();
        event.stopPropagation();
        setStatusMenuEl(event.currentTarget);
    }

    function handleStatusSelect(event, status)
    {
        event.preventDefault();
        event.stopPropagation();
        props.updateUserData({
            ...props.user,
            status
        });
        setStatusMenuEl(null);
    }

    function handleStatusClose(event)
    {
        event.preventDefault();
        event.stopPropagation();
        setStatusMenuEl(null);
    }

    function handleSearchText(event)
    {
        setSearchText(event.target.value);
    }

    return (
        <div className="flex flex-col flex-auto h-full">
            <AppBar
                position="static"
                color="default"
                elevation={1}
            >
                <Toolbar className="flex justify-between items-center px-16 pr-4">
                    {props.user && (
                        <div className="relative w-40 h-40 p-0 cursor-pointer" onClick={props.openUserSidebar}>

                            <Avatar src={props.user.avatar} alt={props.user.name} className="w-40 h-40">
                                {(!props.user.avatar || props.user.avatar === '') ? props.user.name[0] : ''}
                            </Avatar>

                            <div
                                className="absolute pin-r pin-b -m-4 z-10 cursor-pointer"
                                aria-owns={statusMenuEl ? 'switch-menu' : null}
                                aria-haspopup="true"
                                onClick={handleStatusMenuClick}
                            >
                                <StatusIcon status={props.user.status}/>
                            </div>

                            <Menu
                                id="status-switch"
                                anchorEl={statusMenuEl}
                                open={Boolean(statusMenuEl)}
                                onClose={handleStatusClose}
                            >
                                {statusArr.map((status) => (
                                    <MenuItem onClick={(ev) => handleStatusSelect(ev, status.value)} key={status.value}>
                                        <ListItemIcon className="min-w-40">
                                            <StatusIcon status={status.value}/>
                                        </ListItemIcon>
                                        <ListItemText primary={status.title}/>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    )}

                    <div>
                        <IconButton
                            aria-owns={moreMenuEl ? 'chats-more-menu' : null}
                            aria-haspopup="true"
                            onClick={handleMoreMenuClick}
                        >
                            <Icon>more_vert</Icon>
                        </IconButton>
                        <Menu
                            id="chats-more-menu"
                            anchorEl={moreMenuEl}
                            open={Boolean(moreMenuEl)}
                            onClose={handleMoreMenuClose}
                        >
                            <MenuItem onClick={handleMoreMenuClose}>Profile</MenuItem>
                            <MenuItem onClick={handleMoreMenuClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
                {useMemo(() => (
                    <Toolbar className="px-16">
                        <Paper className="flex p-4 items-center w-full px-8 py-4 rounded-8" elevation={1}>

                            <Icon className="mr-8" color="action">search</Icon>

                            <Input
                                placeholder="Search or start new chat"
                                className="flex flex-1"
                                disableUnderline
                                fullWidth
                                value={searchText}
                                inputProps={{
                                    'aria-label': 'Search'
                                }}
                                onChange={handleSearchText}
                            />
                        </Paper>
                    </Toolbar>
                ), [searchText])}
            </AppBar>

            <FuseScrollbars className="overflow-y-auto flex-1">
                <List className="w-full">
                    {useMemo(() => (
                        props.contacts.length > 0 && (
                            <React.Fragment>
                                <FuseAnimateGroup
                                    enter={{
                                        animation: "transition.expandIn"
                                    }}
                                    className="flex flex-col flex-no-shrink"
                                >
                                    {chatListArr.length > 0 && (
                                        <Typography
                                            className="font-300 text-20 px-16 py-24"
                                            color="secondary"
                                        >
                                            Chats
                                        </Typography>
                                    )}

                                    {chatListArr.map(contact => (
                                        <ContactListItem key={contact.id} contact={contact} onContactClick={handleContactClick}/>
                                    ))}

                                    {contactsArr.length > 0 && (
                                        <Typography
                                            className="font-300 text-20 px-16 py-24"
                                            color="secondary"
                                        >
                                            Contacts
                                        </Typography>
                                    )}

                                    {contactsArr.map(contact => (
                                        <ContactListItem key={contact.id} contact={contact} onContactClick={handleContactClick}/>
                                    ))}
                                </FuseAnimateGroup>
                            </React.Fragment>
                        )), [props.contacts, chatListArr])
                    }
                </List>
            </FuseScrollbars>
        </div>
    )
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getChat        : Actions.getChat,
        openUserSidebar: Actions.openUserSidebar,
        updateUserData : Actions.updateUserData
    }, dispatch);
}

function mapStateToProps({chatApp})
{
    return {
        contacts         : chatApp.contacts.entities,
        selectedContactId: chatApp.contacts.selectedContactId,
        user             : chatApp.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatsSidebar);
