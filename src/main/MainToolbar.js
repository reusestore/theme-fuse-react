import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import classNames from 'classnames';
import {Avatar, Button, Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography} from 'material-ui';
import {connect} from 'react-redux';
import * as Actions from 'store/actions';
import {bindActionCreators} from 'redux';
import {FuseShortcuts} from '@fuse';

const styles = theme => ({
    root     : {
        display   : 'flex',
        alignItems: 'center',
        width     : '100%'
    },
    seperator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
});

class MainToolbar extends Component {
    state = {
        userMenu: null
    };

    userMenuClick = event => {
        this.setState({userMenu: event.currentTarget});
    };

    userMenuClose = () => {
        this.setState({userMenu: null});
    };

    render()
    {
        const {classes, toggleQuickPanel} = this.props;
        const {userMenu} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-row")}>

                <div className={classNames(classes.seperator, "flex lg:hidden")}/>

                <div className="flex flex-1">
                    <FuseShortcuts/>
                </div>

                <div className="flex">
                    <Button
                        className="h-64"
                        aria-owns={userMenu ? 'user-menu' : null}
                        aria-haspopup="true"
                        onClick={this.userMenuClick}
                    >
                        <Avatar className="" alt="John Doe" src="assets/images/avatars/profile.jpg"/>
                        <Typography component="span" className="normal-case font-500 ml-12 hidden md:flex ">John Doe</Typography>
                        <Icon className="text-16 ml-12 hidden sm:flex" variant="action">keyboard_arrow_down</Icon>
                    </Button>
                    <Menu
                        id="user-menu"
                        anchorEl={userMenu}
                        open={Boolean(userMenu)}
                        onClose={this.userMenuClose}
                        classes={{
                            paper: 'mt-48'
                        }}
                    >
                        <MenuItem onClick={this.userMenuClose}>
                            <ListItemIcon>
                                <Icon>account_circle</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary="My Profile"/>
                        </MenuItem>
                        <MenuItem onClick={this.userMenuClose}>
                            <ListItemIcon>
                                <Icon>mail</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary="Inbox"/>
                        </MenuItem>
                        <MenuItem onClick={this.userMenuClose}>
                            <ListItemIcon>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText className="pl-0" primary="Logout"/>
                        </MenuItem>
                    </Menu>

                    <div className={classes.seperator}/>

                    <IconButton className="w-64 h-64">
                        <Icon>search</Icon>
                    </IconButton>

                    <div className={classes.seperator}/>

                    <IconButton className="w-64 h-64" onClick={() => toggleQuickPanel(true)}>
                        <Icon>format_list_bulleted</Icon>
                    </IconButton>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        toggleQuickPanel: Actions.toggleQuickPanel
    }, dispatch);
}

export default withStyles(styles, {withTheme: true})(connect(null, mapDispatchToProps)(MainToolbar));
