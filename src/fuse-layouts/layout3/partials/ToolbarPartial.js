import React from 'react';
import {AppBar, Hidden, MuiThemeProvider, Toolbar, withStyles} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import {FuseSearch, FuseThemes} from '@fuse';
import {withRouter} from 'react-router-dom';
import NavbarMobileToggleButton from 'fuse-layouts/shared/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'fuse-layouts/shared/QuickPanelToggleButton';
import ChatPanelToggleButton from 'fuse-layouts/shared/ChatPanelToggleButton';
import UserMenu from 'fuse-layouts/shared/UserMenu';
import Logo from 'fuse-layouts/shared/Logo';
import classNames from 'classnames';

const styles = theme => ({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
});

const ToolbarPartial = ({classes, settings}) => {

    const layoutConfig = settings.layout.config;

    return (
        <MuiThemeProvider theme={FuseThemes[settings.theme.toolbar]}>
            <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
                <Toolbar className="container p-0 lg:px-24">

                    {layoutConfig.navbar.display && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton/>
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
                            <FuseSearch className="px-16 lg:px-24" variant="basic"/>
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
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        settings: fuse.settings.current
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(ToolbarPartial)));
