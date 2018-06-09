import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import classNames from 'classnames';
import {Avatar, Button, Icon, IconButton, ListItemIcon, ListItemText, Popover, MenuItem, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import * as quickPanelActions from 'main/quickPanel/store/actions';
import * as authActions from 'auth/store/actions';
import {bindActionCreators} from 'redux';
import {FuseShortcuts,FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';

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
        const {classes, toggleQuickPanel, user, logout} = this.props;
        const {userMenu} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-row")}>

                <div className="flex flex-1">
                    <FuseShortcuts/>
                </div>

                <div className="flex">
                    <FuseAnimate delay={300}>
                        <Button className="h-64" onClick={this.userMenuClick}>
                            {user.data.photoURL ?
                                (
                                    <Avatar className="" alt="user photo" src={user.data.photoURL}/>
                                )
                                :
                                (
                                    <Avatar className="">
                                        {user.data.displayName[0]}
                                    </Avatar>
                                )
                            }

                            <div className="hidden md:flex flex-col ml-12 items-start">
                                <Typography component="span" className="normal-case font-500 flex">
                                    {user.data.displayName}
                                </Typography>
                                <Typography className="text-11 capitalize" color="textSecondary">
                                    {user.role}
                                </Typography>
                            </div>

                            <Icon className="text-16 ml-12 hidden sm:flex" variant="action">keyboard_arrow_down</Icon>
                        </Button>
                    </FuseAnimate>

                    <Popover
                        open={Boolean(userMenu)}
                        anchorEl={userMenu}
                        onClose={this.userMenuClose}
                        anchorOrigin={{
                            vertical  : 'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical  : 'top',
                            horizontal: 'center'
                        }}
                        classes={{
                            paper: "py-8"
                        }}
                    >
                        {user.role === 'guest' ? (
                            <React.Fragment>
                                <MenuItem component={Link} to="/login">
                                    <ListItemIcon>
                                        <Icon>lock</Icon>
                                    </ListItemIcon>
                                    <ListItemText className="pl-0" primary="Login"/>
                                </MenuItem>
                                <MenuItem component={Link} to="/register">
                                    <ListItemIcon>
                                        <Icon>person_add</Icon>
                                    </ListItemIcon>
                                    <ListItemText className="pl-0" primary="Register"/>
                                </MenuItem>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <MenuItem component={Link} to="/pages/profile" onClick={this.userMenuClose}>
                                    <ListItemIcon>
                                        <Icon>account_circle</Icon>
                                    </ListItemIcon>
                                    <ListItemText className="pl-0" primary="My Profile"/>
                                </MenuItem>
                                <MenuItem component={Link} to="/apps/mail" onClick={this.userMenuClose}>
                                    <ListItemIcon>
                                        <Icon>mail</Icon>
                                    </ListItemIcon>
                                    <ListItemText className="pl-0" primary="Inbox"/>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        logout();
                                        this.userMenuClose();
                                    }}
                                >
                                    <ListItemIcon>
                                        <Icon>exit_to_app</Icon>
                                    </ListItemIcon>
                                    <ListItemText className="pl-0" primary="Logout"/>
                                </MenuItem>
                            </React.Fragment>
                        )}
                    </Popover>

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
        toggleQuickPanel: quickPanelActions.toggleQuickPanel,
        logout          : authActions.logoutUser
    }, dispatch);
}


function mapStateToProps({auth})
{
    return {
        user: auth.user
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(MainToolbar));
