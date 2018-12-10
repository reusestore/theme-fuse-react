import React from 'react';
import {AppBar, Hidden, MuiThemeProvider, Toolbar, withStyles} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import {FuseSearch, FuseShortcuts, FuseThemes} from '@fuse';
import {withRouter} from 'react-router-dom';
import NavbarMobileToggleButton from 'fuse-layouts/shared/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'fuse-layouts/shared/QuickPanelToggleButton';
import ChatPanelToggleButton from 'fuse-layouts/shared/ChatPanelToggleButton';
import UserMenu from 'fuse-layouts/shared/UserMenu';

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
                <Toolbar className="p-0">

                    {layoutConfig.navbar.display && layoutConfig.navbar.position === 'left' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton/>
                        </Hidden>
                    )}

                    <div className="flex flex-1">
                        <FuseShortcuts/>
                    </div>

                    <div className="flex">

                        <UserMenu/>

                        <div className={classes.separator}/>

                        <FuseSearch/>

                        <Hidden lgUp>

                            <div className={classes.separator}/>

                            <ChatPanelToggleButton/>
                        </Hidden>

                        <div className={classes.separator}/>

                        <QuickPanelToggleButton/>
                    </div>

                    {layoutConfig.navbar.display && layoutConfig.navbar.position === 'right' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton/>
                        </Hidden>
                    )}
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
