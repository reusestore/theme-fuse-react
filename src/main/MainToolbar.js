import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import classNames from 'classnames';
import {Avatar, Button, Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography} from 'material-ui';
import {connect} from 'react-redux';
import * as Actions from 'store/actions';
import * as authActions from 'auth/store/actions';
import {bindActionCreators} from 'redux';
import {FuseShortcuts} from '@fuse';
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
                        {user.data ? (
                            <React.Fragment>
                                <Avatar className="" alt="Guest" src={user.data.avatar}/>

                                <div className="flex flex-col ml-12 items-start">
                                    <Typography component="span" className="normal-case font-500 hidden md:flex">
                                        {user.data.name + ' ' + user.data.lastName}
                                    </Typography>
                                    <Typography className="text-11 capitalize" color="textSecondary">
                                        {user.role}
                                    </Typography>
                                </div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Avatar className="" alt="Guest" src="assets/images/avatars/profile.jpg"/>
                                <div className="flex flex-col ml-12 items-start">
                                    <Typography component="span" className="normal-case font-500 hidden md:flex">
                                        John Doe
                                    </Typography>
                                    <Typography className="text-11 capitalize" color="textSecondary">
                                        {user.role}
                                    </Typography>
                                </div>
                            </React.Fragment>
                        )}

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
                        {user.role === 'guest' ? (
                            <React.Fragment>
                                <MenuItem component={Link} to="/login"
                                >
                                    <ListItemIcon>
                                        <Icon>lock</Icon>
                                    </ListItemIcon>
                                    <ListItemText className="pl-0" primary="Login"/>
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
        toggleQuickPanel: Actions.toggleQuickPanel,
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
