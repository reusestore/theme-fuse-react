import React from 'react';
import {AppBar, Hidden, Toolbar} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/styles';
import {FuseSearch} from '@fuse';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import ChatPanelToggleButton from 'app/fuse-layouts/shared-components/chatPanel/ChatPanelToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import Logo from 'app/fuse-layouts/shared-components/Logo';

const useStyles = makeStyles(theme => ({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
}));

function ToolbarLayout3(props)
{
    const classes = useStyles(props);

    return (
        <ThemeProvider theme={props.toolbarTheme}>
            <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
                <Toolbar className="container p-0 lg:px-24">

                    {props.config.navbar.display && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton className="w-64 h-64 p-0"/>
                            <div className={classes.separator}/>
                        </Hidden>
                    )}

                    <Hidden mdDown>
                        <div className={classNames("flex flex-no-shrink items-center")}>
                            <Logo/>
                        </div>
                    </Hidden>

                    <div className="flex flex-1">
                        <Hidden xsDown>
                            <FuseSearch className="mx-16 lg:mx-24" variant="basic"/>
                        </Hidden>
                    </div>

                    <div className="flex">

                        <Hidden smUp>
                            <FuseSearch/>
                            <div className={classes.separator}/>
                        </Hidden>

                        <UserMenu/>

                        <Hidden lgUp>

                            <div className={classes.separator}/>

                            <ChatPanelToggleButton/>
                        </Hidden>

                        <div className={classes.separator}/>

                        <QuickPanelToggleButton/>

                        <Hidden mdDown>
                            <div className={classes.separator}/>
                        </Hidden>

                    </div>

                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

function mapStateToProps({fuse})
{
    return {
        config      : fuse.settings.current.layout.config,
        toolbarTheme: fuse.settings.toolbarTheme
    }
}

export default withRouter(connect(mapStateToProps)(ToolbarLayout3));
