import React, {useState} from 'react';
import {Checkbox, Icon, IconButton, Menu, MenuItem} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Actions from '../store/actions/index';

function MailToolbar(props)
{
    const [menu, setMenu] = useState({
        selectMenu : null,
        foldersMenu: null,
        labelsMenu : null
    });

    function handleMenuOpen(event, menu)
    {
        setMenu({
            ...menu,
            [menu]: event.currentTarget
        });
    }

    function handleMenuClose(event, menu)
    {
        setMenu({
            ...menu,
            [menu]: null
        });
    }

    function handleCheckChange(event)
    {
        event.target.checked ? props.selectAllMails() : props.deselectAllMails();
    }

    return (
        <div className="flex flex-1 items-center sm:px-8">

            <Checkbox
                onChange={handleCheckChange}
                checked={props.selectedMailIds.length === Object.keys(props.mails).length && props.selectedMailIds.length > 0}
                indeterminate={props.selectedMailIds.length !== Object.keys(props.mails).length && props.selectedMailIds.length > 0}
            />

            <IconButton
                className="w-24"
                aria-label="More"
                aria-owns={menu.select ? 'select-menu' : null}
                aria-haspopup="true"
                onClick={(ev) => handleMenuOpen(ev, 'select')}
            >
                <Icon>arrow_drop_down</Icon>
            </IconButton>

            <Menu
                id="select-menu"
                anchorEl={menu.select}
                open={Boolean(menu.select)}
                onClose={(ev) => handleMenuClose(ev, 'select')}
            >
                <MenuItem
                    onClick={(ev) => {
                        props.selectAllMails();
                        handleMenuClose(ev, 'select');
                    }}
                >
                    All
                </MenuItem>
                <MenuItem
                    onClick={(ev) => {
                        props.deselectAllMails();
                        handleMenuClose(ev, 'select')
                    }}
                >
                    None
                </MenuItem>
                <MenuItem
                    onClick={(ev) => {
                        props.selectMailsByParameter('read', true);
                        handleMenuClose(ev, 'select');
                    }}
                >
                    Read
                </MenuItem>
                <MenuItem
                    onClick={(ev) => {
                        props.selectMailsByParameter('read', false);
                        handleMenuClose(ev, 'select');
                    }}
                >
                    Unread
                </MenuItem>
                <MenuItem
                    onClick={(ev) => {
                        props.selectMailsByParameter('starred', true);
                        handleMenuClose(ev, 'select');
                    }}
                >
                    Starred
                </MenuItem>
                <MenuItem
                    onClick={(ev) => {
                        props.selectMailsByParameter('starred', false);
                        handleMenuClose(ev, 'select');
                    }}
                >
                    Unstarred
                </MenuItem>
                <MenuItem
                    onClick={(ev) => {
                        props.selectMailsByParameter('important', true);
                        handleMenuClose(ev, 'select');
                    }}
                >
                    Important
                </MenuItem>
                <MenuItem
                    onClick={(ev) => {
                        props.selectMailsByParameter('important', false);
                        handleMenuClose(ev, 'select');
                    }}
                >
                    Unimportant
                </MenuItem>
            </Menu>

            {props.selectedMailIds.length > 0 && (
                <React.Fragment>

                    <div className="border-r-1 h-48 w-1 mx-12 my-0"/>

                    <IconButton
                        onClick={(ev) => props.setFolderOnSelectedMails(4)}
                        aria-label="Delete"
                    >
                        <Icon>delete</Icon>
                    </IconButton>

                    <IconButton
                        aria-label="More"
                        aria-owns={menu.folders ? 'folders-menu' : null}
                        aria-haspopup="true"
                        onClick={(ev) => handleMenuOpen(ev, 'folders')}
                    >
                        <Icon>folder</Icon>
                    </IconButton>

                    <Menu
                        id="folders-menu"
                        anchorEl={menu.folders}
                        open={Boolean(menu.folders)}
                        onClose={(ev) => handleMenuClose(ev, 'folders')}
                    >
                        {props.folders.length > 0 && props.folders.map((folder) => (
                            <MenuItem
                                onClick={(ev) => {
                                    props.setFolderOnSelectedMails(folder.id);
                                    handleMenuClose(ev, 'folders')
                                }}
                                key={folder.id}
                            >
                                {folder.title}
                            </MenuItem>
                        ))}
                    </Menu>

                    <IconButton
                        aria-label="More"
                        aria-owns={menu.labels ? 'labels-menu' : null}
                        aria-haspopup="true"
                        onClick={(ev) => handleMenuOpen(ev, 'labels')}
                    >
                        <Icon>label</Icon>
                    </IconButton>

                    <Menu
                        id="folders-menu"
                        anchorEl={menu.labels}
                        open={Boolean(menu.labels)}
                        onClose={(ev) => handleMenuClose(ev, 'labels')}
                    >
                        {props.labels.length > 0 && props.labels.map((label) => (
                            <MenuItem
                                onClick={(ev) => {
                                    props.toggleLabelOnSelectedMails(label.id);
                                    handleMenuClose(ev, 'labels')
                                }}
                                key={label.id}
                            >
                                {label.title}
                            </MenuItem>
                        ))}
                    </Menu>
                </React.Fragment>
            )}
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        selectAllMails            : Actions.selectAllMails,
        deselectAllMails          : Actions.deselectAllMails,
        selectMailsByParameter    : Actions.selectMailsByParameter,
        setFolderOnSelectedMails  : Actions.setFolderOnSelectedMails,
        toggleLabelOnSelectedMails: Actions.toggleLabelOnSelectedMails
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mails          : mailApp.mails.entities,
        selectedMailIds: mailApp.mails.selectedMailIds,
        folders        : mailApp.folders,
        labels         : mailApp.labels,
        filters        : mailApp.filters
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MailToolbar));
