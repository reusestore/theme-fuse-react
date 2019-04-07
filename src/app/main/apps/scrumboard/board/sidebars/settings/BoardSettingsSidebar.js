import React from 'react';
import {AppBar, Toolbar, List, ListItem, ListItemIcon, Icon, ListItemText, ListItemSecondaryAction, Switch} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/main/apps/scrumboard/store/actions';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';

function BoardSettingsSidebar(props)
{
    return (
        <div>
            <AppBar position="static">
                <Toolbar className="flex w-full justify-center">
                    Settings
                </Toolbar>
            </AppBar>

            <List className="py-16" dense>

                <ListItem
                    button
                    onClick={() => props.changeBoardSettings({cardCoverImages: !props.board.settings.cardCoverImages})}
                >
                    <ListItemIcon>
                        <Icon>photo</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Card Cover Images"/>
                    <ListItemSecondaryAction>
                        <Switch
                            onChange={() => props.changeBoardSettings({cardCoverImages: !props.board.settings.cardCoverImages})}
                            checked={props.board.settings.cardCoverImages}
                        />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem
                    button
                    onClick={() => props.changeBoardSettings({subscribed: !props.board.settings.subscribed})}
                >
                    <ListItemIcon>
                        <Icon>remove_red_eye</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Subscribe"/>
                    <ListItemSecondaryAction>
                        <Switch
                            onChange={() => props.changeBoardSettings({subscribed: !props.board.settings.subscribed})}
                            checked={props.board.settings.subscribed}
                        />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button onClick={() => props.copyBoard(props.board)}>
                    <ListItemIcon>
                        <Icon>file_copy</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Copy Board"/>
                </ListItem>

                <ListItem button onClick={() => props.deleteBoard(props.board.id)}>
                    <ListItemIcon>
                        <Icon>delete</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Delete Board"/>
                </ListItem>
            </List>
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        changeBoardSettings: Actions.changeBoardSettings,
        deleteBoard        : Actions.deleteBoard,
        copyBoard          : Actions.copyBoard
    }, dispatch);
}

function mapStateToProps({scrumboardApp})
{
    return {
        board: scrumboardApp.board
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardSettingsSidebar));
